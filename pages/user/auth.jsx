import React, { useState } from "react";
import { doLogin } from '../../src/store/actions/authActions'
import { useDispatch } from 'react-redux'
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
export default function Auth() {
  const [signIn, toggle] = useState(true);
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
    dispatch(doLogin(body))
  }
  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', {
        first_name: value.first_name,
        last_name:value.last_name,
        username: value.username,
        email: value.email,
        password: value.password,
      })
      toggle(true)
    } catch (error) {
    }
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
            type="text"
            placeholder="Username"
            onChange={handleChange("nama")}
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
          <Button onClick={handleRegister}>Sign Up</Button>
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
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>
          <RightOverlayPanel signingIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>
              Enter your personal details and start journey with us
            </Paragraph>
            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>

  );
}
