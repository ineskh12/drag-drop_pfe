
import React from 'react';
import ShowcaseLayout from "./ShowcaseLayout";


export default class TestShow extends React.Component {
  //state = { layout: [] };
  constructor(props) {
    super(props);
    this.onLayoutChange = this.onLayoutChange.bind(this)
    this.state = {isToggleOn: true};
    this.state = { layout: [],layouts: []   };
   
    this.handleClick = this.handleClick.bind(this);
    
  

  }
  
  handleClick() {
    let List= [];
        
    this.state.layout.forEach(element => {
      let obj = Object.assign( {},{absolutePosition : {x:element.x  ,y : element.y }});
      console.log(obj);
      List.push(obj);
    });
   
    
   // console.log(this.state.items);
    this.setState(state => ({isToggleOn: !state.isToggleOn
    }));
    this.setState({ layouts : [...this.state.layouts,List]})

    console.log('handleClick');
    console.log(this.state.layouts);
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
      <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
        Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{this.stringifyLayout()}</div>
       
  
      </div>
      <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
  
    </div>
  );
}
}