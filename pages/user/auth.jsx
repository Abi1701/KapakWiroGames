import React, { useState } from "react";
import { changeToggle, doLogin, doRegister } from '../../src/store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  SignUpContainer,
  Form,
  Input,
  Title,
  Button,
  SignInContainer,
  Anchor,
  GhostButton,
  LeftOverlayPanel,
  Overlay,
  OverlayContainer,
  Paragraph,
  RightOverlayPanel,
} from "../../src/component/styled";
import withOuthAuth from "../../src/withouthAuth";
 function Auth() {
  const signIn = useSelector((state) => state.authReducer.toggle)
  const [value, setValue] = useState({
    first_name:"",
    last_name:"",
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
  });
  const dispatch = useDispatch()
  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  const fetchLogin = async () => {
    const body = {
      username: value.username,
      password: value.password,
    }
   await doLogin(body)
  }

  const fetchRegister = async () => {
    const body = {
    first_name: value.first_name,
    last_name:value.last_name,
    username: value.username,
    email: value.email,
    password: value.password,
  }
   await dispatch(doRegister(body))
  }
const updateToggle =(data)=>{
  dispatch(changeToggle(data))
}
  return (
    <Container>
      <SignUpContainer signingIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Input
            type="text"
            placeholder="First Name"
            onChange={handleChange("first_name")}
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={handleChange("last_name")}
          />
          <Input
            type="username"
            placeholder="username"
            onChange={handleChange("username")}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={handleChange("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
          />
          <Button onClick={fetchRegister}>Sign Up</Button>
        </Form>
      </SignUpContainer>
      <SignInContainer signingIn={signIn}>
        <Form>
          <Title>Sign in</Title>
          <Input
            type="username"
            placeholder="username"
            onChange={handleChange("username")}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
          />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button onClick={fetchLogin}>Sign In</Button>
        </Form>
      </SignInContainer>
      <OverlayContainer signingIn={signIn}>
        <Overlay signingIn={signIn}>
          <LeftOverlayPanel signingIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => updateToggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>
          <RightOverlayPanel signingIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>
              Enter your personal details and start journey with us
            </Paragraph>
            <GhostButton onClick={() => updateToggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}
export default withOuthAuth(Auth)