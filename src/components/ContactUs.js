import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import nosteam from "../images/nosteam.svg";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SnackbarInfo from './SnackbarInfo';
import { API } from "aws-amplify";

/* function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */


export default function ContactUs() {
    const [open, setOpen] = React.useState(false);
  //const handleSubmit = async (event) => {
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    /* console.log({
      email: data.get('email'),
      password: data.get('password'),
    }); */
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let email = data.get('email');
    let description = data.get('description');

    console.log('firstName---',firstName);
    console.log('lastName---',lastName);
    console.log('email---',email);
    console.log('description---',description);
    setOpen(true);
    const myInit = {
        body: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            description: description
        }, // replace this with attributes you need
        headers: {}, // OPTIONAL
    };
    
    API.put("todosApi", "/nosteamapi", myInit)
    .then(response => {
      setOpen(true);
      console.log('response---',response);
      setOpen(false);
      data={};
      // Add your code here
    })
    .catch(error => {
        setOpen(false);
      console.log(error.response);
    });

    /* await API.post("todosApi", "/items", {
        body: {
          id: Date.now().toString(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          description: description
        }
      }); */
  };

  const style = {

  }

  return (
    <div style={{margin: 0, height: '100vh', overflow: 'hidden', backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/nosteam.svg"})`}}>
     <br/>
    <SnackbarInfo open={open}/>
    <Container fixed maxWidth="xs" style={{ height: '100vh' }}>
        <Box
          sx={{
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5" color='white'>
           Send us a message if you have any questions.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{border: '1px solid white', mb:'15px', input: { color: 'white' }, label: { color: 'white' }}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{border: '1px solid white', mb:'15px', input: { color: 'white' }, label: { color: 'white' }}}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{border: '1px solid white', borderRadius: 1, mb:'15px', input: { color: 'white' }, label: { color: 'white' },label: { color: 'white' } }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <TextareaAutosize
              style={{width: "100%",color:"white", backgroundColor:"transparent",border: '1px solid white', label: { color: 'white' } }}
                aria-label="minimum height"
                minRows={5}
                id="description"
                name="description"
                placeholder="Description"
              />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'transparent',border: '1px solid white' }}
            >
             Submit
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </div>
      
  );
}