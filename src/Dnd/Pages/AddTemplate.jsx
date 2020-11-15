
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import ShowcaseLayout from '../ShowcaseLayout';
import  Draggable  from '../Draggable';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

const AddTemplate = () => 
{const classes = useStyles();
  
  
  const[layout,setLayout]=useState();
  
 
 const onLayoutChange=()=>{
   setLayout(layout)
 }
  return (
   
    <main className={classes.content}>
   <Grid className={classes.content}>
    <Grid item xs>
  
  
        <ShowcaseLayout onLayoutChange={onLayoutChange} /></Grid>
 
    </Grid>
    <Grid item xs >
  
  
<Draggable/></Grid>


    </main>
  );
}
export default AddTemplate;
