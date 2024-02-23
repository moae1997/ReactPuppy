import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { bringPup, bringPups, deletePup, createPup } from "./Api";

function Puppies({setClickedPuppy}) {
  const [puppies, setPuppies] = useState([])
  const [puppyname, setPuppyName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  useEffect(() => {
    bringPups().then(setPuppies);
  }, []);

  async function handleSubmit(event) {
      event.preventDefault();

      createPup({
        name: puppyname,
        breed: breed,
        imageUrl: image,
        teamId: team
      }).then(()=>{
        bringPups().then(setPuppies);
        setPuppyName("");
        setBreed("");
        setImage("");
        setTeam("");
      })
     
    }

    async function handleClick(puppyId) {
        deletePup(puppyId).then(()=>{
          bringPups().then(setPuppies);
        })
    }

    async function handlePress(puppyId) {
        setClickedPuppy(puppyId);
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

        <div className="pups">
            {puppies.map((puppy)=>{
            return (
              <div className="pupdiv" key={puppy.id}>
        <h3>Name: <span className="namespan">{puppy.name}</span></h3>
                <h3>ID: {puppy.id}</h3>
                <button onClick={()=> handlePress(puppy.id)} className="viewDetails">Details</button>
                <button onClick={()=> handleClick(puppy.id)} className="removePlayer">Remove</button>
                <img src={puppy.imageUrl} alt="image" height="250" width="300"/>
        </div>
            )    
            })}
           
        </div>
      </>
    )
  }

 
  
  export default Puppies