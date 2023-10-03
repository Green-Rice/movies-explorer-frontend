export const getMovieDuration = (duration) => {
  const hour = (duration / 60).toFixed(0);
  const minute = duration % 60;

  return `${hour}ч ${minute < 10 ? '0' + minute : minute}м`;
};
