import React from 'react';
import ShowcaseLayout from "./ShowcaseLayout";


export default class TestShow extends React.Component {
  //state = { layout: [] };
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this)

  }
  
  onLayoutChange(layout) {
    this.setState({ layout: layout });
    
  }

  
  stringifyLayout() {
    
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
 /*  onSave() {
    }
  onOpen() {
  }
  onPrint() {}
      
  
  getData (){
    let data =  localStorage.getItem('myData');
    let data2 =  localStorage.getItem('myData2');
    data =JSON.parse(data);
    console.log(data.name);
    console.log('jj '+data2);
  }
 *//* 
  render() {
  
    return (
        <div>
          <div>
            /* <Button onClick={this.onSave} style ={stylebutton}>save pdf </Button>
            <Button onClick={this.onOpen} style ={stylebutton} >open pdf </Button>
            <Button onClick={this.onPrint} style ={stylebutton}>print pdf </Button>
            <Button onClick={()=> this.getData()}style ={stylebutton} >save local storage</Button>
 */

        /*   </div>
          <div>
            <br></br>
          </div>
          <div >  <ShowcaseLayout onLayoutChange={this.onLayoutChange}  /></div>
        </div>
    );
  }
}
 */
 
render() {
  
 console.log(this.state.layout)
  return (
    
    <div>
      <div className="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{this.stringifyLayout()}</div>
      </div>
      <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
    </div>
  );
}
}