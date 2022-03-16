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

  const version = "1.2.8";

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
            variant="h2"
            sx={{
              paddingLeft: 3,
              paddingRight: 7,
              paddingTop: 3,
            }}
          >
            About this Website
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
