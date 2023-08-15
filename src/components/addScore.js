import React from "react";
import { Link } from "react-router-dom";
import Input from "./input";
import { db } from "../lib/firebase";
import { collection, addDoc} from "firebase/firestore";
import "./addScore.css"

function AddScore() {

  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    score: 0,
  })

  function handleSubmit(e){
    // e.preventDefault();
    
    let valid = true
    Object.keys(user).forEach(key => {
      const value = user[key]
      if (!value) valid = false
    })
    if(!valid){
      alert("Fill out all fields")
    } else{
      const userCollRef = collection(db, "users")
      addDoc(userCollRef, user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err.message);
      })}
  }

  return (
    <>
      <h1 className="scoresHeader">Add a Score.</h1>
      <div className="addScoreContainer">
        <form>
          <Input
            type="text"
            label="First Name"
            name="firstName"
            placeholder="Type here..."
            handleChange={e => setUser({
              ...user,
              firstName: e.target.value
            })}
            id="firstName"
          />
          <Input
            type="text"
            label="Last name"
            name="lastName"
            placeholder="Type here..."
            handleChange={e => setUser({
              ...user,
              lastName: e.target.value
            })}
            id="lastName"
          />
          <Input
            type="number"
            label="Score"
            name="score"
            placeholder="0"
            handleChange={e => setUser({
              ...user,
              score: e.target.value
            })}
            id="score"
          />
        </form>
        <Link to="/">
          <button onClick={handleSubmit} data-testid="submitBtn">Submit</button>
        </Link>
      </div>
    </>
  )
}

export default AddScore