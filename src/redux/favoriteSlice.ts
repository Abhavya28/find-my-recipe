import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavState {
  favorites: number[];
}

const initialState: FavState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((item) => item !== id);
      } else {
        state.favorites.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;