import React, {useEffect, useState} from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Home.css";
import { useHistory } from "react-router-dom";



export default function Home() {
  let history = useHistory();
 
  
  const url= "http://nestjs-backend-dnd.herokuapp.com/templates/all"
  const [templates, setTemplates] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get(url)
        .then(res => {
          setTemplates(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setLoad(true)
        })
}, []);

if (load) {
  return (
    
    <div className="container">
{error ? <li>{error.message}</li> :
      
      
      templates.map((template, index) => 
     <Card key={index} className="box" >
      <CardActionArea     >
      
        <CardContent >
        <Typography gutterBottom  component="h2">
        {template.name}
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        
          Version:<br></br>
           Créé à:<br></br>
           Mis à jour à:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
        <Button size="small" color="primary" onClick={() => history.push('/template/view')} >
        Détails
        </Button>
        <IconButton aria-label="delete"color="primary"   >
          <DeleteIcon />
        </IconButton>
       
        <IconButton aria-label="edit" color="primary" onClick={() => history.push('/template/edit/')} >
       
          <EditIcon  />
        </IconButton>
        
     
       
      </CardActions>
    </Card>
    )
      
      
  }
    </div>
  );
} else {
    return (
        <div>
            
         Chargement...
        </div>
    );
}
};
