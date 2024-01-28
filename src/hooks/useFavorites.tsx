import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useFavorites = () => {
  return useTypedSelector((state) => state.favorites);
}

export default useFavorites