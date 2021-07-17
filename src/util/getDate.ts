const getDate = (arg: number) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + (date.getDate() + arg)).slice(-2);

  return year + '-' + month + '-' + day;
};

export default getDate;
