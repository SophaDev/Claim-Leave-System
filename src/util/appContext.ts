import React from 'react';

export interface UserLogin {
  id: string;
  fullName: string;
  gender: string;
}
export interface AppContext {
  user?: UserLogin | null;
  isAuth: boolean;
  login: (data: any) => void;
  logout: () => void;
}
// Provider
const AppCont = React.createContext({} as AppContext);
// Consummer
const appCons = (): AppContext => React.useContext(AppCont);
export { AppCont, appCons };
