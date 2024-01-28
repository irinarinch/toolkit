import List from "../components/List";
import { IFavoritesPageProps } from "../App";

const FavoritesPage = ({ data }: IFavoritesPageProps) => {
  return (
    <>
      <List data={data} />
      {(data.length === 0) && <h1>Вы ничего не добавили в избранное</h1>}
    </>
  );
};

export default FavoritesPage;