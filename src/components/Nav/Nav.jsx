import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Habit", href: "/habit" },
    { label: "Target", href: "/target" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Box width={"5%"} sx={{ marginRight: "2rem" }}>
          <a href="/" style={{ textDecoration: "none", color: "#FFA500" }}>
            <img src="/image/wave.png" alt="Logo" />
          </a>
        </Box>
        {isMobile ? (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon sx={{ color: "#FFA500" }} />
            </IconButton>
          </Box>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ flexGrow: 1, justifyContent: "flex-end" }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: "#666",
                  "&:hover": { color: "#FFA500" },
                  textTransform: "none",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    fontFamily: '"Noto Serif Khitan Small Script", serif',
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
