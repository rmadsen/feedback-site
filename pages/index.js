import Formulate from "formulate-core";
import renderer from "formulate-antd";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { render } from "react-dom";

const schema = {
  fields: [
    { fieldName: "email", displayName: "Email Address", type: "string" },
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Thank you for visiting!</h1>

        <p className={styles.description}>We would love your feedback...</p>
        <Formulate schema={schema} onSubmit={console.log} renderer={renderer} />
      </main>

      <footer className={styles.footer}>Powered by Formulate</footer>
    </div>
  );
}
