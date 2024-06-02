export const mainPageQuery = `{
  page(id: "2Eu2O8Jy4Btckrk41dz5QG") {
    sys {
      id
    }
    metaData {
      pageTitle
      metaTitle
      metaDescription
      ogTitle
      ogDescription
      ogImage {
        url
        title
      }
    }
    contentCollection {
      items{
        ...on HeaderSection{
          title
          textContent{
            title
            description
          }
          backgroundImage{
            altText
            image{
              url
            }
            mobileImage{
              url
            }
          }
        }
      }
    }
  }
}`;
