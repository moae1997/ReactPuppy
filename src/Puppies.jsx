import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PuppyList from "./PuppyList";
import AddPup from "./AddPup";

function Puppies({Pups, setPups}) {
    
    useEffect(() => {
        async function fetchPups() {
          try {
            const response = await fetch(
              "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players"
            ); 
            const result = await response.json(); 
            setPups(result.data.players);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPups()
      }, []);
      console.log(Pups);
    return (
      <>
        <div className="pups">
            {Pups.map((puppy)=>{
            return (
               <PuppyList puppy={puppy} key={puppy.id} /> 
            )    
            })}
           
        </div>
      </>
    )
  }

 
  
  export default Puppies