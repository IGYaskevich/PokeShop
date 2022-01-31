import { REQUEST_POSTFIXES } from "../pages/PokemonsPage/constants/requestPostfixes";

export const isApiCallAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIXES.REQUEST);
};
