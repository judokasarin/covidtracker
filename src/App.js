
import React from 'react';
import styles from './App.module.css'
import {Cards, Charts, CountryPick, Cover} from './components'
import { fetchData} from './api'

class App extends React.Component{

  state = {
    data : {},
    country : '',
    
  }

 handleCountryChnage = async(country) => {
  const countryData = await fetchData(country);
  this.setState({data: countryData, country: country});
};

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
}  
  
  render() {
    return (
      <div className={styles.Container}> 
      <Cover />
      <CountryPick  handleCountryChnage={this.handleCountryChnage} />
        <Cards data={this.state.data}/>
        <Charts data={this.state.data} country={this.state.country} />
     </div>
    );
  };
};
export default App;
