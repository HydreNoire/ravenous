import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import React from 'react';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
]

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp ${term}, ${location}, ${sortBy}`)
  }

  render() {
    return (
      <div class="App">
    <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={businesses} /> 
    </div>
    );
  }
}

export default App;
