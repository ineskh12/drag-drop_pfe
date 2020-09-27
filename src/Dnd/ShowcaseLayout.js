import React from "react";

import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import Droppable from "./Droppable";

const ResponsiveReactGridLayout = WidthProvider(Responsive);




const droppableStyle1 = {

  fontsize: '24px',
  textAlign: 'left',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
  height: '100%',


}

export default class ShowcaseLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rows: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props) {
    super();

    this.state = {
      items: [0, 1, 2, 3].map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === (list.length - 1)
        };
      }),
      newCounter: 4,
      
      layouts: [],
    };
    
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  componentWillMount () {
    let List= [];
        
    this.state.items.forEach(element => {
      let obj = Object.assign( {},{absolutePosition : {x:element.x * 100 ,y : element.y }});
      console.log('obj : '+obj);
      List.push(obj);
    });
    this.setState({ layouts :  List });
    
    console.log(this.state.items);
  }

  UNSAFE_componentWillUpdate = (nextprops, nextState)  => {
    //this.state.layouts =[this.state.items] 
    if(this.state.items!==nextState.items){
      //this.renameKey(this.state.items);
      /* this.state.items.forEach(element => {
        let obj = Object.assign({}, {absolutePosition : {x:element.x ,y : element.y }});
        this.setState({ layouts : [...this.state.layouts, obj ]});
      }); */

    }


    console.log('layouts ; '+JSON.stringify(nextState.layouts));
  }

  clone = (obj) => Object.assign({}, obj);

  renameKey = (object, i, h , w , add) => {

    const clonedObj = this.clone(object);
  
   // const targetKey = clonedObj[key];
  
  
  
    delete clonedObj[i];
    delete clonedObj[h];
    delete clonedObj[w];
    delete clonedObj[add];
  
    //clonedObj[newKey] = targetKey;
  
    return clonedObj;
  
  };

  deleteElementObj = (object, key ) => {

    const clonedObj = this.clone(object);
  
    //const targetKey = clonedObj[key];
  
  
  
    delete clonedObj[key];
  
   //clonedObj[newKey] = targetKey;
  
    return clonedObj;
  
  };

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    

    const i = el.add ? "+" : el.i;
    return (
        <div key={i} data-grid={el}>

          <Droppable id={i} ref ={i+'item'} style={droppableStyle1} fluid>



          </Droppable>

          <span
              className="remove"
              style={removeStyle}
              onClick={this.onRemoveItem.bind(this, i)}
          >
          x
        </span>
        </div>
    );
  }

  onAddItem() {

    console.log("adding",  this.state.newCounter);
    if( this.state.items.length < 12){
      this.setState({
        // Add a new item. It must have a unique key!
        items: this.state.items.concat({
          i: "n" + this.state.newCounter,
          x: (this.state.items.length * 2) % (this.state.cols || 12),
          y: 0, // puts it at the bottom
          w: 2,
          h: 2
        }),
        // Increment the counter to ensure key is always unique.
        newCounter: this.state.newCounter + 1
      });

      this.setState({ layouts : [...this.state.layouts,Object.assign({},{absolutePosition:{x: (this.state.items.length * 2) % (this.state.cols || 12), y: 0}})]})

    }


    console.log('ines : '+JSON.stringify(this.state.items));
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols,rows) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols,
      rows: rows
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout },{ layout: layout });
   

  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }), newCounter: i });
  }


  render() {
    //console.log('ines app : '+ JSON.stringify(this.state.items) );
    return (
        <div >
          <button onClick={this.onAddItem}>Add Item</button>

          <div id={"divToPrint"}>

            <br></br>
            <ResponsiveReactGridLayout

                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rows={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}

                onLayoutChange={this.onLayoutChange}
                onBreakpointChange={this.onBreakpointChange}
                {...this.props}

                >


              {_.map(this.state.items, el => this.createElement(el))}



            </ResponsiveReactGridLayout>
          </div>


         </div>
    );

  }


}
