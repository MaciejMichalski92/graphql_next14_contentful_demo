export const imageBlockQuery = (id: string) => `{
  imageBlock(id: ${id}) {
    label
    mainText
    smallDescription
    image{
      altText
      image{
        url 
      }
      mobileImage{
        url
      }
    }
    sys {
      id
    }  
  }
}`;
