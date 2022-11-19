import { useEffect, useState } from 'react';

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller = null;
  let result = {};
  const callEndpoint = async (axiosCall) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    try {
      await console.log(axiosCall.call);
      result = await axiosCall.call;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    setLoading(false);
    return result;
  };
  const cancelCall = () => {
    setLoading(false);
    controller && controller.abort();
  };
  useEffect(() => {
    return () => {
      cancelCall();
    };
  }, []);

  return { callEndpoint, loading };
};
