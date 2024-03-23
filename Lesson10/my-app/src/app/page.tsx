"use client";
import Image from "next/image";
import { useState, Fragment, useCallback } from "react";
import image from "../SNice.svg.png";

const JOB_DATA = [
  {
    id: 0,
    title: "Pied Piper",
    subTitle: "November 2018 - present",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 1,
    title: "Pied Piper 2",
    subTitle: "November 2018 - present",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 2,
    title: "Pied Piper 3",
    subTitle: "November 2018 - present",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

type JobProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Job = (props: JobProps) => {
  return (
    <p>
      {props.title}
      {props.subTitle}
      {props.description}
    </p>
  );
};

const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <Image className="size-1/4 p-4" src={image} alt="smiley" />
      <p>Mr.Smiley</p>
      <p>Im feeling real good about working</p>
    </div>
  );
};

type ContentProps = {
  data: typeof JOB_DATA;
};

const Content = (props: ContentProps) => {
  return (
    <div className="">
      {props.data.map((item) => (
        <Job
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <Content data={JOB_DATA} />
    </div>
  );
}
