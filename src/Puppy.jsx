import React from "react";
import { bringPup, deletePup } from "./Api";
import { useState } from "react";
import { useEffect } from "react";

export function Puppy({clickedPuppy, setClickedPuppy}) {

    const [onePup, setOnePup] = useState({});

    useEffect(() => {
        bringPup(clickedPuppy).then(setOnePup);
      }, []);
    
    async function handleClick(puppyId) {
        deletePup(puppyId).then(()=>{
            setClickedPuppy(null);
        })
    }

    async function handlePress() {
        setClickedPuppy(null);
    }

    return (
        <>
            <div className="onePupDiv">
                <h1>Hi I am {onePup.name}</h1>

                <div className="profile">
                    <img src={onePup.imageUrl} alt="profilePic"/>
                    <p>Name: {onePup.name}</p>
                    <p>PuppyID: {onePup.id}</p>
                    <p>Breed: {onePup.breed}</p>
                    <p>Team ID: {onePup.teamId}</p>
                    <p>Status: {onePup.status}</p>
                </div>

                <div className="settings">
                    <p>Cohort: {onePup.cohortId}</p>
                    <p>Added to team on: {onePup.createdAt}</p>
                    <p>Last updated: {onePup.updatedAt}</p>
                    <button onClick={()=>handleClick(onePup.id)}>remove puppy</button>
                </div>

                <div>
                    <button onClick={handlePress}>Go Back to Main Page</button>
                </div>

            </div>
        </>
    )
}