import FriendList from "./FriendList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriendsList] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  function handelAddFriend(newFriend) {
    setFriendsList((friends) => [newFriend, ...friends]);
    setShowAddFriend(false);
  }

  function handelShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handelAddFriend} />}
        <Button onClick={handelShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friends"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
