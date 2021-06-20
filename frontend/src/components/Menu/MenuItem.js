import React from 'react'
import './MenuCard.css';
        import { makeStyles } from '@material-ui/core/styles';
        import clsx from 'clsx';
        import Card from '@material-ui/core/Card';
        import CardHeader from '@material-ui/core/CardHeader';
        import CardMedia from '@material-ui/core/CardMedia';
        import CardContent from '@material-ui/core/CardContent';
        import CardActions from '@material-ui/core/CardActions';
        import IconButton from '@material-ui/core/IconButton';
        import FavoriteIcon from '@material-ui/icons/Favorite';
        import ShareIcon from '@material-ui/icons/Share';

        const useStyles = makeStyles((theme) => ({
            root: {
              width: 295,
              marginTop: 100,
              float:'left',
              marginInline: 40
              
            },
            media: {
              height: 0,
              paddingTop: '56.25%', // 16:9
            },
           
          }));

function MenuItem(props){

          const classes = useStyles();
        
        
          return (
              
            <Card className={classes.root}>
 
              <CardMedia
                className={classes.media}
                image="https://d1ralsognjng37.cloudfront.net/799525cf-e7ca-4cef-8b87-5fbd6a8ca2f6.jpeg"
                alt=""
              />
              <CardContent>
                  <center>
               <p1>{props.name}</p1> 
               
               </center>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
               
                <p2>Price:{props.price}</p2>
              </CardActions>
            
                 
                 
                  
                  
    
            </Card>
          );
        
        
    

    
}

export default MenuItem