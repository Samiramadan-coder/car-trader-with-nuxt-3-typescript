export const useUtilities = () => {
  const toTitleCase = (str: string | string[]): void | string => {
    if (!Array.isArray(str)) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  };

  return {
    toTitleCase,
  };
};
