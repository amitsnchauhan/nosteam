import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarInfo(props) {
  const [open, setOpen] = React.useState(false);

  //setOpen(props.open);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.open = false;
    //setOpen(false);
  };
  
  return (
    <Stack spacing={0} sx={{ width: '100%'}}>
      <Snackbar open={props.open} autoHideDuration={3000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Request Successfully Submitted!!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
