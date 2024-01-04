import { useEffect, useState } from "react";

//MUST start with use when making a custom hook
//runs on each rendering, if after function u put [], it runs only on initial render, 
//if u put ex: name in it, it will change every time name changes
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController();


    setTimeout(() => {
      //signal so u can check the status of the fetch
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok){
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        if(!err.name === 'AbortError'){
          setIsPending(false)
          setError(err.message)
        }
      })
    }, 500)

    return () => abortCont.abort()
  }, [url]);

  return {data, isPending, error}
}

//must export to be able to use in other files
export default useFetch