import { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import styles from "./Target.module.scss"; // 使用 CSS 模块

export default function Target() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [fillingWidth, setFillingWidth] = useState(0);
  const eventsWrapperRef = useRef(null);

  const TARGET = [
    {
      term: "短期目標",
      expect: "持續鑽研 React，以及與公司專案相關的前端技術",
      date: "16/01/2014",
    },
    {
      term: "中期目標",
      expect: "學習自己想學的技術，做點有趣的事",
      date: "28/02/2014",
    },
    {
      term: "長期目標",
      expect: "能夠成為一個腦袋裡有點東西的工程師，並願意與他人分享經驗",
      date: "20/04/2014",
    },
  ];

  useEffect(() => {
    if (selectedEvent) {
      const selectedElement = eventsWrapperRef.current.querySelector(
        `.${styles.selected}`
      );
      const eventsWrapper = eventsWrapperRef.current;
      const eventsWrapperRect = eventsWrapper.getBoundingClientRect();
      const selectedRect = selectedElement.getBoundingClientRect();
      const newWidth =
        selectedRect.left + selectedRect.width / 2 - eventsWrapperRect.left;
      setFillingWidth(newWidth);
    } else {
      setFillingWidth(0);
    }
  }, [selectedEvent]);

  const handleEventClick = (date) => {
    setSelectedEvent(date);
  };

  return (
    <div className={styles.timeline}>
      <div className={styles["events-wrapper"]} ref={eventsWrapperRef}>
        <div className={styles.events}>
          {TARGET.map((target, index) => (
            <div
              key={target.term}
              className={`${styles.event} ${
                selectedEvent === target.date ? styles.selected : ""
              }`}
              style={{ left: `${index * 100 + 50}px` }} // 调整事件点的位置
              onClick={() => handleEventClick(target.date)}
            >
              {target.term}
            </div>
          ))}
          <span
            className={styles["filling-line"]}
            style={{
              width: `${fillingWidth}px`,
            }}
          />
        </div>
      </div>
      <div>
        {TARGET.map((target) => (
          <div
            key={target.term}
            style={{
              display: selectedEvent === target.date ? "block" : "none",
            }}
          >
            <Typography variant="h3">{target.term}</Typography>
            <Typography variant="h4">{target.expect}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
