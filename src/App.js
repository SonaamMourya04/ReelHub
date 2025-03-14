import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  (() => {
    const App = () => {
      const [movie, setMovie] = useState("");

      const suggestMovie = () => {
        const movies = ["Inception", "Interstellar", "The Matrix", "Parasite", "Avengers"];
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
      };

      return (
        <div style={styles.container}>
          <h1>🎬 ReelHub - Movie Suggestion</h1>
          <button style={styles.button} onClick={suggestMovie}>Suggest a Movie</button>
          {movie && <p>🎥 Watch: <strong>{movie}</strong></p>}
        </div>
      );
    };

    // Inline styles
    const styles = {
      container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif"
      },
      button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }
    };

    return <App />;
  })()
);
