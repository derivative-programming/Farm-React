import { createContext } from "react";

// Define the interface for the context
export interface ISubscribeDbContext {
  updateDB: () => void;
}
// Define the default state using the interface
// The defaultState provides a no-op function for updateDB
export const defaultState: ISubscribeDbContext = {
  updateDB: () => {
    // This is a no-op function to serve as a default
  },
};

export const SubscribeDBContext =
  createContext<ISubscribeDbContext>(defaultState);
