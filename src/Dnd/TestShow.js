
import React from 'react';
import ShowcaseLayout from "./ShowcaseLayout";

import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';

export default class TestShow extends React.Component {

  //state = { layout: [] };
  constructor(props) {
    super(props);
    this.onLayoutChange = this.onLayoutChange.bind(this)
    this.state = {isToggleOn: true};
    this.state = { layout: [],savelist: []   };
   
    this.handleClick = this.handleClick.bind(this);
    
  

  }

  
  handleClick = () => {
    let List = [];
    console.log(this.state.layout);
     
    this.state.layout.forEach(element => {
      List.push(Object.assign({}, { absolutePosition: { x: element.x * 50, y: element.y * 50 } }))
      
    });
      console.log(List);
      
      this.setState({ savelist : []});

      List.forEach(element => {
       this.state.savelist.push(element);
      });
    


    console.log('handleClick');
    console.log('hné : '+JSON.stringify(this.state.savelist));

  }
  onLayoutChange(layout) {
    this.setState({ layout: layout });
    
  }

  
  stringifyLayout() {
    //console.log('test show')
    //console.log(this.state.layout)
  
   return this.state.layout.map(function(l) {
  
   
       const name = l.i === "__dropping-elem__" ? "drop" : l.i;
         return (

        <div className="layoutItem" key={l.i}>
          <b>{name}</b>

          {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
        </div>
      );

     
    });
   
   
  }



  
 
 
render() {
  
 
  return (
    
    <div>
      <div className="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{this.stringifyLayout()}</div>
      </div>
     

        <Button
        variant="contained"
        color="primary"
        size="large"
        //className={classes.button}
        onClick={this.handleClick}
        startIcon={<SaveIcon />}
      >
        

      </Button>
      
      
      <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
    </div>
  );
}
}