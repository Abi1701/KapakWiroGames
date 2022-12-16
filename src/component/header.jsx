import * as React from "react";
import { NavContainer,NavLogo,NavContent,NavContents, NavTittle, NavContainerContent } from "./headerStyled";
import { useDispatch, useSelector } from "react-redux";
import { doLogout, updateToken,getProfile } from "../store/actions/authActions";
import { Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/drStrange.png" 

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
      <NavLogo><Image width={100} height={100} src={Logo} alt="Logo"/></NavLogo>
      <NavContainerContent>
      <Divider
            sx={{ height: 50, mt: 2, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContent><NavTittle><Link href="/">Home</Link></NavTittle></NavContent>
      <Divider
            sx={{ height: 50, mt: 2, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContents>{token? (<NavTittle>Hello, {profile?.username}</NavTittle>):(<NavTittle>hello,Visitor</NavTittle>)}</NavContents>
      <Divider
            sx={{ height: 50, mt: 2, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
      <NavContents>{token? (<NavTittle onClick={logOut}>LogOut</NavTittle>):(<NavTittle><Link href='/user/auth'>Login or Register</Link></NavTittle>)}</NavContents>
      </NavContainerContent>
    </NavContainer>
  );
}
