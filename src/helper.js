export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const getFormatedDate = (inputeDate) => {
  let result = null;

  if (!inputeDate) return null;

  const date = new Date(inputeDate);
  if (date) {
    result = date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }

  return result;
};
