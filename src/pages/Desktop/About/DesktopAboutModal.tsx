import { useContext } from 'react';

import { Notepad } from '@react95/icons';
import { Avatar, Frame, Modal } from '@react95/core';

import { DesktopContext } from '../../../context/DesktopContext';
import { menu } from '../../../common/constants';

import type { DesktopContextType } from '../../../interfaces/desktop';

import './DesktopAboutModal.module.css';
import { DesktopAboutModalBadges } from './DesktopAboutModalBadges';
import { useTranslation } from 'react-i18next';

export const DesktopAboutModal = () => {
  const { setShowAbout } = useContext(DesktopContext) as DesktopContextType;
  const { t } = useTranslation();

  return (
    <Modal
      icon={<Notepad variant="32x32_4" />}
      title={t('aboutModal.title')}
      closeModal={() => setShowAbout(false)}
      width="600"
      height="500"
      defaultPosition={{ x: 192, y: 192 }}
      menu={menu(() => setShowAbout(false))}
      buttons={[{ value: t('actions.ok'), onClick: () => setShowAbout(false) }]}
    >
      <Frame h="100%" boxShadow="none" fontSize="16px" padding={10}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/40382473?v=4"
            circle
          />
          <h1>{t('aboutModal.greeting')}</h1>
        </div>
        <DesktopAboutModalBadges />
        <p>{t('aboutModal.about1')}</p>
        <p>{t('aboutModal.about2')}</p>
      </Frame>
    </Modal>
  );
};
