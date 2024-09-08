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
      <img className="background" src="/image/ocean.jpeg" alt="landing page" />
    </Stack>
  );
};

export default App;
