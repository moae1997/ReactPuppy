import React from "react";

function PuppyList({puppy}) {
    return (
        <>
        <div className="pupdiv">
        <h3>Name: <span className="namespan">{puppy.name}</span></h3>
                <h3>ID: {puppy.id}</h3>
                <img src={puppy.imageUrl} alt="image" height="250" width="300"/>
        </div>
        </>
    )
}

export default PuppyList