import { useState } from "react";
import style from "./Experience.module.scss";

export default function Experience() {
  const [clicked, setClicked] = useState(null);

  const experiences = [
    {
      date: "2013 / 09 ~ 2016 / 06",
      title: "中原大學",
      role: "數位後製室工讀生",
      skills: ["Edius", "基本攝影"],
      keywords: ["PHOTO", "VIDEO"],
      photo: "/image/photopraphy.jpg",
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
      photo: "/image/wafer.jpeg",
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
      photo: "/image/helloworld.jpeg",
    },
    {
      date: "2024 / 03 ～",
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
      photo: "/image/coding.jpeg",
    },
  ];

  return (
    <ul className={style.accordion}>
      {experiences.map((exp, index) => (
        <li
          key={index}
          className={`${style.accordionItem} ${
            clicked === index ? style.active : ""
          }`}
          style={{ "--cover": `url(${exp.photo})` }}
          onClick={() => setClicked(clicked === index ? null : index)}
        >
          <div className={style.accordionAction}>
            <div className={style.accordionContent}>
              <h2
                className={`${style.accordionTitle} ${style.accordionTitleHero}`}
              >
                {exp.title}
              </h2>
              <h3 className={style.accordionDescription}>
                {exp.role} <br />
                <br />
                {exp.skills.map((skill, index) => (
                  <span key={index} className={style.accordionSkill}>
                    {skill}
                  </span>
                ))}
                <hr className={style.accordionLine} />
                <br />
                {exp.date}
              </h3>
            </div>
            <div className={style.accordionAside}>
              <h2 className={style.accordionTitle}>{exp.title}</h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
