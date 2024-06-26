import { Stack, Typography, Box, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import WorkIcon from "@mui/icons-material/Work";
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
      photo: "src/assets/image/photopraphy.jpg",
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
      photo: "src/assets/image/wafer.jpeg",
    },
    {
      date: "2023 / 07 ～ 2023 / 12",
      title: "Wehelp Bootcamp",
      role: "developer",
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
      photo: "src/assets/image/helloworld.jpeg",
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
      photo: "src/assets/image/coding.jpeg",
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={style.background}
      style={{
        backgroundImage:
          clicked !== null ? `url(${experiences[clicked].photo})` : "none",
      }}
    >
      <Stack
        className={animate ? style.experience : ""}
        direction="column"
        spacing={6}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ padding: "50px 40px", minHeight: "100vh" }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 4,
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            color: "#FFA726",
          }}
        >
          Experience
        </Typography>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            width={"100%"}
            maxWidth="800px"
            className={style.card}
            style={{
              display: clicked !== null && clicked !== index ? "none" : "block",
              position: "relative",
            }}
          >
            <Stack onClick={() => setClicked(clicked === index ? null : index)}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <WorkIcon sx={{ color: "#FFA726" }} />
                <Typography variant="h4">{exp.date}</Typography>
              </Stack>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography>{exp.role}</Typography>
            </Stack>
            {/* {clicked === index && (
              <>
                <Typography
                  variant="h1"
                  className={style.keyWordLeft}
                  sx={{
                    position: "absolute",
                    left: 100,
                    top: "-130%",
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
            )} */}
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
                <Stack direction="row" spacing={1} flexWrap="wrap">
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
    </div>
  );
}
