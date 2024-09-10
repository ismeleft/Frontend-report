import { useState } from "react";
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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Habit", href: "/habit" },
    { label: "Target", href: "/target" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} component="a" href={item.href}>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontFamily: '"Noto Serif Khitan Small Script", serif',
                    color: "#666",
                  }}
                >
                  {item.label}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <a href="/" style={{ textDecoration: "none", color: "#FFA500" }}>
            <img
              src="/image/wave.png"
              alt="Logo"
              style={{ width: "40px", height: "auto" }}
            />
          </a>
        </Box>
        {isMobile ? (
          <Box display={"flex"} width={"40px"}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "#666" }} />
            </IconButton>
          </Box>
        ) : (
          <Stack direction="row" alignItems="center" spacing={2}>
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
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
          </Stack>
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
}
