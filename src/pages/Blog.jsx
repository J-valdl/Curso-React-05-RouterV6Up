import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Bienvenido a la página de Blog</h2>
      <ul className="list-group">
        {data.map(item => (
          <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item">
            {item.id} - {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Blog;