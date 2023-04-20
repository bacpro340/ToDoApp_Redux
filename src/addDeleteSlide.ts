import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { IToDoCardComponentProps } from '../components/ToDoCard';

interface AddDeleteState {
  list: IToDoCardComponentProps[];
}
const initialState: AddDeleteState = {
  list: [],
};

export const addDeleteSlice = createSlice({
  name: 'addDelete',
  initialState,
  reducers: {

    deleteToDo: state => {
      //state.value -= 1;
    },
    addToDo: (state, action: PayloadAction<IToDoCardComponentProps>) => {
      //const item = action.payload;
      const item = {
        id: action.payload.id,
        description: action.payload.description,
        name: action.payload.name
      }
      state.list.push(item);
    },
  },
});

export const {addToDo, deleteToDo} = addDeleteSlice.actions;
