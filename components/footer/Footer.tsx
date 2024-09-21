"use client";

import { useStore } from "@/lib/screenWidthProvider";
import React from "react";

export default function Footer() {
  const bears = useStore((b) => b.bears);
  const increasePopulation = useStore((b) => b.increasePopulation);
  const removeAllBears = useStore((b) => b.removeAllBears);
  const updateBears = useStore((b) => b.updateBears);

  return (
    <div className="flex flex-col text-center">
      <h1>Footer</h1>
      <h1>{bears}</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove</button>
      <input
        type="text"
        value={bears}
        onChange={(e) => updateBears(Number(e.currentTarget.value))}
      />
    </div>
  );
}
