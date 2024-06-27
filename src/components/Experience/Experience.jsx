import { Stack } from "@mui/material";
import { useState } from "react";

export default function Experience() {
  const [clicked, setClicked] = useState(false);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <h1>Experience</h1>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          sx={{
            border: "1px solid #EC9A29",
            borderRadius: "10px",
            padding: "20px 50px",
            margin: "10px",
            position: "relative",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#EC9A29",
              color: "white",
            },
          }}
          onClick={() => setClicked(!clicked)}
        >
          <h2>2013-2016</h2>
          <p>中原大學數位後製室工讀生</p>
          {clicked && (
            <Stack
              spacing={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                position: "absolute",
                top: "0",
                right: "-80%",
                width: "200px",
                transition: "opacity 0.3s ease-in-out",
                opacity: clicked ? 1 : 0,
              }}
            >
              <Stack>----------</Stack>
              <Stack>
                <h2>Skill</h2>
                <p>Edius</p>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack>
        <h2>2017-2023</h2>
        <p>旺泓有限公司</p>
        <p>業務助理</p>
      </Stack>
      <Stack>
        <h2>2024 ～</h2>
        <p>弈樂科技</p>
        <p>Web前端工程師</p>
      </Stack>
    </Stack>
  );
}
