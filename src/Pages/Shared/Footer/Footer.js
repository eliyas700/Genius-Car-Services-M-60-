import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>
        <small>Copyright &copy; {year} all rights reserve to :Eliyas</small>
      </p>
    </footer>
  );
};

export default Footer;
