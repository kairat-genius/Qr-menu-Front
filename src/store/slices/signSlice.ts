import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignState {
  isSign: string;
}

const initialState: SignState = {
  isSign: 'in',
};

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setSign: (state, action: PayloadAction<string>) => {
      state.isSign = action.payload;
    },
  },
});

export const { setSign } = signSlice.actions;
export default signSlice.reducer;
