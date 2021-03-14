
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    
headerText : {
        color : '#4361ee',
        textAlign: 'center',
        margin:'10vh auto 1em',
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
            background: '#fff',
            color: '#003',
            fontWeight: '900',
            padding: '0.5em',
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
 </div>
     
    )
};


export default Cover;