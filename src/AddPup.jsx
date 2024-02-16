import React from "react";
import { useState } from "react";


function AddPup({reloadPups}) {

    const [puppyname, setPuppyName] = useState("");
    const [breed, setBreed] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        name: puppyname,
        breed: breed,
        imageUrl: image,
        teamId: team
      })
    });
      reloadPups();
      setPuppyName("");
      setBreed("");
      setImage("");
      setTeam("");
        } catch (error) {
          setError(error.message);
        }
      }

    return (
      <>
        <h2>Add A Puppy Player!</h2>
        <div>
        <form onSubmit={handleSubmit} >
        <label>PuppyName: <input value={puppyname} onChange={(e) => setPuppyName(e.target.value)} required/></label>
        <label>PuppyBreed: <input value={breed} onChange={(e) => setBreed(e.target.value)} required/></label>
        <label>PhotoUrl: <input value={image} onChange={(e) => setImage(e.target.value)} required/></label>
        <label>Puppy's Team: <input value={team} onChange={(e) => setTeam(e.target.value)} required/></label>
        <button>Submit</button>
        </form>
        </div>
      </>
    )
  }
  
  export default AddPup