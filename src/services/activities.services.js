import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  ACTIVITY: 'activity',
};

export const getActivitiesService = async () => {
  const url = `${baseUrl}${routesUrl.ACTIVITY}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    return `${error.message} ${error.response.statusText}`;
  }
};
