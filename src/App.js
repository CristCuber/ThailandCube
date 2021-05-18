import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import Home from "./components/Home/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About/About"
import Error from "./components/Error"
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
          <main className="content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route component={Error} />
            </Switch>
          </main>
        </Container>
        <Footer className={classes.footer}/>
      </React.Fragment>
    </ThemeProvider>
  </div>
  );
}

export default App;