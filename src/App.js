import React, { useState } from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Footer from "./components/Footer"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
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

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <Container component="main" maxWidth="lg" className={classes.main}>
            <Header/>
            <BrowserRouter basename="/thailandcube">
              <Main/>
            </BrowserRouter >
          </Container>
          <Footer className={classes.footer}/>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;