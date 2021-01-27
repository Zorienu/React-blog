import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const handleDeleteBtn = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <div>{blog.body}</div>
          <button onClick={handleDeleteBtn}>Detele blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
