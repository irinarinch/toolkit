import { Link } from "react-router-dom";
import List from "../components/List";
import Search from "../components/Search";

import { IPageProps } from "../App";

const HomePage = ({ data }: IPageProps) => {
  const { isLoading, error, list } = data;

  return (
    <>
      <div className="header">
        <Search />
        <Link to="/favorites" className="favorites-btn">
          Избранное
        </Link>
      </div>
      {isLoading && <span>Поиск...</span>}
      {error && error}
      {<List data={list}></List>}
    </>
  );
};

export default HomePage;
