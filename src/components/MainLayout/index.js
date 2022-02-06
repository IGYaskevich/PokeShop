import { Header } from "../Header";

import style from "./styles.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.pages}>{children}</div>
    </div>
  );
};
