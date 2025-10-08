// src/components/Login.jsx
import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLoginSuccess(user);
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}`);
      // Here you can route or store user info as needed
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login to Verdant Admin Panel</h2>
      <button onClick={handleLogin} style={styles.button}>
        Sign in with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#34A853",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Login;
