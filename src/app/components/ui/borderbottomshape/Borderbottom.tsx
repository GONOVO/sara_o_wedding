import React from "react";

function Borderbottom() {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="w-2 h-2 bg-[var(--gold-color)] rotate-45"></div>
        <div className="w-20 h-[2px] bg-[var(--gold-color)] -left-1"></div>
      </div>
      <h3 className="mx-2">Events</h3>
      <div className="flex items-center">
        <div className="w-20  h-[2px] bg-[var(--gold-color)] -left-1"></div>
        <div className="w-2 h-2 bg-[var(--gold-color)] rotate-45"></div>
      </div>
    </div>
  );
}

export default Borderbottom;
