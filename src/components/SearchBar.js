import React, { useEffect, useState } from "react";

function SearchBar({onHandleSubmit, onHandleFilter}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [targetArea, setTargetArea] = useState("Target Area")
    const [equipmentChoice, setEquipmentChoice] = useState("Equipment")
    const options = {
                method: 'GET',
                headers: {
                    //API KEY
                }
            };

    function handleSubmit(e) {
        e.preventDefault()
        onHandleSubmit(searchQuery)
    }

    const [targetList, setTargetList] = useState([])
    useEffect(() => {
            fetch('https://exercisedb.p.rapidapi.com/exercises/targetList', options)
            .then(response => response.json())
            .then(response => setTargetList(response))
            .catch(err => console.error(err));
    }, [])

    const [equipmentList, setEquipmentList] = useState([])
    useEffect(() => {
             fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', options)
            .then(response => response.json())
            .then(response => setEquipmentList(response))
            .catch(err => console.error(err));
    }, [])

    function handleFilter(e) {
        e.preventDefault()
        onHandleFilter(targetArea, equipmentChoice)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {setSearchQuery(e.target.value)}}></input>
                <button>Search</button>
            </form>  

            <form onSubmit={handleFilter}>  
                <select onChange={(e) => setTargetArea(e.target.value)}>
                    <option>Target Area</option>
                    {targetList.map((bodypart, index) => (
                        <option key={index}>{bodypart}</option>
                    ))}
                </select>

            
                <select onChange={(e) => setEquipmentChoice(e.target.value)}>
                    <option>Equipment</option>
                    {equipmentList.map((equipment, index) => (
                        <option key={index}>{equipment}</option>
                    ))}
                </select>
                <button>Search</button>
            </form>
            
            
            
        </div>
    )
}

export default SearchBar