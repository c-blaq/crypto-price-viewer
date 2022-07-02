import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 text-center p-4 text-gray-400">
      <div>
        <span dangerouslySetInnerHTML={{ __html: "&copy;2022, Babayeju" }} />
      </div>
    </footer>
  );
};

export default Footer;
