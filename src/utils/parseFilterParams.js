const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  const isValidContactType = ['personal', 'home', 'work'].includes(contactType);

  if (!isValidContactType) return;

  return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'boolean') return;
  return isFavourite;
};

export const parseFilterParams = ({ type, isFavourite }) => {
  return {
    type: parseContactType(type),
    isFavourite: parseIsFavourite(isFavourite),
  };
};
