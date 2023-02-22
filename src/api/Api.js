import { useEffect, useState } from "react";

const Api = () => {
  const [endPoint, setEndpoint] = useState("");
  const [container, setContainer] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "533f4db55bmshfa026f92dae50b3p134a1cjsn8764e9bfb332",
      "X-RapidAPI-Host": "flashlive-sports.p.rapidapi.com",
    },
  };
  useEffect(() => {
    search();
  }, [endPoint]);
  const search = () => {
    fetch(
      `https://flashlive-sports.p.rapidapi.com/v1/search/multi-search?locale=en_INT&query=+${endPoint}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((data) => {
        setContainer(data);
      })
      .catch((err) => console.error(err));
  };
  const handleSubmit = (e) => e.preventDefault();
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={endPoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      {/* {container.map((el) => {
        <div>{el.TITLE}</div>;
      })} */}
    </div>
  );
};

export default Api;
