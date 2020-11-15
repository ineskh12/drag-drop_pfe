import React from 'react';
import './App.css';
import Navbar from './Dnd/Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Dnd/Pages/Home';

import { makeStyles } from "@material-ui/core/styles";
import AddTemplate from './Dnd/Pages/AddTemplate';
import TemplateView from './Dnd/Pages/TemplateView';
import EditTemplate from './Dnd/Pages/EditTemplate';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));



function App(props) {
  const classes = useStyles();
  return (
    <>
         
      <Router>
      <main className={classes.content}>
      <div className={classes.toolbar} >
        
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/template/add"  component={AddTemplate} />
        <Route exact path="/template/edit/" component={EditTemplate} />
          <Route exact path="/template/view" component={TemplateView} />
        </Switch>
        </div>
        </main>

      </Router>
    </>
  );
}


export default App;
