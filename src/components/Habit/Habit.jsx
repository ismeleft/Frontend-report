import { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CONCERT = [
  {
    singer: "法蘭",
    image: "/image/fran.jpeg",
  },
  {
    singer: "BLACKPINK",
    image: "/image/blackpink.jpeg",
  },
  {
    singer: "張惠妹",
    image: "/image/amei.jpeg",
  },
  {
    singer: "田馥甄",
    image: "/image/hebe.jpeg",
  },
  {
    singer: "Coldplay",
    image: "/image/coldplay.jpeg",
  },
  {
    singer: "縉Jin",
    image: "/image/jin.jpeg",
  },
  {
    singer: "鄭宜農",
    image: "/image/enno.jpeg",
  },
  {
    singer: "霓虹綠洲音樂節",
    image: "/image/neonOasis.png",
  },
  {
    singer: "The fin.",
    image: "/image/thefin.jpeg",
  },
  {
    singer: "李泳知",
    image: "/image/youngji.jpeg",
  },
  {
    singer: "BABYMONSTER",
    image: "/image/babymonster.jpeg",
  },
  {
    singer: "DASUTT",
    image: "/image/dasutt.jpeg",
  },
  {
    singer: "黃玠",
    image: "/image/dadado.jpeg",
  },
];

// eslint-disable-next-line react/prop-types
const LazyImage = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        paddingTop: "100%",
        overflow: "hidden",
        backgroundColor: "#e0e0e0",
      }}
    >
      <AnimatePresence>
        {imageLoaded && inView && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image={src}
              alt={alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default function Habit() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Stack
          sx={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/image/concert.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "auto", sm: "90vh" },
            minHeight: { xs: "100vh", sm: "auto" },
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            sx={{
              padding: { xs: "3rem 1rem", sm: "5rem 2rem" },
              color: "#fff",
              height: "100%",
              width: "100%",
            }}
            spacing={4}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                  fontWeight: "bold",
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
              >
                喜歡看表演、看電影、拍底片
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  fontWeight: "500",
                  lineHeight: { xs: "2rem", sm: "3rem", md: "3.5rem" },
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
              >
                從17歲的第一場演唱會開始，
                <br />
                至今也看了近百場各種大大小小的音樂節、專場
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: "400",
                  lineHeight: { xs: "1.5rem", sm: "2rem" },
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
              >
                我覺得看表演這件事，是讓我期待某件事情的到來，
                <br />
                某種生活的動力，並且在發生的當下得到最大的共感
              </Typography>
            </motion.div>
          </Stack>
        </Stack>
      </motion.div>
      <Box
        ref={ref}
        sx={{
          padding: { xs: "3rem 1rem", sm: "5rem 2rem" },
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid container spacing={2}>
          {CONCERT.map((concert, index) => (
            <Grid item xs={6} sm={6} md={3} key={concert.singer}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <LazyImage src={concert.image} alt={concert.singer} />
                  <CardContent sx={{ padding: isXsScreen ? 1 : 2 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                      }}
                    >
                      {concert.singer}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
