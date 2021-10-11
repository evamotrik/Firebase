import React, { useReducer } from 'react';
import Context from "./src/utils/context.js";
import * as ACTIONS from "./src/actionCreators/user.action.js";
import { ReducerFunction, defaultState } from "./src/reducers/user.reducer.js";
import StackNavigator from './src/navigation/StackNavigation.js';

export default function App() {

  const [stateUser, dispatchUserReducer] = useReducer(ReducerFunction, defaultState);
  const setData = (data) => {
    dispatchUserReducer(ACTIONS.addUser(data));
  };

  return (
    <Context.Provider
      value={{
        userState: stateUser,
        setData: (data) => setData(data)
      }}>  
      <StackNavigator />
    </Context.Provider>
  );
}