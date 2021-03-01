import * as NewsActions from './../actions/news.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { News } from '../../model/news';

// define state interface
export interface NewsState {
  newsList: News[];
  filter: string;
}

// initial state
export const initialState: NewsState = {
  newsList: [],
  filter: '',
};

const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadSectionNews, (state) => ({
    newsList: [],
    filter: '',
  })),
  on(NewsActions.filterSubsection, (state) => ({ newsList: [], filter: '' }))
);
export function reducer(state: NewsState | undefined, action: Action) {
  return newsReducer(state, action);
}

export const getNewsList = (state: any) => {};

export const getFilter = (state: any) => {};
