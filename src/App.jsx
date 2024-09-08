import "./App.css";
import { Stack, Typography } from "@mui/material";

const App = () => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "20%",
          width: "100%",
          textAlign: "center",
          fontFamily: '"Noto Serif Khitan Small Script", serif',
          fontWeight: 400,
          fontStyle: "normal",
          color: "#F28500",
        }}
      >
        Hello World
      </Typography>
      <Stack
        sx={{
          position: "absolute",
          top: "40%",
          width: "100%",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            marginBottom: "10px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Front-end Engineer | Dog Lover | Music Enthusiast
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontStyle: "italic",
            fontFamily: "Arial, sans-serif",
          }}
        >
          &ldquo;Stay hungry, stay foolish&rdquo;
        </Typography>
      </Stack>
      <img className="background" src="/image/ocean.jpeg" alt="landing page" />
    </Stack>
  );
};

export default App;
