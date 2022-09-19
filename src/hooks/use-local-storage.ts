const useLocalStorage = <TState>(key: string, newState: TState) => {
  const stateStr = window.localStorage.getItem(key);
  const state = stateStr ? JSON.parse(stateStr) : newState;
};

export default useLocalStorage;
