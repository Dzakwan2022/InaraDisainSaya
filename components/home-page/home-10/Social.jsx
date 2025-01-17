const socialIcons = [
  {
    iconClass: "fab fa-instagram",
    link: "#",
  },
  {
    iconClass: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/company/gunung-mas-inovasi/",
  },
];

const Social = () => {
  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.map((icon, index) => (
        <li key={index}>
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <i className={icon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
