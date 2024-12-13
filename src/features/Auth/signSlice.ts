import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isSignType = 'in' | 'up' | 'reset';

interface SignState {
  isSign: isSignType;
}

const initialState: SignState = {
  isSign: 'in',
};

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setSign: (state, action: PayloadAction<isSignType>) => {
      state.isSign = action.payload;
    },
  },
});

export const { setSign } = signSlice.actions;
export default signSlice.reducer;
