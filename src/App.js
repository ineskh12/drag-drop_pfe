import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ModalInputText from "./Dnd/Modal/ModalInputText";

import Droppable from "./Dnd/Droppable";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import Daggableitems from "./Dnd/Daggableitems"
import TestShow from "./Dnd/TestShow";
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined';

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
    marginRight: 36,
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


/* 
const stylebutton ={
  height: 48,
  padding: '0 30px',
  margin: 8,
} */
/* 
const spanStyles = {
  color: "#fff",
  borderColor: "#00f"
}; */
/* 
const Button1 = props => (
  
  <button style={{
    color: "#fff",
    borderColor: "#00f"
    
  }}>
  
    <span style={spanStyles}>Button Name</span>
  </button>
  
); */


const  App = () => {



  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
        >
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
             Create and Export pdf bills
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

            <ListItem button>

              <ModalInputText />
            </ListItem>
          </List>
          <Divider />
          <List>


            <ListItem >
              <ListItemIcon>
             
            <TextFieldsOutlinedIcon/>

            
              </ListItemIcon>
      
              <Droppable id="dr1"  color="inherit"
                         aria-label="open drawer"
                         onClick={handleDrawerOpen}
                         edge="start"
                         className={clsx(classes.menuButton, {
                           [classes.hide]: open,
                         })}>

<Daggableitems/>

              </Droppable>

            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />


          <div>

<TestShow/>
          </div>
        </main>
      </div>
  );
}

export default  App;