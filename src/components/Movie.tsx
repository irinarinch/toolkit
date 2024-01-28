import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { TMovie } from "./List";
import { useActions } from "../hooks/useActions";
import useFavorites from "../hooks/useFavorites";

interface IMovie {
  movie: TMovie;
}

const Movie = ({ movie }: IMovie) => {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const favorite = favorites && favorites.some((m: TMovie) => m.imdbID === movie.imdbID);

  return (
    <>
      <ListGroup.Item variant="dark" style={{ position: "relative" }}>
        <span className="movie-title">{movie.Title}</span>
        {!favorite ? (
          <IoHeartDislikeOutline
            className="like-icon"
            size={20}
            onClick={() => toggleFavorites(movie)}
          />
        ) : (
          <FcLike
            className="like-icon"
            size={20}
            onClick={() => toggleFavorites(movie)}
          />
        )}
      </ListGroup.Item>
      <ListGroup.Item variant="secondary">{movie.Year}</ListGroup.Item>
      <ListGroup.Item variant="secondary">
        <Image src={movie.Poster} rounded />
      </ListGroup.Item>
    </>
  );
};

export default Movie;
