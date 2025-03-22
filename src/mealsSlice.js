// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Desayuno', cost: 50, selected: false },
{ name: 'Té de la tarde', cost: 25, selected: false },
{ name: 'Almuerzo', cost: 65, selected: false },
{ name: 'Cena', cost: 70, selected: false },
   
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
  },
  },
});
export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;