import PropTypes from "prop-types";

function Movie({ poster, title, genres }) {
  return (
    <>
      <h3>{title}</h3>
      <img src={poster} alt="poster" width="400px" height="600px" />
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
