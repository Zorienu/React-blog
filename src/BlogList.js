// the list of blogs can be used in various places on the website

import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  //const handleDelete = (id) => {}; we can't have this here, we can't interact with the data
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <Link to={`/blog/${b.id}`}>
            <h2>{b.title}</h2>
            <p>Written by {b.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
