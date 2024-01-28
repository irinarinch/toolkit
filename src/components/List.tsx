import Movie from "./Movie";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import "bootstrap/dist/css/bootstrap.min.css";

export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Genre?: string;
  Runtime?: string;
  Director?: string;
  Actors?: string;
  imdbRating?: string;
};

interface IListProps {
  data: TMovie[];
}

const List = ({ data }: IListProps) => {
  const nav = useNavigate();
  const { fetchMovieById } = useActions();

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    const target = e.target as HTMLElement;
    if (target.closest(".like-icon")) return;
    
    fetchMovieById(id)
    nav(`/${id}`);
  };

  return (
    <div className="search_result_container">
      {data.map((item) => (
        <ListGroup
          key={item.imdbID}
          className="my-2"
          style={{ cursor: "pointer", marginRight: "15px" }}
          onClick={(e) => onClick(e, item.imdbID)}
        >
          <Movie movie={item} />
        </ListGroup>
      ))}
    </div>
  );
};

export default List;
