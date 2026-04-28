import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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
            <Movie
              id={data.id}
              poster={data.poster}
              genres={data.genres}
              title={data.title}
            />
          </div>
        ))}
      </div>
      <ul></ul>
    </>
  );
}

export default Home;
