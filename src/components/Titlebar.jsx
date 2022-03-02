import * as React from "react";
//import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";

export default function TitleBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="primary"
        enableColorOnDark
        elevation="0">
        <Toolbar>
          <Box
            display="flex"
            flexGrow={1}>
            <Button
              color="secondary"
              sx={{ p: 1 }}
              //component={Link}
              // to={"/"}
            >
              <img
                src={LastandDevelopmentLogo}
                className="LDLogo"
                alt="logo"
                style={{ height: 30 }}
              />
            </Button>
          </Box>
          <IconButton
            size="large"
            color="secondary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuRounded />
          </IconButton>
          <Menu
            PaperProps={{
              style: {
                width: 230,
              },
            }}
            id="basic-menu"
            backgroundColor="primary"
            elevation={3}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <CodeRoundedIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
              <ListItemIcon>
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <EmailRoundedIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                //component={Link}
                //to={"/contact"}
                >
                  Contact
                </Typography>
              </ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
