import React, {useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [output, setOutput] = useState([]);
    useEffect(() => {
      axios.get('https://api.publicapis.org/entries')
      .then(response => {
          console.log(response.data.entries);
          setOutput(response.data.entries);
          setOutput('test')
      }
      )      
    },[]);
    
    return(
    <div>
      <center>
      <h1>Test Home Junester Ursora II</h1>
       </center>
    </div>
    )
}

export default Home