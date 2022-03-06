import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grow,
  Typography,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow
    ref={ref}
    {...props} />;
});

export default function AboutDialog(props) {
  const handleClose = () => {
    props.setOpenAboutDialog(false);
  };

  const version = "1.1.0";

  return (
    <div>
      <Dialog
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
            variant="h1"
            sx={{ paddingLeft: 3, paddingRight: 10, paddingTop: 3 }}
          >
            About this Website
          </Typography>
          <Typography
            color="secondary"
            variant="h2"
            sx={{ paddingLeft: 3, paddingTop: 1 }}
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
            sx={{ paddingX: 6, paddingY: 1.5, marginRight: 2, marginBottom: 2 }}
          >
            <Typography variant="h3">Ok</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
