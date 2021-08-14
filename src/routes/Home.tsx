import React, { useState, useEffect } from 'react';

//api
import axios from 'axios';
import { getApiByCountry } from '../api/data';

// util
import getDate from '@util/getDate';
import convertedTime from '@util/convertedTime';

// styles
import { color } from '@styles/SharedStyle';

// components
import Layout from '@components/Shared/Layout';
import Nav from '@components/Home/Nav';
import Summary from '@components/Home/Summary';
import Daily from '@components/Home/Daily';
import Loading from '@components/Shared/Loading';
import Flag from '@components/Shared/Flags';

type dateType = {
  yesterday: string;
  twoDaysAgo: string;
  threeDaysAgo: string;
};

const Home = () => {
  const [date, setDate] = useState<dateType>({
    yesterday: getDate(-1),
    twoDaysAgo: getDate(-2),
    threeDaysAgo: getDate(-3),
  });

  const [data, setData] = useState<dataType[]>([
    {
      id: 'vietnam',
      info: {
        country_name: 'vietnam',
        kor_name: '베트남',
        country_flag: Flag('vietnam'),
        country_color: {
          primary: color.country.vietnam.primary,
          secondary: color.country.vietnam.secondary,
        },
      },
      new: {
        confirmed: {
          yesterday: '',
          two_days_ago: '',
          three_days_ago: '',
        },
      },
      acc: {
        new: {
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
            },
            sign: {
              yesterday: 0,
              two_days_ago: 0,
            },
          },
        },
      },
    },
    {
      id: 'indonesia',
      info: {
        country_name: 'indonesia',
        kor_name: '인도네시아',
        country_flag: Flag('indonesia'),
        country_color: {
          primary: color.country.indonesia.primary,
          secondary: color.country.indonesia.secondary,
        },
      },
      new: {
        confirmed: {
          yesterday: '',
          two_days_ago: '',
          three_days_ago: '',
        },
      },
      acc: {
        new: {
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
            },
            sign: {
              yesterday: 0,
              two_days_ago: 0,
            },
          },
        },
      },
    },
    {
      id: 'united-state',
      info: {
        country_name: 'united state',
        kor_name: '미국',
        country_flag: Flag('united-state'),
        country_color: {
          primary: color.country.unitedState.primary,
          secondary: color.country.unitedState.secondary,
        },
      },
      new: {
        confirmed: {
          yesterday: '',
          two_days_ago: '',
          three_days_ago: '',
        },
      },
      acc: {
        new: {
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
            },
            sign: {
              yesterday: 0,
              two_days_ago: 0,
            },
          },
        },
      },
    },
  ]);

  const [updatedAt, setUpdatedAt] = useState<string | ''>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const vietnamData = getApiByCountry(
      'vietnam',
      date.threeDaysAgo,
      date.yesterday,
    );
    const indonesiaData = getApiByCountry(
      'indonesia',
      date.threeDaysAgo,
      date.yesterday,
    );

    const unitedStateData = getApiByCountry(
      'us',
      date.threeDaysAgo,
      date.yesterday,
    );

    axios.all([vietnamData, indonesiaData, unitedStateData]).then(
      axios.spread((...responses) => {
        setUpdatedAt(convertedTime(responses[0].updated_at));
        setData([
          {
            ...data[0],
            new: {
              confirmed: {
                yesterday:
                  responses[0].dates[
                    date.yesterday
                  ].countries.Vietnam.today_new_confirmed.toLocaleString(),
                two_days_ago:
                  responses[0].dates[
                    date.twoDaysAgo
                  ].countries.Vietnam.today_new_confirmed.toLocaleString(),
                three_days_ago:
                  responses[0].dates[
                    date.threeDaysAgo
                  ].countries.Vietnam.today_new_confirmed.toLocaleString(),
              },
            },
            acc: {
              new: {
                yesterday:
                  responses[0].dates[
                    date.yesterday
                  ].countries.Vietnam.today_confirmed.toLocaleString(),
                two_days_ago:
                  responses[0].dates[
                    date.yesterday
                  ].countries.Vietnam.yesterday_confirmed.toLocaleString(),
              },
            },
            comparison: {
              new: {
                confirmed: {
                  calc: {
                    yesterday: Math.abs(
                      responses[0].dates[date.yesterday].countries.Vietnam
                        .today_new_confirmed -
                        responses[0].dates[date.twoDaysAgo].countries.Vietnam
                          .today_new_confirmed,
                    ).toLocaleString(),
                    two_days_ago: Math.abs(
                      responses[0].dates[date.twoDaysAgo].countries.Vietnam
                        .today_new_confirmed -
                        responses[0].dates[date.threeDaysAgo].countries.Vietnam
                          .today_new_confirmed,
                    ).toLocaleString(),
                  },
                  sign: {
                    yesterday: Math.sign(
                      responses[0].dates[date.yesterday].countries.Vietnam
                        .today_new_confirmed -
                        responses[0].dates[date.twoDaysAgo].countries.Vietnam
                          .today_new_confirmed,
                    ),
                    two_days_ago: Math.sign(
                      responses[0].dates[date.twoDaysAgo].countries.Vietnam
                        .today_new_confirmed -
                        responses[0].dates[date.threeDaysAgo].countries.Vietnam
                          .today_new_confirmed,
                    ),
                  },
                },
              },
            },
          },
          {
            ...data[1],
            new: {
              confirmed: {
                yesterday:
                  responses[1].dates[
                    date.yesterday
                  ].countries.Indonesia.today_new_confirmed.toLocaleString(),
                two_days_ago:
                  responses[1].dates[
                    date.twoDaysAgo
                  ].countries.Indonesia.today_new_confirmed.toLocaleString(),
                three_days_ago:
                  responses[1].dates[
                    date.threeDaysAgo
                  ].countries.Indonesia.today_new_confirmed.toLocaleString(),
              },
            },
            acc: {
              new: {
                yesterday:
                  responses[1].dates[
                    date.yesterday
                  ].countries.Indonesia.today_confirmed.toLocaleString(),
                two_days_ago:
                  responses[1].dates[
                    date.yesterday
                  ].countries.Indonesia.yesterday_confirmed.toLocaleString(),
              },
            },
            comparison: {
              new: {
                confirmed: {
                  calc: {
                    yesterday: Math.abs(
                      responses[1].dates[date.yesterday].countries.Indonesia
                        .today_new_confirmed -
                        responses[1].dates[date.twoDaysAgo].countries.Indonesia
                          .today_new_confirmed,
                    ).toLocaleString(),
                    two_days_ago: Math.abs(
                      responses[1].dates[date.twoDaysAgo].countries.Indonesia
                        .today_new_confirmed -
                        responses[1].dates[date.threeDaysAgo].countries
                          .Indonesia.today_new_confirmed,
                    ).toLocaleString(),
                  },
                  sign: {
                    yesterday: Math.sign(
                      responses[1].dates[date.yesterday].countries.Indonesia
                        .today_new_confirmed -
                        responses[1].dates[date.twoDaysAgo].countries.Indonesia
                          .today_new_confirmed,
                    ),
                    two_days_ago: Math.sign(
                      responses[1].dates[date.twoDaysAgo].countries.Indonesia
                        .today_new_confirmed -
                        responses[1].dates[date.threeDaysAgo].countries
                          .Indonesia.today_new_confirmed,
                    ),
                  },
                },
              },
            },
          },
          {
            ...data[2],
            new: {
              confirmed: {
                yesterday:
                  responses[2].dates[
                    date.yesterday
                  ].countries.US.today_new_confirmed.toLocaleString(),
                two_days_ago:
                  responses[2].dates[
                    date.twoDaysAgo
                  ].countries.US.today_new_confirmed.toLocaleString(),
                three_days_ago:
                  responses[2].dates[
                    date.threeDaysAgo
                  ].countries.US.today_new_confirmed.toLocaleString(),
              },
            },
            acc: {
              new: {
                yesterday:
                  responses[2].dates[
                    date.yesterday
                  ].countries.US.today_confirmed.toLocaleString(),
                two_days_ago:
                  responses[2].dates[
                    date.yesterday
                  ].countries.US.yesterday_confirmed.toLocaleString(),
              },
            },
            comparison: {
              new: {
                confirmed: {
                  calc: {
                    yesterday: Math.abs(
                      responses[2].dates[date.yesterday].countries.US
                        .today_new_confirmed -
                        responses[2].dates[date.twoDaysAgo].countries.US
                          .today_new_confirmed,
                    ).toLocaleString(),
                    two_days_ago: Math.abs(
                      responses[2].dates[date.twoDaysAgo].countries.US
                        .today_new_confirmed -
                        responses[2].dates[date.threeDaysAgo].countries.US
                          .today_new_confirmed,
                    ).toLocaleString(),
                  },
                  sign: {
                    yesterday: Math.sign(
                      responses[2].dates[date.yesterday].countries.US
                        .today_new_confirmed -
                        responses[2].dates[date.twoDaysAgo].countries.US
                          .today_new_confirmed,
                    ),
                    two_days_ago: Math.sign(
                      responses[2].dates[date.twoDaysAgo].countries.US
                        .today_new_confirmed -
                        responses[2].dates[date.threeDaysAgo].countries.US
                          .today_new_confirmed,
                    ),
                  },
                },
              },
            },
          },
        ]);
        setIsLoading(false);
      }),
    );
    return () => setIsLoading(false);
  }, []);

  const onClickRefresh = (): void => {
    window.location.reload();
  };

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <Nav updatedAt={updatedAt} />
      <Summary data={data} onClick={onClickRefresh} />
      <Daily data={data} />
    </Layout>
  );
};

export default Home;
