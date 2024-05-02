// toDo add types
export const mapFooter = (data: {
  footer: {
    title: string;
    description: string;
    address: string;
    socialsCollection: { items: any };
    sys: { id: string };
  };
}) => {
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
