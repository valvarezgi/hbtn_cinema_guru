import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  CUSTOM_FILTER: 'titles/advancedsearch',
};

export const getDataWithCustomFilter = async ({
  page,
  minYear,
  maxYear,
  genres,
  title,
  sort,
}) => {
  const url = `${baseUrl}${routesUrl.CUSTOM_FILTER}?page=${page}&minYear=${minYear}&maxYear=${maxYear}&genres=${genres}&title=${title}&sort=${sort}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    throw error;
  }
};
export const loadMovies = async (page) => {
  const url = `${baseUrl}${routesUrl.CUSTOM_FILTER}?page=${page}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    throw error;
  }
};
