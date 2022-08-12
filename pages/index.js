import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";
import React from "react";

export default function Home() {
  const [genAmount, setgenAmount] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (genAmount < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    const newUsers = [];
    for (const x of resp.data.results) {
      newUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          value={genAmount}
          onChange={(event) => {
            setgenAmount(event.target.value);
          }}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {users.map((x) => (
        <UserCard
          key={x.name}
          name={x.name}
          img={x.imgUrl}
          email={x.email}
          address={x.address}
        />
      ))}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Thanakit Chanlaset 640610637
      </p>
    </div>
  );
}
