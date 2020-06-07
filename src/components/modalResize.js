import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




function ModalResize(props) {
  const [open, setOpen] = useState(false);
  let variables = {
    screenWidth: 0,
    screenHeight: 0,
    reloading: false,
  }

  const reloadPage = () => {
    setOpen(true);
    if (variables.reloading === false) {
      variables = {
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        reloading: true,
      }
    }
  }

  const handleDisagree = () => {
    window.resizeTo(variables.width, variables.height);
    variables.reloading = false;
    setOpen(false);
  }

  const handleAgree = () => {
    window.location.reload();
    variables.reloading = false;
  }

  //  When resizing page, refresh the page so the height and widht are calculated again
  window.addEventListener("resize", reloadPage);

  return (
    <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
    </Dialog> 
  );
}

export default ModalResize;