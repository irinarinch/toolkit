import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { TMovie } from "./List";

interface IInfoProps {
  movie: TMovie;
}

const Info = ({ movie }: IInfoProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Director} {movie.Year}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{movie.Actors}</ListGroup.Item>
        <ListGroup.Item>{movie.Genre}</ListGroup.Item>
        <ListGroup.Item>{movie.Runtime}</ListGroup.Item>
        <ListGroup.Item>{movie.imdbRating}</ListGroup.Item>
      </ListGroup>
      <Card.Img variant="top" src={movie.Poster} />
    </Card>
  );
};

export default Info;
