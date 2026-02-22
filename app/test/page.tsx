import React from "react";
import Intro from "../sections/introduction/Intro";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Intro />
    </div>
  );
}
