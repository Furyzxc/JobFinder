import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore.ts";
import { usersApi } from "@/slices/users/users-api.ts";
import { countPages } from "@/shared/utils/count-pages.ts";

interface Paginator {
  pages: number[];
  count: number;
  page: number;
  term: string;
  friend: boolean | null;
}

const initialState: Paginator = {
  pages: [],
  count: 24,
  page: 1,
  term: "",
  friend: null,
};

export const paginatorSlice = createSlice({
  name: "paginator",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    setSearchingTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
      state.page = 1;
    },

    setFriend(state, action: PayloadAction<boolean>) {
      state.friend = action.payload;
      state.page = 1;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.pages = countPages(action.payload.totalCount, state.count, 18);
      },
    );

    builder.addMatcher(usersApi.endpoints.getUsers.matchRejected, (state) => {
      state.pages = [];
    });
  },
});

export const paginatorActions = paginatorSlice.actions;

export const getPages = (state: RootState) => state.paginator.pages;
export const getPaginator = (state: RootState) => state.paginator;
export const getFriend = (state: RootState) => state.paginator.friend;
