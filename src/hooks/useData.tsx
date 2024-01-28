import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useData = () => {
  return useTypedSelector((state) => state.movies);
}

export default useData;
