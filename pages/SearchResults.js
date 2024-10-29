import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserCard from '../components/UserCard';
import usersData from '../data/users.json';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    useEffect(() => {
        const filteredResults = usersData.filter(user =>
            (user.first_name?.toLowerCase().includes(query.toLowerCase()) || 
             user.last_name?.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filteredResults);
    }, [query]);

    return (
        <div>
            {results.length ? (
                results.map((user, index) => <UserCard key={index} user={user} />)
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResults;
