import style from "./styles.module.scss";

import { Header } from "../Header";
import { Spinner } from "../Spinner";

export const MainLayout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.pages}>{children}</div>
      {/*<Spinner />*/}
    </div>
  );
};
