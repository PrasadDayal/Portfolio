import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-cardBorder text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Prasad Dayal. Designed & Built with ❤️
        {/* ADD YOUR NAME ABOVE */}
      </p>
    </footer>
  );
};

export default Footer;