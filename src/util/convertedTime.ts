const convertedTime = (UTCTime: string) => {
  const UTC = new Date(UTCTime?.slice(0, 16).replace(/\s/, 'T'));

  const year = UTC.getFullYear();
  const month = ('0' + (1 + UTC.getMonth())).slice(-2);
  const day = ('0' + UTC.getDate()).slice(-2);
  const hour = ('0' + (UTC.getHours() + 9)).slice(-2);
  const minutes = ('0' + UTC.getMinutes()).slice(-2);

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
};

export default convertedTime;
