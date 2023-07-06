"use client";
import { usePreview } from "react-dnd-preview";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactNode } from "react";

const MyPreview = () => {
  const preview = usePreview();
  if (!preview.display) {
    return null;
  }
  const { itemType, item, style } = preview;

  return (
    <div
      style={style}
      className=" w-[280px]
        first:my-5 
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
    >
      <p className=" 
      font-bold
      tracking-wide
      text-center">
        {itemType as ReactNode}
      </p>
    </div>
  );
};

const Dragndrop = ({ children }: { children: React.ReactNode }) => {
  const opts = { enableMouseEvents: true, enableTouchEvents: true };

  return (
    <DndProvider backend={TouchBackend} options={opts}>
      {children}
      <MyPreview />
    </DndProvider>
  );
};
export default Dragndrop;
