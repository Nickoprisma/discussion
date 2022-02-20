import React, { useState, useEffect} from 'react';
import './App.css';
import NFTCollection from './components/NFTCollection';

function App() {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    const options = {
      method: 'GET', 
      headers: {
        Accept: 'application/json'
      }
    };
    
    // Verify the url https://docs.opensea.io/reference/api-overview
    fetch('https://api.opensea.io/api/v1/collection/questioning-and-understanding-expands-wisdom', options)
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        setCollection(response.collection);
      })
      .catch(err => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <div>Loading...</div>}
        {!isError && !isLoading && <NFTCollection collection={collection} />}
      </header>
    </div>
  );
}

export default App;
