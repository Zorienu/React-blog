import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // not only for blogs but for any resource
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) throw Error("Could not fetch the data for that resource");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") console.log("fetch aborted");
          else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortController.abort(); // console.log("clean up");
  }, [url]); // it only execute at the initial render, doesn't get into a loop
  // we're getting an error because the fetch take some time to get the data
  // and the initially value for 'blogs' is null
  // so, we don't want to output the blogs until we have a value for blogs
  // We put 'url' as a dependency because every time the url changes, this is gonna rerun the whole function to get the data

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
