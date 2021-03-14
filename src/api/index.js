import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let modifiedUrl = url; 
     if(country) {
         modifiedUrl = `${url}/countries/${country}`
        };
    if (country ==='global'){
        modifiedUrl = url;
    };

    try {
        const {data : {confirmed, deaths, recovered, lastUpdate }} = await axios.get(modifiedUrl);
        return {confirmed, deaths, recovered, lastUpdate }
    } catch (error) {
        console.log(error);
    }
};


export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        console.log(error);
    }
}


export const fetchCountry = async ( ) => {
    try {
        const {data :{countries} } = await axios.get(`${url}/countries`);
        //const modData =;
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}