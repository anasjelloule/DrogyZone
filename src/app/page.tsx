"use client";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import Ele from "@/app/components/Ele";

import Ele2 from "@/app/components/Ele2";
import Ele3 from "@/app/components/Ele3";
import { Element, Task } from "@/app/Types/Types";
import { DragsState } from "@/app/state/store";
import { dragEle, addTask } from "@/app/state/dragsSlice";

export default function Home() {
  const dispatch = useDispatch();

  const elements: Element[] = useSelector(
    (state: DragsState) => state.drags.elements
  );
  const drags: Element[] = useSelector(
    (state: DragsState) => state.drags.drags
  );
  const tasks: Task[] = useSelector((state: DragsState) => state.drags.tasks);
  const tasktitle: string = useSelector(
    (state: DragsState) => state.drags.tasktitle
  );
  const checked: boolean = useSelector(
    (state: DragsState) => state.drags.checked
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["checkbox", "text"],
    drop: (el: Element,monitor) => {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
      addElement(el)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addElement = (el: Element) => {
    dispatch(dragEle(el));
  };

  function save(): void {
    if (tasktitle != "") dispatch(addTask(tasktitle));
    if (checked) dispatch(addTask("Checked"));
  }

  return (
    <>
      <div
        className="
         scrollbar-hide 
         flex
         justify-center
         items-stretch 
         md:flex-row flex-col   
         gap-6 "
      >
        <div
          className="   
        flex 
        items-center 
        justify-around
        flex-wrap
        font-bold 
        text-2xl  
        transition
        duration-300  
      dark:bg-[#2b2c3740] 
      bg-[#E9EFFA] 
        scrollbar-hide
        py-5
        min-w-[280px] 
        w-full 
        md:w-1/2
        text-[#828FA3]
         mt-[20px] 
         md:mt-[135px] 
         rounded-lg "
        >
          {elements.map(({ id, type, title }, index) => (
            <Ele id={id} key={index} type={type} title={title} />
          ))}
        </div>

        <div
          className={`  
        flex
        justify-around
        ${drags.length<1?' items-center':' items-stretch'}         
        flex-wrap  
        font-bold
        text-2xl  
        transition
        duration-300  
      dark:bg-[#2b2c3740] 
      bg-[#E9EFFA]
       scrollbar-hide 
        py-5
          min-w-[280px]
           w-full md:w-1/2 
          text-[#828FA3]  
          md:mt-[135px] 
          min-h-[120px]
          rounded-lg
          ${isOver?'bg-gray-800':''}
          `}
          ref={drop}
        >
       {drags.length<1?( <div className={`select-none ${isOver?'hidden':''} duration-300`}>Drop Here +</div>):''}
          {drags.map((el, index) => (
            <Ele2 id={el.id} key={index} type={el.type} />
          ))}
        </div>
      </div>
      <div className="my-5 text-center">
        <button
          onClick={() => save()}
          className="
            w-1/3
            items-center
          dark:text-[#635fc7]
          dark:bg-white
          text-white
          bg-[#635fc7]
            py-2
            rounded-full "
        >
          Save
        </button>
      </div>

      <div
        className="
          scrollbar-hide
          flex
          justify-start 
          items-center  "
      >
        <div
          className="   
            flex
            justify-center
            items-stretch
            gap-6 flex-wrap
            font-bold text-2xl  
            transition duration-300  
          dark:bg-[#2b2c3740] 
          bg-[#E9EFFA] 
            scrollbar-hide   
            min-w-[280px] 
            w-full  
            md:w-3/4 
            m-auto
           text-[#828FA3]   
           rounded-lg "
        >
          {tasks.map((task) => (
            <Ele3
              id={task.id}
              key={task.id}
              text={task.text}
              type={task.text == "Checked" ? "checkbox" : "text"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
