const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  const isValidContactType = ['personal', 'home', 'work'].includes(contactType);

  if (!isValidContactType) return;

  return contactType;
};

const parseIsFavorite = (isFavorite) => {
  if (typeof isFavorite !== 'boolean') return;
  return isFavorite;
};

export const parseFilterParams = ({ type, isFavorite }) => {
  return {
    type: parseContactType(type),
    isFavorite: parseIsFavorite(isFavorite),
  };
};
