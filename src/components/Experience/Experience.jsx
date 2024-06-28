import { Stack, Typography, Box, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import style from "./Experience.module.scss";

export default function Experience() {
  const [clicked, setClicked] = useState(null);
  const [animate, setAnimate] = useState(false);

  const experiences = [
    {
      date: "2013 / 09 ~ 2016 / 06",
      title: "中原大學",
      role: "數位後製室工讀生",
      skills: ["Edius", "基本攝影"],
      keywords: ["PHOTO", "VIDEO"],
    },
    {
      date: "2017 / 07 ~ 2023 / 11",
      title: "旺泓有限公司",
      role: "業務助理",
      skills: [
        "客戶接洽",
        "國際貿易",
        "協作開案",
        "進出口報關",
        "半導體產業相關知識",
      ],
      keywords: ["CUSTOMER", "CONTACT"],
    },
    {
      date: "2023 / 07 ～ 2023 / 12",
      title: "Wehelp Bootcamp",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python Flask",
        "MySQL",
        "API 串接",
        "AWS EC2",
        "Next.js",
        "Firebase",
        "Vercel",
      ],
      keywords: ["LEARNING", "CODING"],
    },
    {
      date: "2024 ～",
      title: "弈樂科技",
      role: "Web前端工程師",
      skills: [
        "React",
        "Redux",
        "Zustand",
        "Immer",
        "API 串接",
        "Mock API",
        "Material UI",
      ],
      keywords: ["FRONTEND", "EXERCISE"],
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
      sx={{ padding: "50px 20px", height: "90vh" }}
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
        <Box
          key={index}
          width={"80%"}
          className={style.card}
          style={{
            display: clicked !== null && clicked !== index ? "none" : "block",
            position: "relative",
          }}
        >
          <Stack onClick={() => setClicked(clicked === index ? null : index)}>
            <Typography variant="h4">{exp.date}</Typography>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography>{exp.role}</Typography>
          </Stack>
          {clicked === index && (
            <>
              <Typography
                variant="h1"
                className={style.keyWordLeft}
                sx={{
                  position: "absolute",
                  left: 100,
                  top: "-120%",
                  zIndex: -1,
                  color: "#FFF",
                }}
              >
                {exp.keywords[0]}
              </Typography>
              <Typography
                variant="h1"
                className={style.keyWordRight}
                sx={{
                  position: "absolute",
                  right: 100,
                  top: "120%",
                  zIndex: -1,
                  color: "#FFF",
                }}
              >
                {exp.keywords[1]}
              </Typography>
            </>
          )}
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
