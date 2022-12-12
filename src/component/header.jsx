import * as React from "react";
import styles from "../../styles/Header.module.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import {
  doLogout,
  getProfile,
  updateToken,
} from "../store/actions/authActions";
import {
  AppRegistration,
  Gamepad,
  Home,
  Login,
  Menu,
} from "@mui/icons-material";
import { Divider } from "@mui/material";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  let ignore = false;
  React.useEffect(() => {
    if (!ignore) fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  const fetchData = async () => {
    await dispatch(updateToken());
  };
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const logOut = async () => {
    await doLogout();
  };
  const list = (anchor) => (
    <Box
      backgroundColor="black"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {token ? (
        <h1 onClick={logOut} className={styles.logout}>
          Logout
        </h1>
      ) : (
        <List disablePadding sx={"display:flex"}>
          <a className={styles.drawerlist} href="/user/auth">
            <h1 className={styles.drawercontent}>
              <Login sx={{ mr: 2, ml: 1 }} />
              Login
            </h1>
          </a>
          <Divider color="white" orientation="vertical" flexItem />
          <a className={styles.drawerlist} href="/user/auth">
            <h1 className={styles.drawercontent}>
              <AppRegistration sx={{ mr: 2, ml: 1 }} />
              Register
            </h1>
          </a>
        </List>
      )}
    </Box>
  );

  return (
    <nav className={styles.nav}>
      <a className={styles.home} href="/">
        <Home />
      </a>
      <div className={styles.slidebar}>
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <h1
              className={styles.slideBarMenu}
              onClick={toggleDrawer(anchor, true)}
            >
              Menu
            </h1>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      {token? (<h1 className={styles.navContents}>hello,User</h1>):(<h1 className={styles.navContents}>hello,Visitor</h1>)}
      
    </nav>
  );
}
