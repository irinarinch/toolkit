import Info from "../components/Info";
import { IPageProps } from "../App";

const InfoPage = ({ data }: IPageProps) => {
  const { current } = data;

  return current && <Info movie={current} />;
};

export default InfoPage;
