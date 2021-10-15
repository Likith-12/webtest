import React from "react";
import Member from "../components/Member";
import "./css/team.scss";

const Team = () => {
  return (
    <>
      <div className="grid-container">
    <h1>Team</h1>
        <div className="row">
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
        </div>
        <div className="row">
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
        </div>

        <div className="row bottom">
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
          <Member
            title="member1"
            desc="about info"
            img__path="https://source.unsplash.com/random"
          ></Member>
        </div>
      </div>
    </>
  );
};

export default Team;
