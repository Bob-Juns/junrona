import axios from 'axios';

export const getApiByCountry = async (
  country: string,
  from: string | undefined,
  to: string | undefined,
) => {
  const result = await axios.get(
    `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${from}&date_to=${to}`,
  );

  return result.data;
};
