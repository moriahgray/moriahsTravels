import React, { useEffect, useState } from 'react';
import { fetchGreeting } from './api';

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        fetchGreeting()
            .then(setGreeting)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default App;