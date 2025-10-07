import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../icons';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerSections = [
    {
      title: 'Categories',
      links: ['Vegetables & Fruits', 'Breakfast & Dairy', 'Meat & Fish', 'Snacks & Sweets', 'Beverages'],
    },
    {
      title: 'Get to know us',
      links: ['About Us', 'Careers', 'Press Releases', 'FreshCart Science'],
    },
    {
      title: 'For Consumers',
      links: ['Payments', 'Shipping', 'Product Returns', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-neutral-400">Your daily dose of freshness, delivered right to your door.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="text-neutral-400 hover:text-brand-green">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to="#" className="text-neutral-400 hover:text-brand-green hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-neutral-700 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} FreshCart. All Rights Reserved. Built by Dualite Alpha.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
