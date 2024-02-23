import React from "react";

export async function bringPups() {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players"
      ); 
      const result = await response.json(); 
      console.log(result);
      return result.data.players;
    } catch (error) {
      console.error(error);
    }
  }

  export async function createPup(pup) {
  try {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(pup)
  });
  const result = response.json();
  console.log(result);
      } catch (error) {
        console.log(error);
      }

    }

    export async function bringPup(pupId) {
        try {
          const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${pupId}`
          ); 
          const result = await response.json(); 
          console.log(result);
          return result.data.player;
        } catch (error) {
          console.error(error);
        }
      }

      export async function deletePup(pupId) {
        try {
          const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${pupId}`,
             {method: "DELETE"}
          ); 
          const result = await response.json(); 
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      }