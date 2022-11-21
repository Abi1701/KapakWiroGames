import { Container } from '@mui/system'
import Image from 'next/image'
import styles from '../styles/gameList.module.css'
import Banner from '../public/assets/banner.png'

export default function Gamelist(){
  return(
    <section>
    <div className={styles.grid}>
    <a href='https://nextjs.org/docs' className={styles.card}>
      <h2>Rock Papper Scissors</h2>
      <img src={Banner} alt="RPS" />
      <p>Find in-depth information about Next.js features and API.</p>
    </a>

    <a href='https://nextjs.org/learn' className={styles.card}>
      <h2>Roll Da DICE</h2>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
    </a>

    <a
      href='https://github.com/vercel/next.js/tree/canary/examples'
      className={styles.card}>
      <h2>SHOOT De Duck</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
    </a>

    <a
      href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
      className={styles.card}>
      <h2>Hunt Da LadyBug</h2>
      <p>
        Instantly deploy your Next.js site to a public URL with Vercel.
      </p>
    </a>
  </div>
  </section>
 
  )
}