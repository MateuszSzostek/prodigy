import * as React from "react";

export default function useBattery() {
  const [state, setState] = React.useState({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  React.useEffect(() => {
    //@ts-ignore
    if (!navigator.getBattery) {
      setState((s) => ({
        ...s,
        supported: false,
        loading: false,
      }));
      return;
    }
    //@ts-ignore
    let battery = null;

    const handleChange = () => {
      setState({
        supported: true,
        loading: false,
        //@ts-ignore
        level: battery.level,
        //@ts-ignore
        charging: battery.charging,
        //@ts-ignore
        chargingTime: battery.chargingTime,
        //@ts-ignore
        dischargingTime: battery.dischargingTime,
      });
    };

    //@ts-ignore
    navigator.getBattery().then((b) => {
      battery = b;
      handleChange();

      b.addEventListener("levelchange", handleChange);
      b.addEventListener("chargingchange", handleChange);
      b.addEventListener("chargingtimechange", handleChange);
      b.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      //@ts-ignore
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange", handleChange);
      }
    };
  }, []);

  return state;
}
