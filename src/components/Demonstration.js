import React from "react";

function Demonstration({demo}) {
    return (
        <div class="Demo">
            <h3>Demonstration</h3>
            <img class ="gif" src={demo} />
        </div>
    )
}

export default Demonstration