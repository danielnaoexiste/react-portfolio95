import { List } from '@react95/core';
import type { ModalMenu } from '@react95/core/@types/Modal/Modal';
import { Mail } from '@react95/icons';
import { t } from 'i18next';
import { FaLinkedinIn, FaGithub, FaItchIo } from 'react-icons/fa';

export interface ISocials {
  url?: string;
  name?: string;
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
}

export const socials = [
  {
    name: t('socials.email') ?? 'Email',
    url: 'mailto:contato@dangazzaneo.dev',
    icon: (
      <span style={{ marginRight: '2px' }}>
        <Mail variant="16x16_4" />
      </span>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dangazzaneo/',
    icon: (
      <span style={{ marginRight: '10px' }}>
        <FaLinkedinIn fill="#000e7a" size={16} />
      </span>
    ),
  },
  {
    name: 'Github',
    url: 'https://github.com/danielnaoexiste',
    icon: (
      <span style={{ marginRight: '10px' }}>
        <FaGithub fill="black" size={16} />
      </span>
    ),
  },
  {
    name: 'itch.io',
    url: 'https://bitsdev.itch.io',
    icon: (
      <span style={{ marginRight: '10px' }}>
        <FaItchIo fill="red" size={16} />
      </span>
    ),
  },
] as ISocials[];

export const menu = (callback: () => void): ModalMenu[] => [
  {
    name: t('menu.file'),
    list: (
      <List>
        <List.Item onClick={() => callback()}>{t('menu.exit')}</List.Item>
      </List>
    ),
  },
];
