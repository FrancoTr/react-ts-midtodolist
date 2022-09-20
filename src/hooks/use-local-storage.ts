import { useState } from "react";

const useLocalStorage = <TState>(key: string, newState: TState) => {
  const [state, setState] = useState<TState>(() => {
    const stateStr = window.localStorage.getItem(key);
    return stateStr ? (JSON.parse(stateStr) as TState) : newState;
  });

  const updateState = (state: TState) => {
    window.localStorage.setItem(key, JSON.stringify(state));
  };

  return [state, updateState];
};

export default useLocalStorage;
