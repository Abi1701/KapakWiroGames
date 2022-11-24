import React, { useState } from "react";
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
    nama: "",
    email: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("/user/login", {
        email: value.email,
        password: value.password,
      });
      localStorage.setItem("_q", data.accessToken);
      window.location.reload();
      toast.success("login success");
    } catch (error) {
      toast.error("Wrong password or Wrong username");
    }
  };
  const handleRegister = async () => {
    try {
      await axios.post("/user/register", {
        nama: value.nama,
        email: value.email,
        password: value.password,
      });
      toggle(true);
    } catch (error) {
      toast.error("register error");
    }
  };
  return (
    <Container>
      <SignUpContainer signingIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Input
            type="text"
            placeholder="Name"
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
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange("password")}
          />
          <Button onClick={handleRegister}>Sign Up</Button>
        </Form>
      </SignUpContainer>
      <SignInContainer signingIn={signIn}>
        <Form>
          <Title>Sign in</Title>
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
          <Anchor href="#">Forgot your password?</Anchor>
          <Button onClick={handleLogin}>Sign In</Button>
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
