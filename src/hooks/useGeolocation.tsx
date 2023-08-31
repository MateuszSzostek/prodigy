import React from "react";

export default function useGeolocation(options = {}) {
  const [state, setState] = React.useState<{
    loading: boolean;
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: string | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    timestamp: number | null;
    error?: string | null;
  }>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = React.useRef(options);

  React.useEffect(() => {
    //@ts-ignore
    const onEvent = ({ coords, timestamp }) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
      });
    };
    //@ts-ignore
    const onEventError = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}
