"use client";
import Image from "next/image";
import { useState, Fragment, useCallback } from "react";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return <div>Game Clock</div>;
};

const Team = ({ name, score }: { name: string; score: number }) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Score: {score || 0}</div>
    </>
  );
};

export default function Home() {
  const [teamScore1, updateTeamScore1] = useState(0);
  const [teamName1, updateTeamName1] = useState("");
  const [buttonChangeTeam, changeButtonTeamName] = useState(false);

  return (
    <div>
      <Header />
      <Team name={teamName1} score={teamScore1}></Team>
      <Team name="Team 2" score={3}></Team>
      <div>
        Change team name 1:
        {buttonChangeTeam ? (
          <>
            <input
              className="border"
              type="text"
              placeholder="Team1"
              onChange={(e) => updateTeamName1(e.target.value)}
            ></input>
            <button
              className="border hover:border-red-600"
              onClick={() => changeButtonTeamName(false)}
            >
              Done
            </button>
          </>
        ) : (
          <button
            className="border hover:border-red-600"
            onClick={() => changeButtonTeamName(true)}
          >
            Change team name
          </button>
        )}
      </div>
      <div>
        Change team score 1:
        <input
          className="border"
          type="number"
          onChange={(e) => updateTeamScore1(parseInt(e.target.value))}
        ></input>
      </div>
    </div>
  );
}
