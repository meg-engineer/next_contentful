export const handleDate = (date) => {
  const day = new Date(date);
  const parseDate =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  return parseDate;
};
