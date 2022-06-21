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
                //API INFO, List of target muscles
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises/targetList', options)
            .then(response => response.json())
            .then(response => setTargetList(response))
            .catch(err => console.error(err));
    }, [])

    const [equipmentList, setEquipmentList] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                //API INFO, list of equipment
            }
        };
        
        fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', options)
            .then(response => response.json())
            .then(response => setEquipmentList(response))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {setSearchQuery(e.target.value)}}></input>
                <button>Search</button>
            </form>    
            <select onChange={(e) => setTargetArea(e.target.value)}>
                <option>Target Area</option>
                {targetList.map((bodypart, index) => (
                     <option key={index}>{bodypart}</option>
                ))}
            </select>
            <select>
                <option>Equipment</option>
                {equipmentList.map((equipment, index) => (
                    <option key={index}>{equipment}</option>
                ))}
            </select>
            
            
        </div>
    )
}

export default SearchBar