import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
	const classes = useStyles();

  return (
  	<ThemeProvider>
  	<React.Fragment>
  	<CssBaseline />
  	<Container maxWidth="lg">
  		<Header/>
    	<main>
    		<Switch>
    			<Route path="/" component={Home} exact />
    			<Route path="/about" component={About} />
    			<Route component={Error} />
    		</Switch>
    	</main>
    	<Footer/>
    </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;