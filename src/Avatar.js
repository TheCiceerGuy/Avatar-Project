import React from "react";
import ReactDOM from "react-dom";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

const Avatar = () => {
  const arraydata = [
    {
      id: 1,
      name: "Ciceer",
      work: "Web Developers"
    },
    {
      id: 2,
      name: "Ram",
      work: "Web Developers"
    },
    {
      id: 1,
      name: "Shyam",
      work: "Web Developers"
    },
    {
      id: 1,
      name: "Sita",
      work: "Web Developers"
    }
  ];
  const arraycard = arraydata.map((avatar, i) => {
    return (
      <Avatarlist
        id={arraydata[i].name}
        name={arraydata[i].name}
        work={arraydata[i].work}
      />
    );
  });

  return (
    <div>
      <h1 className="tc">Welcome to Profile Page</h1>
      {arraycard}
      <br />
      <button type="submit" value="Login" className="ma4 pa2">
        Login
      </button>
    </div>
  );
};
export default Avatar;
