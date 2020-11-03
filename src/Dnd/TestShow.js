  


import React from 'react';
import ShowcaseLayout from "./ShowcaseLayout";
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const stylebutton ={
  height: 48,
  padding: '0 30px',
  margin: 8,
}

export default class TestShow extends React.Component {

 


 
  constructor(props) {
    
    super(props);
   
  
    this.onLayoutChange = this.onLayoutChange.bind(this)
    
    this.state = { isToggleOn: true };
    this.state = { layout: [], savelist: [] ,nomtemplate: '', count: 0,age:'',open:false};
   

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openPdfClick = this.openPdfClick.bind(this);
    this.exportPdfClick = this.exportPdfClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange5= this.handleChange5.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  
  handleChange5 = (event) => {
    this.setState({ age:event.target.value});
  };

  handleClose = () => {
    this.setState({ open:false});
  };

   handleOpen = () => {
    this.setState({ open:true});
  };
  handleChange(event) {
    this.setState({nomtemplate: event.target.value});
    
  }
  
  handleSubmit(event) {
  
    event.preventDefault();
    
  }

  
  openPdfClick = () => {
    let List = [];
    let Values = [];

    this.state.layout.forEach(element => {
      List.push(Object.assign({}, { absolutePosition: { x:(element.x * 50)+50, y: (element.y * 50)+50 } }))

    });

    for (var i = 0; i < this.state.layout.length; i++) {

      if (document.getElementById('' + this.state.layout[i].i)) {
        var searchEles = document.getElementById('' + this.state.layout[i].i).children;


        for (var j = 0; j < searchEles.length; j++) {

          List[i] = Object.assign({ text: searchEles[j].value }, List[i]);

          console.log(searchEles[j].value);
          Values.push(Object.assign({}, { text: searchEles[j].value, index: i }))

        }
      }
    }
    this.setState({ savelist: [] });

    List.forEach(element => {
      this.state.savelist.push(element);
    });

    // export pdf
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
    
   const clone = (obj) => Object.assign({}, obj);

   const renameKey = (object, key, newKey) => {

     const clonedObj = clone(object);
   
     const targetKey = clonedObj[key];
   
   
   
     delete clonedObj[key];
   
     clonedObj[newKey] = targetKey;
   
     return clonedObj;
   
   };


    var myArray = [];

    for (var m in this.state.savelist) {
  
     console.log('lol')
      console.log( { text: this.state.savelist[m].value });
     
      myArray.push(renameKey(this.state.savelist[m],"text", 'text'));
    }

    console.log(myArray);
  
   
   
    const pageOrientation1 = 'landscape';
   

    
   

    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: pageOrientation1,
      content: myArray ,
    
    }
    

   
    pdfMake.createPdf(documentDefinition).open();
   

  }



 
  exportPdfClick = () => {
    this.setState({
      count: this.state.count + 1
    });
    let List = [];
    let Values = [];

    this.state.layout.forEach(element => {
      List.push(Object.assign({}, { absolutePosition: { x: (element.x * 50)+50, y: (element.y * 50)+50} }))

    });

    for (var i = 0; i < this.state.layout.length; i++) {

      if (document.getElementById('' + this.state.layout[i].i)) {
        var searchEles = document.getElementById('' + this.state.layout[i].i).children;


        for (var j = 0; j < searchEles.length; j++) {

          List[i] = Object.assign({ text: searchEles[j].value }, List[i]);

          Values.push(Object.assign({}, { text: searchEles[j].value, index: i }))

        }
      }
    }
    this.setState({ savelist: [] });

    List.forEach(element => {
      this.state.savelist.push(element);
    });

    // export pdf
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
    
   const clone = (obj) => Object.assign({}, obj);

   const renameKey = (object, key, newKey) => {

     const clonedObj = clone(object);
   
     const targetKey = clonedObj[key];
   
   
   
     delete clonedObj[key];
   
     clonedObj[newKey] = targetKey;
   
     return clonedObj;
   
   };


    var myArray = [];

    for (var m in this.state.savelist) {
   
      myArray.push(renameKey(this.state.savelist[m],"text", 'text'));
    }

    console.log(myArray);
  
    //const style1= 'tableHeader';
    
   

    const pageOrientation1 = 'landscape';
    
   
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   
    const fileName =this.state.nomtemplate+'-'+date+'V'+ this.state.count;
    //const filename =(this.state.nomtemplate +"/"+this.state.currentDate;
    
    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: pageOrientation1,
      content: myArray
    };

    pdfMake.createPdf(documentDefinition).download(fileName);
   

  }
 
  onLayoutChange(layout) {
    this.setState({ layout: layout });

  }
/* 

  stringifyLayout() {
    //console.log('test show')
    //console.log(this.state.layout)

    return this.state.layout.map(function (l) {


      const name = l.i === "__dropping-elem__" ? "drop" : l.i;
      return (

        <div className="layoutItem" key={l.i}>
          <b>{name}</b>

          {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
        </div>
      );


    });


  }
   <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{this.stringifyLayout()}</div>
        </div>

 */




  render() {


    return (

      <div>
       
      

    <form onSubmit={this.handleSubmit}>
        
          <TextField
          id="outlined-textarea"
          label=" Nom du modèle"
          placeholder="Nom du modèle"
          nomtemplate={this.state.nomtemplate} onChange={this.handleChange}
          multiline
          variant="outlined"
        />


       
      
        <Button   size="large"  style={stylebutton}type="submit" variant="outlined" color="primary">
       
Enregistrer
      </Button>
       
      </form>

        <Button
          variant="contained"
          color="primary"
          size="large"
          style={stylebutton}
          onClick={this.openPdfClick}
          
        >
        ouvrir en mode pdf

        </Button>
     
        
        
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={stylebutton}
          onClick={this.exportPdfClick}
          startIcon={<SaveIcon />}
          
        >
           
        Export en PDF

        </Button>
        

       
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}