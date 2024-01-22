import List from "../components/List";
import Search from "../components/Search";

const arr = [
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    imdbID: "tt0103064",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "The Terminator",
    Year: "1984",
    imdbID: "tt0088247",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lady Terminator",
    Year: "1989",
    imdbID: "tt0095483",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];

const HomePage = () => {
  return (
    <>
      <Search />
      <List data={arr}></List>
    </>
  );
};

export default HomePage;
