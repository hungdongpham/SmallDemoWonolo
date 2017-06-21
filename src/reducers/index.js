import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_authentication';
import WeatherReducer from './reducer_weather';
import usersReducer from './reducer_users';
import BadgesReducer from './reducer_badges';
import UserInfoReducer from './reducer_userinfo';
import JobRequestsReducer from './reducer_jobrequests';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  auth: authReducer,
  weather: WeatherReducer,
  users: usersReducer,
  badges: BadgesReducer,
  userInfo: UserInfoReducer,
  jobrequests: JobRequestsReducer
});

export default rootReducer;
