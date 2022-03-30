import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow
    ref={ref}
    {...props}
    timeout={300} />;
});

export default function AboutDialog(props) {
  const [t] = useTranslation();

  const handleClose = () => {
    props.setOpenAboutDialog(false);
  };

  const version = "1.6.2";

  const className = props.openAboutDialog
    ? "blurBackgroundOpened"
    : "blurBackgroundClosed";

  return (
    <div>
      <Dialog
        className={className}
        open={props.openAboutDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="about-dialog"
        PaperProps={{ elevation: 3 }}
      >
        <DialogContent>
          <Typography
            color="secondary"
            variant="h2"
            sx={{
              paddingLeft: 3,
              paddingRight: 7,
              paddingTop: 3,
            }}
          >
            {t("aboutDialog.about")}
          </Typography>
          <Typography
            color="secondary"
            variant="h2"
            sx={{ paddingLeft: 3, paddingTop: 1, fontSize: 16 }}
          >
            Version {version}
          </Typography>
          <br />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ paddingX: 4, paddingY: 1, marginRight: 1, marginBottom: 1 }}
          >
            <Typography variant="h6">Ok</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
