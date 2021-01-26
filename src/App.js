import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50; // react converts every type to string
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked by {likes}</p>

        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random()}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
