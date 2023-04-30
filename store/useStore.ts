import { createStore } from "./createStore";

const { useStore } = createStore({
  store: {
    counter: 9,
  },
  prodigy: {
    toasts: [],
  },
});

export { useStore };
