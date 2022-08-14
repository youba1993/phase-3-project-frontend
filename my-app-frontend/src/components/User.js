import React, { useState, useEffect } from "react";

function User() {

    const [users, setUsers] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/users/1")
          .then((r) => r.json())
          .then((users) => setUsers(users));
  }, []);

    return (
        <div>
            <p> Welcome to your Donation Portal, </p>
            <h5> {users.first_name} {users.last_name} </h5>
        </div>
    )
}

export default User;