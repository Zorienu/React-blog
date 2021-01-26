// the list of blogs can be used in various places on the website

const BlogList = ({ blogs, title, handleDelete }) => {
  //const handleDelete = (id) => {}; we can't have this here, we can't interact with the data
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <h2>{b.title}</h2>
          <p>Written by {b.author}</p>
          <button onClick={() => handleDelete(b.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
