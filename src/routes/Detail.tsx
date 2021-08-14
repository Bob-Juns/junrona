import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// styles
import { color as colour } from '@styles/SharedStyle';

// hooks
import useTitle from '@hooks/useTitle';

// api
import { getApiByCountry } from '../api/data';

// components
import Layout from '@components/Shared/Layout';
import Flag from '@components/Shared/Flags';
import Header from '@components/Detail/Header';
import Accumulation from '@components/Detail/Accumulation';
import WithChart from '@components/Detail/WithChart';
import Loading from '@components/Shared/Loading';

// util
import getDate from '@util/getDate';

type dateType = {
  yesterday: string;
  twoDaysAgo: string;
  threeDaysAgo: string;
  fourDaysAgo: string;
  fiveDaysAgo: string;
  sixDaysAgo: string;
  sevenDaysAgo: string;
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const changeTitle = useTitle();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [date, setDate] = useState<dateType>({
    yesterday: getDate(-1),
    twoDaysAgo: getDate(-2),
    threeDaysAgo: getDate(-3),
    fourDaysAgo: getDate(-4),
    fiveDaysAgo: getDate(-5),
    sixDaysAgo: getDate(-6),
    sevenDaysAgo: getDate(-7),
  });
  const [data, setData] = useState<dataType>({
    info: {
      country_name: id === 'united-state' ? 'united state' : id,
      country_flag: Flag(id),
      country_color: {
        primary: '',
      },
    },
    new: {
      confirmed: {
        yesterday: '',
        two_days_ago: '',
        three_days_ago: '',
        four_days_ago: '',
        five_days_ago: '',
        six_days_ago: '',
        seven_days_ago: '',
      },
      deaths: {
        yesterday: '',
        two_days_ago: '',
        three_days_ago: '',
        four_days_ago: '',
        five_days_ago: '',
        six_days_ago: '',
        seven_days_ago: '',
      },
    },
    acc: {
      new: {
        yesterday: '',
        two_days_ago: '',
      },
      deaths: {
        yesterday: '',
        two_days_ago: '',
      },
    },

    comparison: {
      new: {
        confirmed: {
          calc: {
            yesterday: '',
            two_days_ago: '',
            three_days_ago: '',
            four_days_ago: '',
          },
          sign: {
            yesterday: 0,
            two_days_ago: 0,
            three_days_ago: 0,
            four_days_ago: 0,
          },
        },
        deaths: {
          calc: {
            yesterday: '',
            two_days_ago: '',
            three_days_ago: '',
            four_days_ago: '',
          },
          sign: {
            yesterday: 0,
            two_days_ago: 0,
            three_days_ago: 0,
            four_days_ago: 0,
          },
        },
      },
      acc: {
        new: {
          calc: '',
          sign: 0,
        },
        deaths: {
          calc: '',
          sign: 0,
        },
      },
    },
  });

  useEffect(() => {
    setIsLoading(true);
    changeTitle(`준로나 - ${id}`);
    const country =
      id === 'united-state'
        ? 'US'
        : id === 'vietnam'
        ? 'Vietnam'
        : id === 'indonesia'
        ? 'Indonesia'
        : id;

    const countryColor =
      id === 'united-state'
        ? colour.country.unitedState.primary
        : id === 'vietnam'
        ? colour.country.vietnam.primary
        : id === 'indonesia'
        ? colour.country.indonesia.primary
        : '#000';

    getApiByCountry(country, date.sevenDaysAgo, date.yesterday).then(
      (response) => {
        setData({
          ...data,
          info: {
            ...data.info,
            country_color: {
              primary: countryColor,
            },
          },
          new: {
            confirmed: {
              yesterday:
                response.dates[date.yesterday].countries[country]
                  .today_new_confirmed,
              two_days_ago:
                response.dates[date.twoDaysAgo].countries[country]
                  .today_new_confirmed,
              three_days_ago:
                response.dates[date.threeDaysAgo].countries[country]
                  .today_new_confirmed,
              four_days_ago:
                response.dates[date.fourDaysAgo].countries[country]
                  .today_new_confirmed,
              five_days_ago:
                response.dates[date.fiveDaysAgo].countries[country]
                  .today_new_confirmed,
              six_days_ago:
                response.dates[date.sixDaysAgo].countries[country]
                  .today_new_confirmed,
              seven_days_ago:
                response.dates[date.sevenDaysAgo].countries[country]
                  .today_new_confirmed,
            },
            deaths: {
              yesterday:
                response.dates[date.yesterday].countries[country]
                  .today_new_deaths,
              two_days_ago:
                response.dates[date.twoDaysAgo].countries[country]
                  .today_new_deaths,
              three_days_ago:
                response.dates[date.threeDaysAgo].countries[country]
                  .today_new_deaths,
              four_days_ago:
                response.dates[date.fourDaysAgo].countries[country]
                  .today_new_deaths,
              five_days_ago:
                response.dates[date.fiveDaysAgo].countries[country]
                  .today_new_deaths,
              six_days_ago:
                response.dates[date.sixDaysAgo].countries[country]
                  .today_new_deaths,
              seven_days_ago:
                response.dates[date.sevenDaysAgo].countries[country]
                  .today_new_deaths,
            },
          },
          acc: {
            new: {
              yesterday:
                response.dates[date.yesterday].countries[
                  country
                ].today_confirmed.toLocaleString(),
              two_days_ago:
                response.dates[date.fiveDaysAgo].countries[
                  country
                ].yesterday_confirmed.toLocaleString(),
            },
            deaths: {
              yesterday:
                response.dates[date.yesterday].countries[
                  country
                ].today_deaths.toLocaleString(),
              two_days_ago:
                response.dates[date.twoDaysAgo].countries[
                  country
                ].today_deaths.toLocaleString(),
            },
          },

          comparison: {
            new: {
              confirmed: {
                calc: {
                  yesterday: Math.abs(
                    response.dates[date.yesterday].countries[country]
                      .today_new_confirmed -
                      response.dates[date.twoDaysAgo].countries[country]
                        .today_new_confirmed,
                  ).toLocaleString(),
                  two_days_ago: Math.abs(
                    response.dates[date.twoDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.threeDaysAgo].countries[country]
                        .today_new_confirmed,
                  ).toLocaleString(),
                  three_days_ago: Math.abs(
                    response.dates[date.threeDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.fourDaysAgo].countries[country]
                        .today_new_confirmed,
                  ).toLocaleString(),
                  four_days_ago: Math.abs(
                    response.dates[date.fourDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.fiveDaysAgo].countries[country]
                        .today_new_confirmed,
                  ).toLocaleString(),
                },
                sign: {
                  yesterday: Math.sign(
                    response.dates[date.yesterday].countries[country]
                      .today_new_confirmed -
                      response.dates[date.twoDaysAgo].countries[country]
                        .today_new_confirmed,
                  ),
                  two_days_ago: Math.sign(
                    response.dates[date.twoDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.threeDaysAgo].countries[country]
                        .today_new_confirmed,
                  ),
                  three_days_ago: Math.sign(
                    response.dates[date.threeDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.fourDaysAgo].countries[country]
                        .today_new_confirmed,
                  ),
                  four_days_ago: Math.sign(
                    response.dates[date.fourDaysAgo].countries[country]
                      .today_new_confirmed -
                      response.dates[date.fiveDaysAgo].countries[country]
                        .today_new_confirmed,
                  ),
                },
              },
              deaths: {
                calc: {
                  yesterday: Math.abs(
                    response.dates[date.yesterday].countries[country]
                      .today_new_deaths -
                      response.dates[date.twoDaysAgo].countries[country]
                        .today_new_deaths,
                  ).toLocaleString(),
                  two_days_ago: Math.abs(
                    response.dates[date.twoDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.threeDaysAgo].countries[country]
                        .today_new_deaths,
                  ).toLocaleString(),
                  three_days_ago: Math.abs(
                    response.dates[date.threeDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.fourDaysAgo].countries[country]
                        .today_new_deaths,
                  ).toLocaleString(),
                  four_days_ago: Math.abs(
                    response.dates[date.fourDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.fiveDaysAgo].countries[country]
                        .today_new_deaths,
                  ).toLocaleString(),
                },
                sign: {
                  yesterday: Math.sign(
                    response.dates[date.yesterday].countries[country]
                      .today_new_deaths -
                      response.dates[date.twoDaysAgo].countries[country]
                        .today_new_deaths,
                  ),
                  two_days_ago: Math.sign(
                    response.dates[date.twoDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.threeDaysAgo].countries[country]
                        .today_new_deaths,
                  ),
                  three_days_ago: Math.sign(
                    response.dates[date.threeDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.fourDaysAgo].countries[country]
                        .today_new_deaths,
                  ),
                  four_days_ago: Math.sign(
                    response.dates[date.fourDaysAgo].countries[country]
                      .today_new_deaths -
                      response.dates[date.fiveDaysAgo].countries[country]
                        .today_new_deaths,
                  ),
                },
              },
            },
            acc: {
              new: {
                calc: Math.abs(
                  response.dates[date.yesterday].countries[country]
                    .today_confirmed -
                    response.dates[date.yesterday].countries[country]
                      .yesterday_confirmed,
                ).toLocaleString(),
                sign: Math.sign(
                  response.dates[date.yesterday].countries[country]
                    .today_confirmed -
                    response.dates[date.yesterday].countries[country]
                      .yesterday_confirmed,
                ),
              },
              deaths: {
                calc: Math.abs(
                  response.dates[date.yesterday].countries[country]
                    .today_deaths -
                    response.dates[date.yesterday].countries[country]
                      .yesterday_deaths,
                ).toLocaleString(),
                sign: Math.sign(
                  response.dates[date.yesterday].countries[country]
                    .today_deaths -
                    response.dates[date.yesterday].countries[country]
                      .yesterday_deaths,
                ),
              },
            },
          },
        });
        setIsLoading(false);
      },
    );

    return () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <Header
        color={data.info.country_color.primary}
        countryFlag={data.info.country_flag}
        countryName={data.info.country_name}
      />
      <Accumulation data={data} />
      <WithChart data={data} date={date} />
    </Layout>
  );
};

export default Detail;
