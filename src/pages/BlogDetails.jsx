import { useParams, Link } from 'react-router-dom';
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
    const params = useParams();
    console.log(params); // Aquí puedes ver el ID del blog que se pasa como parámetro

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
        <h2>{data.id} - {data.title}</h2>
        <p>{data.body}</p>
        <Link to="/blog" className="btn btn-dark">Volver al Blog</Link>
        </div>
    );
}

export default BlogDetails;