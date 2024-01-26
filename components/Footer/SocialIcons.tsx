import React from 'react';
import { SocialIcon } from '@/types';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const social: SocialIcon[] = [
  {
    name: <FaInstagram />,
    href: 'https://www.instagram.com/sheppard.mariia_photography/',
  },
  { name: <FaWhatsapp />, href: 'https://wa.me/46737222073' },
  { name: <FaTelegramPlane />, href: '#' },
];

const SocialIcons = () => {
  return (
    <ul className="flex justify-center p-12">
      {social.map((item, i) => {
        return (
          <li key={i} className="text-3xl mx-12 cursor-pointer">
            <a target="_blank" href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
