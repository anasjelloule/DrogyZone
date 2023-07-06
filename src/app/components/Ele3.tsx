"use client";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { BsTrash } from "react-icons/bs";
import { Task } from "@/app/Types/Types";

import { useDispatch } from "react-redux";
import { removeTask } from "@/app/state/dragsSlice";
import Swal from "sweetalert2";
interface Task2 extends Task {
  type: string;
}

function Ele2({ id, text, type }: Task2) {
  const dispatch = useDispatch();

  const removeElement = () => {
    Swal.fire({
      title: "Warnning!",
      text: "Do you want to continue",
      icon: "warning",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) dispatch(removeTask(id));
    });
  };

  return (
    <>
      <div
        className=" w-[280px]
                 my-5
                  rounded-lg
                    bg-white
                      dark:bg-[#2b2c37]
                       shadow-[#364e7e1a]
                        py-6
                         px-3
                          shadow-lg 
             dark:text-white
              dark:hover:text-[#635fc7]
               cursor-pointer 
              flex
              flex-col
              items-center
              justify-center
              relative
             "
      >
        <p className=" font-bold tracking-wide text-center ">
          <small className="text-sm" title={id}>
            {id.substring(0, 6).concat("...")}
          </small>
          <br />
          {type == "text" ? (
            <input
              type={type}
              value={text}
              disabled
              className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            />
          ) : (
            <input
              type={type}
              disabled
              checked={true}
              className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            />
          )}
        </p>

        <span className="absolute top-2 right-2">
          <BsTrash
            size={18}
            onClick={() => removeElement()}
            className="hover:text-[#635fc7] hover:scale-110"
          />
        </span>
      </div>
    </>
  );
}

export default Ele2;
