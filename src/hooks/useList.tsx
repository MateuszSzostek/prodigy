import React from "react";

export default function useList(defaultList = []) {
  const [list, setList] = React.useState(defaultList);

  const methods = React.useMemo(() => {
    //@ts-ignore
    const set = (l) => {
      //@ts-ignore
      setList(l);
    };
    //@ts-ignore
    const push = (element) => {
      //@ts-ignore
      setList((l) => [...l, element]);
    };
    //@ts-ignore
    const removeAt = (index) => {
      //@ts-ignore
      setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]);
    };
    //@ts-ignore
    const insertAt = (index, element) => {
      //@ts-ignore
      setList((l) => [...l.slice(0, index), element, ...l.slice(index)]);
    };
    //@ts-ignore
    const updateAt = (index, element) => {
      //@ts-ignore
      setList((l) => l.map((e, i) => (i === index ? element : e)));
    };

    const clear = () => setList([]);

    return {
      set,
      push,
      removeAt,
      insertAt,
      updateAt,
      clear,
    };
  }, []);

  return [list, methods];
}
