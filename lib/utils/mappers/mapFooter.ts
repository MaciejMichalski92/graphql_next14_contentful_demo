// toDo add types
export const mapFooter = (data) => {
  const {
    footer: {
      title,
      description,
      address,
      socialsCollection: { items },
      sys: { id },
    },
  } = data;

  return {
    socialItems: items,
    title,
    description,
    address,
    id,
  };
};
