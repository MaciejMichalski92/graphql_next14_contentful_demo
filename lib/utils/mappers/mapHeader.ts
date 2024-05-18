// toDo add types
export const mapHeader = (data: {
  __typename: string;
  title: string;
  textContent: {
    __typename: string;
    title: string;
    description: string;
  };
  backgroundImage: {
    __typename: string;
    altText: string;
    image: {
      __typename: string;
      url: string;
    };
    mobileImage: {
      __typename: string;
      url: string;
    };
  };
}) => {
  if (!data) return undefined;

  const {
    backgroundImage: {
      altText,
      image: { url: desktopUrl },
      mobileImage: { url: mobileUrl },
    },
    textContent: { description, title },
  } = data;

  return { description, title, desktopUrl, mobileUrl, altText };
};
