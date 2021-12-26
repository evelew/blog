const getFormattedDate = (value) => {
  const date = new Date(value);
  return date.toLocaleDateString("pr-br", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default getFormattedDate;
