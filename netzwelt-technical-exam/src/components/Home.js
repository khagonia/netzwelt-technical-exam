import { useEffect, useState } from "react";

const TERRITORIES_API_URL = 'https://netzwelt-devtest.azurewebsites.net/Territories/All '

const Home = () => {

  const [territories, setTerritories] = useState([]);
  console.log(territories)

  useEffect(() => {
    const getTerritories = async () => {
      const response = await fetch(TERRITORIES_API_URL);

      try {
        if(!response.ok) throw new Error('Failed to fetch resources');

        const data = await response.json()

        setTerritories(data.data);
      }

      catch (error) {
        console.log(`An error has occured: ${error}`);
      }
      
    }

    getTerritories();
  }, [])

  return (
    <div>
      <h1>Territories</h1>
      <p>Here are the list of territories</p>
      {territories.data && territories.data.forEach((territory) => {
        <p>hello</p>
      })}
    </div>
  )
}

export default Home;