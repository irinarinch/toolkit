import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";



type TListItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

interface IListProps {
  data: TListItem[];
}

const List = ({ data }: IListProps) => {
  const nav = useNavigate();
  
  const onClick = (e: any, id: string) => {
    if (e.target.closest('.like-icon')) return;
    nav(`/info/${id}`);
  }
  return (
    <div className="search_result_container">
      {data.map((item) => (
        <ListGroup key={item.imdbID} className="my-2" onClick={(e) => onClick(e, item.imdbID)}>
          <ListGroup.Item variant="dark" style={{position: "relative"}}>
            {item.Title}
            <IoHeartDislikeOutline className="like-icon" size={20}/>
            {/* <FcLike className="like-icon" size={20}/> */}
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">{item.Year}</ListGroup.Item>
          <ListGroup.Item variant="secondary">
            <Image src={item.Poster} rounded />
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};

export default List;
