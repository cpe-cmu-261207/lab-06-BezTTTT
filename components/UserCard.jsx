import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(props) {
  const [showUsers, setshowUsers] = useState(false);
  return (
    <div className="border-bottom" onClick={() => setshowUsers(!showUsers)}>
      <div className="d-flex align-item-center p-3">
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {showUsers ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {showUsers && (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}
