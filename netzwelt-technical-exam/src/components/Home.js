import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Territory from "./Territories";

const TERRITORIES_API_URL = 'https://netzwelt-devtest.azurewebsites.net/Territories/All '

const Home = () => {

  const [territories, setTerritories] = useState([]);
  const navigate = useNavigate();

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if(!localStorage.getItem('login_token')) {
      navigate('/account/login');
    }
  }, [navigate])

  // Fetch territory data asynchronously on load
  useEffect(() => {
    const getTerritories = async () => {
      const response = await fetch(TERRITORIES_API_URL);

      try {
        if(!response.ok) throw new Error('Failed to fetch resources');

        const data = await response.json()


        // Sort loaded data into a tree of parent -> children relationship
        const sortData = (data) => {
          const hashTable = {};
          const sortedData = [];
          data.forEach(object => hashTable[object.id] = {...object, children: []});
          data.forEach(object => {
            if(object.parent) 
              hashTable[object.parent].children.push(hashTable[object.id]);
            else
              sortedData.push(hashTable[object.id]);
          })

          return sortedData;
        }

        const sortedTerritories = sortData(data.data);
        setTerritories(sortedTerritories);
      }

      catch (error) {
        console.log(`An error has occured: ${error}`);
      }
      
    }

    getTerritories();
  }, [])
  

  return (
    <div className="home-content-area">
      <h1 className="heading">Territories</h1>
      <p>Here are the list of territories:</p>
      <ul>
        { territories.length > 0 && territories.map( (territory) => {
          return <li className="territory" key={territory.id}><Territory territory={territory} /></li> 
        }) }
      </ul>
    </div>
  )
}

export default Home;