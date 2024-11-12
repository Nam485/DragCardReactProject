import React, { useRef } from "react";
import Card from "./Card";

function Foreground({ data, onDelete, onEdit }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} key={index} refernce={ref} onDelete={() => onDelete(index)} onEdit={() => onEdit(index)} />
      ))}
    </div>
  );
}

export default Foreground;
