import * as React from 'react';
import styles from '../../styles/Header.module.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/actions/authActions'
import { AppRegistration, Gamepad, Home, Login, Menu } from '@mui/icons-material';
import { Divider } from '@mui/material';


export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.authReducer.profile)
  let ignore = false
  React.useEffect(() => {
    if (!ignore) fetchData()
    return () => {
      ignore = true
    }
  }, [])
  const fetchData = async () => {
    await dispatch(getProfile())
  }
  const [state, setState] = React.useState({
    top: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List disablePadding sx={'display:flex'}>
      <a className={styles.drawerlist} href="">
        <h1 className={styles.drawercontent}><Login sx={{mr:2,ml:1}} />Login</h1>
      </a>
      <Divider orientation="vertical" flexItem />
      <a className={styles.drawerlist} href="/register">
        <h1 className={styles.drawercontent}><AppRegistration sx={{mr:2,ml:1}} />Register</h1>
      </a>
      <Divider orientation="vertical" flexItem />
      <a className={styles.drawerlist} href="">
        <h1 className={styles.drawercontent}><Gamepad sx={{mr:2,ml:1}} />Game</h1>
      </a>
      <Divider orientation="vertical" flexItem />
      </List>
    </Box>
  );

  return (
      <nav className={styles.nav}>
        <a className={styles.home} href="/"><Home /></a>
        <div className={styles.slidebar}>
        {['top'].map((anchor) => (
      <React.Fragment key={anchor}>
        <h1 onClick={toggleDrawer(anchor, true)}>Menu</h1>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
    <h1 className={styles.name}>KAPAK WIRO</h1>
        </div>
        <h1 className={styles.navContents}>hello,{profile?.name}</h1>
        <h1 className={styles.logout}>Logout</h1>
      </nav>
    
  )
}
