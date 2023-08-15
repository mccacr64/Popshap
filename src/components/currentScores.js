import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./currentScores.css"



function CurrentScores() {
  const [users, setUsers] = useState([])

  const usersArr = users.sort((a,b) => b.data.score - a.data.score, 0).map((user, index) => <li key={user.id}>
    <p>{index + 1}. {user.data.firstName} {user.data.lastName} </p>
    <span>{user.data.score}</span>
    </li>)

  // useEffect(() => {
  //   fetchUsers();
  // }, [])

  useEffect(() => {
    const userCollRef = collection(db, "users"); 

    const unsubscribe = onSnapshot(userCollRef, snapshot => {
      setUsers(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

    return () => {
      unsubscribe()
    }

  }, [])

  // function fetchUsers(){

  //   const userCol = collection(db, "users"); 

  //   getDocs(userCol)
  //     .then(res => {
  //       const userData = res.docs.map(doc => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }))
  //       setUsers(userData)
  //     })
  //     .catch(err => console.error(err.message))

  //   }

  return (
    <>
      <h1 className="scoresHeader">Current Scores.</h1>
      <ul data-testid="usersArr">
        {usersArr}
      </ul>
      <div className="buttonContainer">
        <Link to="/addScore">
          <button>Add a Score</button>
        </Link>
      </div>
    </>
  )
}

export default CurrentScores