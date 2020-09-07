import React from 'react';
import PropTypes from 'prop-types';


export default  class  Droppable extends React.Component {


    drop =(e) =>{
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        const data2 = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));


        console.log('from droppable' + data);
        console.log('from droppable' + data2);
        console.log('drop36'+  data[1])




    }
    allowDrop =(e) => {
        e.preventDefault();
        console.log('dorpidi' +  e.preventDefault());

    }
    render(){


        return(
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>

                {this.props.children}




                { console.log('ines style' +this.props.style) }



            </div>

        );


    }
}
Droppable.protoTypes ={
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,


}
