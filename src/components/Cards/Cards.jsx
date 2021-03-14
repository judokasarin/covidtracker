import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import cx from 'classnames';
import styles from './Cards.module.css';
import Countup from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    diagonalBox: {
          position: 'relative',
          padding: '9.719vw',
          marginTop: '-1px',
         "&:before" : {
          boxSizing: 'border-box',
            content: "' '",
            position: 'absolute',
            left: '0',
            top: '0',
            right: '0',
            bottom: '0',
            transform: 'skewY(-11deg)',
            transformOrigin: '50% 0',
            outline: '1px solid transparent',
            backgroundImage: 'linear-gradient(45deg, #654ea3, #eaafc8)',
            backfaceVisibility: 'hidden',
      
          }
      
        },
  
        contentBox : {
          boxSizing: 'border-box',
          maxWidth: '100vw',
          maxHeight: '10vh',
          margin: '0 auto',
          padding: '1.5em',
          position: 'relative',
            
        },
        headerText : {
          color : 'white',
          fontSize: '2.5em',
          margin: '0 0 0.5em',
          fontWeight: '900',
      },
  }));


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    const classes = useStyles();


if(!confirmed){
    return (
        <div>
               <Paper elevation={3}> Loading   </Paper>  
        </div>
    )
}
    
return(
        <div>
            <div className={classes.diagonalBox}>
            <div className={classes.contentBox}> 
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={10}
            >
                <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary'>Infected</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Number of infected from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.recover)} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary'>Recovered</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={recovered.value} duration={3.3} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Number of recovered from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.death)} >
                    <CardContent>
                        <Typography gutterBottom color='textSecondary'>Deaths</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={deaths.value} duration={3.3} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Number of died from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        </div>
        </div>
    )
};

export default Cards;