"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>404 - Η Σελίδα αυτή δεν βρέθηκε.</h1>
      <p style={styles.subtext}>Sorry, we couldn’t find the page you’re looking for.</p>
      
      <Link href="/" style={styles.link}>
        Επιστρέψτε στην αρχική
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "rgb(31,41,55)",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
  },
  subtext: {
    fontSize: "1.5rem",
    color: "#fff",
    margin: "1rem 0",
  },
  link: {
    marginTop: "20px",
    fontSize: "1.2rem",
    textDecoration: "none",
    border: "1px solid #f6c506",
    padding: "10px 20px",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    color: "#f6c506",
  },
};
