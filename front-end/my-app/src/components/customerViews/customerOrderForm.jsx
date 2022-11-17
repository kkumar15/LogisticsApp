import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from 'react-router-dom';
import NavBar from './customerNavBar';
import Checkout from '../checkout/checkout';
const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    // navigate('/signUp')
  };

  return (
    <ThemeProvider theme={theme}>
    <NavBar ></NavBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <section style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: "100px"
        }}>
        <Checkout/>
        </section>
        
        {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Inventory2TwoToneIcon sx = {{ height : "100px" , width: "150px", color: "#e28743" } } />
          <Typography component="h1" variant="h5" >
           PACKAGE DETAILS
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Recipient"
              name="Recipient"
              autoComplete="Recipient"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="phone"
              type="phone"
              id="phone"
              autoComplete="current-phone"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ship Package
            </Button>
          </Box>
        </Box> */}
      </Container>
    </ThemeProvider>
  );
}