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
    addToDo: (state, action: PayloadAction<IToDoCardComponentProps>) => {
      const item = {
        id: action.payload.id,
        description: action.payload.description,
        name: action.payload.name
      }
    state.list.push(item);
    },
    deleteToDo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => {
        return item.id != action.payload
      });
    }
  },
});

export const {addToDo, deleteToDo} = addDeleteSlice.actions;
