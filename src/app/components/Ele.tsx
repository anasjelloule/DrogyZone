"use client";
import React ,{ memo } from "react";
import { useDrag } from "react-dnd";
import { Element } from "@/app/Types/Types";
import { dragEle } from "../state/dragsSlice";
import { useDispatch } from "react-redux";

function Ele({ id, type }: Element) {
 
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const addElement = () => {
    dispatch(dragEle({ id, type }));
  };
  return (
    <>
      <div
        onDoubleClick={() => addElement()}
        className="
                w-[280px]
                my-5
                rounded-lg
                bg-white
                dark:bg-[#2b2c37]
                shadow-[#364e7e1a]
                py-6
                px-3
                shadow-lg 
             hover:bg-[#2b2c37]
             dark:text-white
              dark:hover:text-[#635fc7]
               cursor-pointer "
        ref={drag}
      >
        <p className=" font-bold tracking-wide text-center">{type}</p>
      </div>
    </>
  );
}

export default memo(Ele);
