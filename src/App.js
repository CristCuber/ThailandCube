import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from "./components/Main/Header"
import Main from './components/Main/Main';
import Footer from "./components/Main/Footer"
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  main: {
    marginBottom: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <Container component="main" maxWidth="lg" className={classes.main}>
            <Header/>
            <Main/>
          </Container>
          <Footer className={classes.footer}/>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;