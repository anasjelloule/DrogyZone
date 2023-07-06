"use client";
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
const  Dragndrop=({ children }: { children: React.ReactNode })=> {
  return  <DndProvider backend={window.outerWidth > 1024 ? HTML5Backend:TouchBackend}>{children}</DndProvider>;
}
export default Dragndrop