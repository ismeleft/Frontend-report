import "./App.css";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack sx={{ position: "relative" }}>
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          position: "absolute",
          top: isMobile ? "15%" : "20%",
          width: "100%",
          textAlign: "center",
          fontFamily: '"Noto Serif Khitan Small Script", serif',
          fontWeight: 400,
          fontStyle: "normal",
          color: "#F28500",
          fontSize: isMobile ? "2rem" : "3rem",
        }}
      >
        Hello World
      </Typography>
      <Stack
        sx={{
          position: "absolute",
          top: isMobile ? "35%" : "40%",
          width: "100%",
          textAlign: "center",
          padding: isMobile ? "10px" : "20px",
        }}
      >
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{
            color: "white",
            marginBottom: isMobile ? "5px" : "10px",
            fontFamily: "Arial, sans-serif",
            fontSize: isMobile ? "0.9rem" : "1.25rem",
          }}
        >
          Front-end Engineer | Dog Lover | Music Enthusiast
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontStyle: "italic",
            fontFamily: "Arial, sans-serif",
            fontSize: isMobile ? "0.8rem" : "1rem",
          }}
        >
          &ldquo;Stay hungry, stay foolish&rdquo;
        </Typography>
      </Stack>
      <img
        className="background"
        src="/image/ocean.jpeg"
        alt="landing page"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </Stack>
  );
};

export default App;
