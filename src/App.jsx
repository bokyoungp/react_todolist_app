import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getMovies = async () => {
    const response = await fetch("http://localhost:3000/movies");
    const json = await response.json();
    setDatas(json);
    setIsLoading(false);
  };

  // 서버로부터 데이터 딱 한번만 가져오기
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Movie json-server API</h1>
      <hr />
      {isLoading ? <p>IsLoading...</p> : null}
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            {data.title}
            <img src={data.poster} alt="poster" width="400px" height="600px" />
            <ul>
              {data.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ul></ul>
    </>
  );
}

export default App;
