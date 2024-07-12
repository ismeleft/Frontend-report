import { useState } from "react";
import {
  Stack,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Habit", href: "/habit" },
    { label: "Target", href: "/target" },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={2}
      //   sx={{ width: "100%" }}
    >
      <Button size="large" sx={{ textAlign: "left" }}>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 style={{ color: "#FFA500" }}>WEN-YING</h2>
        </a>
      </Button>
      {isMobile ? (
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon sx={{ color: "#FFA500" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={handleClose}>
                <a
                  href={item.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <Stack direction="row" spacing={1} px={5} alignItems="center">
          {menuItems.map((item) => (
            <Button key={item.label}>
              <a
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3>{item.label}</h3>
              </a>
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
