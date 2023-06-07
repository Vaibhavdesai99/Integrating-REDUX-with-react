import classes from "./Header.module.css";
import { authActions } from "./Store";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logOutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      <h1>Redux Auth</h1>
    </header>
  );
};

export default Header;
