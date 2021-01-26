import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
  // the thing of the right will only be evaluated if the thing of the left side is not null
};

export default Home;
