import { useState, useCallback, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
function Mainn() {
  const [query, setQuery] = useState("ice");
  const [data, setData] = useState([]);

  const controllerRef = useRef(null);

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const renderItem = useCallback(({ title }, key, ref) => (
    <div ref={ref} key={key}>
      {title}
    </div>
  ));

  const getData = useCallback(async (query, pageNumber) => {
    try {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();

      const promise = await fetch(
        "https://openlibrary.org/search.json?" +
          new URLSearchParams({
            q: query,
            page: pageNumber,
          }),
        { signal: controllerRef.current.signal }
      );
      const data = await promise.json();
      console.log(data);

      setData((prevData) => [...prevData, ...data.docs]);
    } catch (e) {}
  }, []);
  return (
    <>
      <input type="text" value={query} onChange={handleInput} />

      <InfiniteScroll
        renderListItem={renderItem}
        getData={getData}
        listData={data}
        query={query}
      />
    </>
  );
}

export default Mainn;
