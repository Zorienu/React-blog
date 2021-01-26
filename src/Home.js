const Home = () => {
  const handleClick = (name) => {
    alert("hello " + name);
  };

  const showEventInformation = (e) => {
    console.log(e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={() => handleClick("buru")}>Click me!</button>
      <button onClick={showEventInformation}>Click me!</button>
    </div>
  );
};

export default Home;
