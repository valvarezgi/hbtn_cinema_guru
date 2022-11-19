import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

export const addToFavoriteOrWatchLater = async (type, id) => {
  const url = `${baseUrl}titles/${type}/${id}`;
  try {
    return await axiosInterceptor.post(url);
  } catch (error) {
    throw error;
  }
};
