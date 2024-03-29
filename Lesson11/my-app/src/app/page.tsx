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
    <div className="p-4">
      <p className="font-bold text-xl">{props.title}</p>
      <p className="font-bold underline">{props.subTitle}</p>
      <p>{props.description}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-slate-400">
      <Image className="size-1/6 p-4" src={image} alt="smiley" />
      <div>
        <p className="font-bold text-2xl mr-4">Mr.Smiley</p>
        <p>Im feeling real good about working</p>
      </div>
    </div>
  );
};

type ContentProps = {
  data: typeof JOB_DATA;
};

const Content = (props: ContentProps) => {
  return (
    <div className="bg-slate-300">
      <div className="bg-slate-600 text-white p-4">
        I'm looking for work in web development! Please hire me, oh lord!
        Please!
      </div>
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

const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-400 p-8">
      <p className="font-bold text-2xl">Thanks for reading!</p>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <Content data={JOB_DATA} />
      <Footer />
    </div>
  );
}
