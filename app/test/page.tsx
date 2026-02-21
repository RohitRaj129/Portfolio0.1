import React from "react";
import StatsCard from "../sections/hero/StatsCard";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <StatsCard />
    </div>
  );
}
