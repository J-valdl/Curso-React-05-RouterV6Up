import { Link } from "react-router-dom";  

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>   
      <Link to="/" className="btn btn-dark" >Go to Home</Link>   
    </div>
  );
}

export default NotFound;