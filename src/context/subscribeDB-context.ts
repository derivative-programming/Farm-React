import { createContext } from "react";

export interface ISubscribeDbContext {
  updateDB: () => void;
}
export const defaultState = {
  updateDB: () => {},
};

export const SubscribeDBContext =
  createContext<ISubscribeDbContext>(defaultState);
