"use client";
import Image from "next/image";
import { useState, Fragment, useCallback } from "react";
import TeamClock from "./TeamClock";

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
    <>
      <TeamClock />
    </>
  );
}
