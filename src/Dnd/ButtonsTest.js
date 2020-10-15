import React from 'react';
import Draggable from "./Draggable";

import CheckboxLabels from './Buttons/CheckboxLabels';
const Item =  {
    color: '#55',
    backgroundColor: 'white',
    borderRadius: '3px',
    height: '100%',
    width: '160',
    style :'width:auto'
  }
function ButtonsTest() {
 

  return (
    <div>
     
    <Draggable id="item1" style={ {margin:  '8px'}}><div style={Item}> <CheckboxLabels/> </div></Draggable>
                
    <Draggable id="item2" style={ {margin:  '8px'}}><div style={Item}> <CheckboxLabels/> </div></Draggable>
    
    <Draggable id="item3" style={ {margin:  '8px'}}><div style={Item}> <CheckboxLabels/> </div></Draggable>
    </div>
  );
}
export default ButtonsTest;