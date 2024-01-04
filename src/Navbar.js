import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Maxim blog</h1>
      <div className="links">
        {/*with anchor tags and html request is sent to the server and the result is rendered,
         but with links React intercepts the http request which is much faster*/}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;