import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    const json = await response.json();
    setMovie(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>영화 정보 상세 보기</h1>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt="poster" />
      <p>{movie.director}</p>
    </div>
  );
}

export default Detail;
