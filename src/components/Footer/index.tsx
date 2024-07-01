
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterText } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Your Company. All rights reserved.</FooterText>
      <ul className="-m-5 flex flex-wrap items-center">
        <li className="p-5">
          <Link to="/about" className="font-medium text-gray-600 hover:text-gray-700">
            About
          </Link>
        </li>
        <li className="p-5">
          <Link to="/terms-of-use" className="font-medium text-gray-600 hover:text-gray-700">
            Premium
          </Link>
        </li>
        <li className="p-5">
          <Link to="/*" className="font-medium text-gray-600 hover:text-gray-700">
            Invite
          </Link>
        </li>
        <li className="p-5">
          <Link to="/contact" className="font-medium text-gray-600 hover:text-gray-700">
            Support
          </Link>
        </li>
        <li className="p-5">
          <Link to="/terms-of-use" className="font-medium text-gray-600 hover:text-gray-700">
            T&C
          </Link>
        </li>
        <li className="p-5">
          <Link to="/privacy-policy" className="font-medium text-gray-600 hover:text-gray-700">
            Privacy Policy
          </Link>
        </li>
        <li className="p-5">
          <Link to="/refund-policy" className="font-medium text-gray-600 hover:text-gray-700">
            Refund Policy
          </Link>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;