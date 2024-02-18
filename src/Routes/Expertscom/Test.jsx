import { NavLink } from 'react-router-dom';

const ScrollNavLink = ({ to, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    const element = document.getElementById(to.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavLink to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
};
export default ScrollNavLink