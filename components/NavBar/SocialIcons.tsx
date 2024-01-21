import React from 'react';
import { SocialIcon } from '@/types';
import { SiGmail } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const social: SocialIcon[] = [
  { name: <SiGmail /> },
  { name: <FaInstagram /> },
  { name: <FaWhatsapp /> },
  { name: <FaTelegramPlane /> },
];

const SocialIcons = () => {
  return (
    <ul className="flex">
      {social.map((item, i) => {
        return <li key={i}>{item.name}</li>;
      })}
    </ul>
  );
};

export default SocialIcons;
