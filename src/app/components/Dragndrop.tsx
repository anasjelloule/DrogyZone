"use client";
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
export function Dragndrop({ children }: { children: React.ReactNode }) {
  return  <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}