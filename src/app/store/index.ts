import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

// Custome Reducers
import * as fromUser from './reducers/user.reducer';

export interface State {
  // user: fromUser.State;
  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  // user: fromUser.reducer;
  [fromUser.userFeatureKey]: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
