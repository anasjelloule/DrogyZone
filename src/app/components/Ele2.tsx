'use client';
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { BsTrash } from "react-icons/bs"
import { Element } from "@/app/Types/Types";
import { deleteEle ,changeTask,changeChecked} from "@/app/state/dragsSlice";
import { useDispatch, useSelector } from "react-redux";
import { DragsState } from "../state/store";


function Ele2({ id, type }: Element) {
    const dispatch = useDispatch()
    const tasktitle: string = useSelector((state: DragsState) => state.drags.tasktitle)
    const checked: boolean = useSelector((state: DragsState) => state.drags.checked)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: { id, type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

 const change_Task=(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(type=="checkbox")
    dispatch(changeChecked(event.currentTarget.checked))
    if(type=="text")
    dispatch(changeTask(event.currentTarget.value))
 }
    const removeElement = () => {
        dispatch(deleteEle(id))
    };

    return (
        <>
            <div
                className=" w-[280px] my-5 rounded-lg  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg 
             dark:text-white dark:hover:text-[#635fc7] cursor-pointer 
              flex
              flex-col
              items-center
              justify-center
              relative
             "
                ref={drag}
            >
                <p className=" font-bold tracking-wide text-center mb-5"  >
                    {type}
                </p>
                <input 
                type={type}
                value={tasktitle}
                checked={checked}
                className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
                 onChange={(event)=>{ change_Task(event)}}
                />
                <span className="absolute top-2 right-2">
                    <BsTrash size={18} onClick={() => removeElement()} className="hover:text-[#635fc7] hover:scale-110" />
                </span>
            </div>
        </>
    );
}

export default Ele2;