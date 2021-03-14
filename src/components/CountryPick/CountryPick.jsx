import React, {useState, useEffect} from 'react';
import { FormControl , NativeSelect, Typography} from '@material-ui/core'
import { fetchCountry } from '../../api';
import styles from './CountryPick.module.css';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    headerText : {
            color : '#5773EF',
          fontSize: '1.5em',
          margin: '0 0 0.5em',
          fontWeight: '900',
          flexGrow: '4',
          alignContent: 'center',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    
  }));

const CountryPick = ({handleCountryChnage}) =>{
    const classes = useStyles();
const [fetchedCountries, setFetchedCountires] = useState([]);

useEffect(()=>{
    const fetchCountries = async () => {
        setFetchedCountires(await fetchCountry());
        //console.log(countries);
    };
fetchCountries();
},[setFetchedCountires]);

//console.log(fetchedCountries);
    return(
        <div className={styles.Container}>
           <div className={styles.item}>
            <Typography variant='subtitle1' color="text.secondary" className={cx(classes.headerText)}>
                Country Picker
            </Typography>
            <FormControl  variant="filled" className={classes.formControl}>
                <NativeSelect onChange={(e)=>handleCountryChnage(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i )=>(<option key={i} value={country}>{country}</option>))}
                </NativeSelect>
            </FormControl>
        </div>
        </div>
    )
};

export default CountryPick;