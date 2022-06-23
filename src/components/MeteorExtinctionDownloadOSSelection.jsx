import React, { Fragment } from "react";

import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { ReactComponent as WindowsIcon } from "./icons/WindowsIcon.svg";
import { ReactComponent as LinuxIcon } from "./icons/LinuxIcon.svg";
import { useTranslation } from "react-i18next";

export default function MeteorExtinctionDownloadOSSelection(props) {
  const downloadWindows = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinction" +
      props.version +
      "Windows.zip";
    link.click();
    props.handleClose();
  };
  const downloadAndroid = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinction" +
      props.version +
      "Android.apk";
    link.click();
    props.handleClose();
  };
  const downloadLinux = () => {
    const link = document.createElement("a");
    link.href =
      "https://lastanddevelopmentwebsitedownloads.s3.eu-central-1.amazonaws.com/MeteorExtinction" +
      props.version +
      "Linux.zip";
    link.click();
    props.handleClose();
  };

  const [t] = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        color="primary"
        variant="contained"
        className="downloadButton"
        sx={{
          py: 1,
          mt: 3,
        }}
        onClick={handleClick}
        startIcon={<DownloadRoundedIcon />}
      >
        <Typography
          variant="body1"
          className="textSmall">
          {t("downloadPage.download")}
        </Typography>
      </Button>
      <Menu
        PaperProps={{
          style: {
            width: 230,
          },
          elevation: 10,
        }}
        id="main-menu"
        elevation={3}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: -5,
          horizontal: "center",
        }}
      >
        <MenuItem onClick={downloadWindows}>
          <ListItemIcon>
            <SvgIcon>
              <WindowsIcon style={{ color: "#FFFFFF" }} />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>
            <Typography>Windows</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={downloadAndroid}>
          <ListItemIcon>
            <AndroidIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>
            <Typography>Android</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={downloadLinux}>
          <ListItemIcon>
            <SvgIcon>
              <LinuxIcon style={{ color: "#FFFFFF" }} />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>
            <Typography>Linux</Typography>
          </ListItemText>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
