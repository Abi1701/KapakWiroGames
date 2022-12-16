import * as React from "react";
import { NavContainer,NavContent,NavContents, NavTittle } from "./headerStyled";
import { useDispatch, useSelector } from "react-redux";
import { doLogout, updateToken,getProfile } from "../store/actions/authActions";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.authReducer.profile);

  const fetchData = async () => {
    await dispatch(updateToken());
  };
  const [state, setState] = React.useState({
    top: false,
  });

  const logOut = async () => {
    await doLogout();
  };

  return (
    <NavContainer>
      <NavContent><NavTittle>Kapak Wiro Corp.</NavTittle></NavContent>
      <Divider
            sx={{ height: 30, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContent><NavTittle><Link href="/">Home</Link></NavTittle></NavContent>
      <Divider
            sx={{ height: 30, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContents>{token? (<NavTittle>Hello, {profile?.username}</NavTittle>):(<NavTittle>hello,Visitor</NavTittle>)}</NavContents>
      <Divider
            sx={{ height: 30, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContents>{token? (<NavTittle onClick={logOut}>LogOut</NavTittle>):(<NavTittle><Link href='/user/auth'>Login or Register</Link></NavTittle>)}</NavContents>
    </NavContainer>
  );
}
