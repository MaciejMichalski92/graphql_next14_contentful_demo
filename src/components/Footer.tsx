interface FooterProps {
  title: string;
  // toDo change to LinkProps[]
  socialItems: any[];
  description?: string;
  address: string;
}

export const Footer = ({
  address,
  socialItems,
  title,
  description,
}: FooterProps) => (
  <footer>
    <div>
      <div>{title}</div>
      {description && <div>{description}</div>}
      {<div>{address}</div>}
    </div>

    <div>
      {socialItems?.map((item) => (
        <a key={item.title} href={item.url}>
          {item.title}
        </a>
      ))}
    </div>
  </footer>
);
