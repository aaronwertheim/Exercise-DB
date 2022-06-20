import React, { useEffect, useState } from "react";

function SearchBar({onHandleSubmit}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [targetArea, setTargetArea] = useState("Target Area")

    function handleSubmit(e) {
        e.preventDefault()
        onHandleSubmit(searchQuery, targetArea)
    }

    const [targetList, setTargetList] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                //
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises/targetList', options)
            .then(response => response.json())
            .then(response => setTargetList(response))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {setSearchQuery(e.target.value)}}></input>
                <button>Search</button>
                <select onChange={(e) => setTargetArea(e.target.value)}>
                    <option>Target Area</option>
                    {targetList.map((bodypart, index) => (
                         <option key={index}>{bodypart}</option>
                    ))}
                </select>
            </form>
            
        </div>
    )
}

export default SearchBar