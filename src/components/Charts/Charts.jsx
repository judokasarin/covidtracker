import  React, {useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import Typography from '@material-ui/core/Typography';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';
import Container from '@material-ui/core/Container';


const Charts = ({data, country}) =>{

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchDailyData();
    
          setDailyData(initialDailyData);
        };
    
        fetchMyAPI();
      }, []);


    const LineChart = (
        dailyData[0] ? (
        <Line 
            data={{
                labels: dailyData.map(({date})=>(date)),
                datasets: [
                {
                    data:dailyData.map(({confirmed})=>(confirmed)),
                    label: 'Infected',
                    fill:true, 
                    borderColor: '#4cc9f0',
                    fontSize: '200px',
                    
                },
                {
                    data:dailyData.map(({deaths})=>(deaths)),
                    label: 'Deaths',
                    fill:true, 
                    borderColor: '#f72585',
                    fontSize: '200px',
                },
            ],
            }}
        />
        ) : null
    );

    const barChart = (
        data.confirmed ?
        (
            <Bar
            data={{
                labels: ['Infected', 'Recovred', "Deaths"],
                datasets:[{
                    label:'People',
                    backgroundColor: ['#7209B7','#4CC9F0','#F72585'],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }],
               
            }}
            options={{
                legend :{display:false},
                title:{display:true, text:`Cureent Data from ${country}`}
            }}
            />
        ) : null
    );
    
    return(
        <div className={styles.container}>
        <Container>
            {country? barChart : LineChart}
        </Container>
        </div>
    )
};

export default Charts;