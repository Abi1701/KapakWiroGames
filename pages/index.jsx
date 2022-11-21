import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../src/store/actions/authActions";
import Header from "../src/component/header";
import Gamelist from "./gameList";
import { TextField } from "@mui/material";
import { Login } from "@mui/icons-material";
export default function Home() {
  const profile = useSelector((state) => state.authReducer.profile);
  return (
    <>
    <section>
    <div className={styles.container}>
        <div className={styles.content}>
          <h1>Kapak Wiro C  orp.</h1>
          <h5>est.2022</h5>
          <h1>
            Our Game Page only for fun and make some friends. <br />
            <span className={styles.span}>Do NOT</span> ruin our{" "}
            <span className={styles.spans}> GAME ENVIRONMENT. </span>{" "}
          </h1>
        </div>
        <img className={styles.Logo} src='./assets/banner.png' alt="" />
        </div>
    </section>
    <section className={styles.Gamelist}>
      <div className={styles.GamelistContent}>
      <a href="https://nextjs.org/docs" className={styles.cardGamelist}>
              <h2>Rock Papper Scissors</h2>
              <img className={styles.picture} src='/assets/banner.png' alt="RPS" />
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.cardGamelist}>
              <h2>Rock Papper Scissors</h2>
              <img className={styles.picture} src='/assets/banner.png' alt="RPS" />
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.cardGamelist}>
              <h2>Rock Papper Scissors</h2>
              <img className={styles.picture} src='/assets/banner.png' alt="RPS" />
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
      </div>

    </section>
    <section className={styles.promo}>
    <div className={styles.input}>
          <div className={styles.contentContainer}>
            <h1 className={styles.inputContent}>
              Easy{" "}
              <a href="/register" className={styles.spanRegistration}>
                <Login /> Registration
              </a>
              <br /> you only need to put your <span>EMAIL</span>
            </h1>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Rock Papper Scissors</h2>
              <img className={styles.picture} src='/assets/banner.png' alt="RPS" />
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </div>
    </section>
        
      
    </>
  );
}
