/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Target.module.scss";

const TargetCard = ({ term, isActive, onClick }) => (
  <motion.div
    className={`${styles.card} ${isActive ? styles.active : ""}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Paper elevation={isActive ? 8 : 2} className={styles.cardContent}>
      <Typography variant="h6">{term}</Typography>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </Paper>
  </motion.div>
);

export default function Target() {
  const [activeTarget, setActiveTarget] = useState(null);

  const TARGET = [
    {
      term: "短期目標",
      expect: "持續鑽研 React，以及與公司專案相關的前端技術",
    },
    {
      term: "中期目標",
      expect: "學習自己想學的技術，做點有趣的事",
    },
    {
      term: "長期目標",
      expect: "能夠成為一個腦袋裡有點東西的工程師，並願意與他人分享經驗",
    },
  ];

  return (
    <Box className={styles.container}>
      <div className={styles.timelineContainer}>
        {TARGET.map((target, index) => (
          <React.Fragment key={target.term}>
            <TargetCard
              {...target}
              isActive={activeTarget === target.term}
              onClick={() => setActiveTarget(target.term)}
            />
            {index < TARGET.length - 1 && (
              <div className={styles.connector}>
                <motion.div
                  className={styles.progressBar}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeTarget === target.term ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <AnimatePresence>
        {activeTarget && (
          <motion.div
            className={styles.detailCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Paper elevation={3} className={styles.detailContent}>
              <Typography variant="h5">
                {TARGET.find((t) => t.term === activeTarget).term}
              </Typography>
              <Typography variant="body1">
                {TARGET.find((t) => t.term === activeTarget).expect}
              </Typography>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
