import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.create({
          baseURL: "http://localhost:5000",
        })
        .get('/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Backend Data</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}

export default App;
