import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  WATCH_LATER: 'titles/watchlater/',
};

export const getWatchLater = async () => {
  const url = `${baseUrl}${routesUrl.WATCH_LATER}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    throw error;
  }
};
