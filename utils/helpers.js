export const apiUrl = "https://buyoncampus.pythonanywhere.com/api";

export const getError = (er) => {
  const msg = er?.response?.data?.message || "An error occured";

  return msg;
};
