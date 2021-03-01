import { createAction, props } from '@ngrx/store';
import { News } from '../../model/news';

export const loadSectionNews = createAction(
  '[News] LOAD_SECTION_NEWS',
  props<{ list: News[] }>()
);
export const filterSubsection = createAction(
  '[News] FILTER_SUBSECTION',
  props<{ subsection: string }>()
);
