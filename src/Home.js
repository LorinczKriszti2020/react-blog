import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //rename data to blogs while destructuring
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/*the && operator checks for left side first and if false, it doesnt bother to check the right side,
      so it renders only when blogs is not null*/}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
   );
}
 
export default Home;