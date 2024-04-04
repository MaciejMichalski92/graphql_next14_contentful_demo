interface FooterProps {
  title: string;
  // toDo change to LinkProps[]
  socials: string[];
  description?: string;
  address: string;
}

export const Footer = ({
  address,
  socials,
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
      <div>{socials}</div>
      <div>
        <div>Kontakt</div>
        <div>Galeria</div>
        <div>O dzikich harcach</div>
        <div>O dzikich pedagogach</div>
        <div>Dla dzikich rodziców</div>
      </div>
    </div>
  </footer>
);
