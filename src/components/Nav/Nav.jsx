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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 0.3s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const CustomMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "#FFA500",
    color: "#FFFFFF",
    transition: "background-color 0.3s, color 0.3s",
  },
});

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
    <Box sx={{ padding: "10px 20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button size="large" sx={{ textAlign: "left" }}>
          <a href="/" style={{ textDecoration: "none", color: "#FFA500" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              WEN-YING
            </Typography>
          </a>
        </Button>
        {isMobile ? (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon sx={{ color: "#FFA500" }} />
            </IconButton>
            <CustomMenu
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
                <CustomMenuItem key={item.label} onClick={handleClose}>
                  <a
                    href={item.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </a>
                </CustomMenuItem>
              ))}
            </CustomMenu>
          </Box>
        ) : (
          <Stack direction="row" spacing={3} alignItems="center">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent", // 取消 hover 背景
                  },
                }}
              >
                <a
                  href={item.href}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "medium",
                      "&:hover": { color: "#FFA500" }, // 字體 hover 效果
                    }}
                  >
                    {item.label}
                  </Typography>
                </a>
              </Button>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
