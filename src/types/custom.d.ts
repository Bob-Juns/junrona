type dataType = {
  id?: string;
  info: {
    country_name: string;
    kor_name?: string;
    country_flag: any;
    country_color: {
      primary: string;
      secondary?: string;
    };
  };
  new: {
    confirmed: {
      yesterday: string;
      two_days_ago: string;
      three_days_ago: string;
      four_days_ago?: string;
      five_days_ago?: string;
      six_days_ago?: string;
      seven_days_ago?: string;
    };
    deaths?: {
      yesterday: string;
      two_days_ago: string;
      three_days_ago: string;
      four_days_ago?: string;
      five_days_ago?: string;
      six_days_ago?: string;
      seven_days_ago?: string;
    };
  };
  acc: {
    new: {
      yesterday: string;
      two_days_ago: string;
    };
    deaths?: {
      yesterday: string;
      two_days_ago: string;
    };
  };

  comparison: {
    new: {
      confirmed: {
        calc: {
          yesterday: string;
          two_days_ago: string;
          three_days_ago?: string;
          four_days_ago?: string;
        };
        sign: {
          yesterday: number;
          two_days_ago: number;
          three_days_ago?: number;
          four_days_ago?: number;
        };
      };
      deaths?: {
        calc: {
          yesterday: string;
          two_days_ago: string;
          three_days_ago?: string;
          four_days_ago?: string;
        };
        sign: {
          yesterday: number;
          two_days_ago: number;
          three_days_ago?: number;
          four_days_ago?: number;
        };
      };
    };
    acc?: {
      new: {
        calc: string;
        sign: number;
      };
      deaths: {
        calc: string;
        sign: number;
      };
    };
  };
};
