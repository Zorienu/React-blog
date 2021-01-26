import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "luigi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((b) => b.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('this will be executed just if the state of "name" is changed');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((b) => b.author === "mario")} title="Mario blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change name</button>
    </div>
  );
};

export default Home;
