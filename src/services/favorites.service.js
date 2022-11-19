import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  FAVORITES: 'titles/favorite/',
};
export const getFavorites = async () => {
  const url = `${baseUrl}${routesUrl.FAVORITES}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    throw error;
  }
};
