import { Stack, Typography, Box, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import style from "./Experience.module.scss";

export default function Experience() {
  const [clicked, setClicked] = useState(null);
  const [animate, setAnimate] = useState(false);

  const experiences = [
    {
      date: "2013 ~ 2016",
      title: "中原大學",
      role: "數位後製室工讀生",
      skills: ["Edius", "基本攝影"],
    },
    {
      date: "2017 ~ 2023",
      title: "旺泓有限公司",
      role: "業務助理",
      skills: [
        "客戶接洽",
        "國際貿易",
        "協作開案",
        "進出口報關",
        "半導體產業相關知識",
      ],
    },
    {
      date: "2024 ～",
      title: "弈樂科技",
      role: "Web前端工程師",
      skills: ["React", "Zustand", "Immer", "Mock API", "Material UI"],
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Stack
      className={animate ? style.experience : ""}
      direction="column"
      spacing={4}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ padding: 2 }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: 4,
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} width={"80%"} className={style.card}>
          <Stack onClick={() => setClicked(clicked === index ? null : index)}>
            <Typography variant="h4">{exp.date}</Typography>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography>{exp.role}</Typography>
          </Stack>
          <Collapse in={clicked === index} timeout="auto" unmountOnExit>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: "10px",
                padding: "10px",
                borderLeft: "2px solid #EC9A29",
                overflow: "auto",
              }}
            >
              <Typography variant="h6">Skills：</Typography>
              <Stack direction="row" spacing={1}>
                {exp.skills.map((skill, skillIndex) => (
                  <Typography key={skillIndex} className={style.skills}>
                    {skill}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Collapse>
        </Box>
      ))}
    </Stack>
  );
}
