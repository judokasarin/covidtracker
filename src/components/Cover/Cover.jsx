
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    
headerText : {
        color : '#4361ee',
        textAlign: 'center',
        margin:'10vh auto 0em',
        padding: '0 1em',
        maxWidth:'42rem',
        lineHeight: '1.2',
        transform: 'skewY(-11deg)',
        fontSize: '3em',
        textTransform: 'uppercase',
        fontWeight: '900',
    },


    introText : {
            fontSize: '1.25em',
            transform: 'skewY(-11deg)',
            margin: '0em auto 10em',
            textAlign: 'center',
            
            color: '#708090',
            fontWeight: '900',
            padding: '0.1em',
            textTransform: 'uppercase',
    }
  }));



const Cover = () => {
    const classes = useStyles();
    return(
    <div>
            <Typography variant='h1' color="text.secondary" className={classes.headerText} >
                Covid-19 Tracker
            </Typography>
            <Typography variant='h2' color="text.secondary" className={classes.introText} >
                By Arunesh Sarin 
            </Typography>
 </div>
     
    )
};


export default Cover;