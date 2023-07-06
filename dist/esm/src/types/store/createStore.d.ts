export declare function createStore<F>(storeState: F): (<T>(stateSelector: (selectorState: F) => T) => [T, (reducer: (reducerState: F) => F) => void])[];
