const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  const isValidContactType = ['personal', 'home', 'work'].includes(contactType);

  if (!isValidContactType) return;

  return contactType;
};

const parseIsFavourite = (isFavourite) => {
  return isFavourite === 'true' ? true : isFavourite === 'false' ? false : null;
};

export const parseFilterParams = ({ type, isFavourite }) => {
  return {
    type: parseContactType(type),
    isFavourite: parseIsFavourite(isFavourite),
  };
};
