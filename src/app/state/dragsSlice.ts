import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { Element, Task, initialStatetypes } from "@/app/Types/Types";

const initialState: initialStatetypes = {
  elements: [
    {
      id: 1,
      type: "text"
    },
    {
      id: 2,
      type: "checkbox"
    }
  ],
  drags: [],
tasktitle:'',
checked:false,
  tasks: []
}

const dragsSlice = createSlice({
  name: "drags",
  initialState,
  reducers: {
    changeTask:(state, action: PayloadAction<string>) => {
       
      state.tasktitle=action.payload
    },
    changeChecked:(state, action: PayloadAction<boolean>) => {
       
      state.checked=action.payload
    },
    
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({id:uuidv4(),text:action.payload});
      state.tasktitle=''
      state.checked=false
    },
    editTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({id:uuidv4(),text:action.payload});
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(el => el.id != action.payload)
    },
    dragEle: (state, action: PayloadAction<Element>) => {
      let exist = false;
      state.drags.map(el => {
        if (el.id == action.payload.id)
          exist = true
      })
      if (!exist)
        state.drags = [...state.drags, action.payload]

    },

    deleteEle: (state, action: PayloadAction<number>) => {
      state.drags = state.drags.filter(el => el.id != action.payload)
    },
  },
});


export const { dragEle, deleteEle,changeTask ,addTask,removeTask,changeChecked} = dragsSlice.actions;

export default dragsSlice;