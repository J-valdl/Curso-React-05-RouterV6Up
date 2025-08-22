import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
//import { useEffect } from "react";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (!searchParams.get("filter")) {
  //     setSearchParams({ filter: "default" });
  //   }
  // }, [searchParams, setSearchParams]);

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1>Bienvenido a la página de Blog</h1>
      <h3>Buscar</h3>
      <input type="text" name="" onChange={ handleChange } className="form-control"
        value={searchParams.get("filter") || ""}
      />
      <br />
      <h3>Lista de Posts</h3>
      <ul className="list-group">
        {
          data.filter(item => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let title = item.title.toLowerCase();
            return title.includes(filter.toLowerCase());
          })        
          .map(item => (
          <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item">
            {item.id} - {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Blog;