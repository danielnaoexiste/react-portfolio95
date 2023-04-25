import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Joy102 } from '@react95/icons';
import { Frame, Modal } from '@react95/core';

import { menu } from '../../../common/constants';
import { IconButton } from '../../../components/IconButton';
import { DesktopContext } from '../../../context/DesktopContext';
import type { DesktopContextType } from '../../../interfaces/desktop';

import styles from './DesktopGamesModal.module.css';

export const DesktopGamesModal = () => {
  const { setShowGames, setGames } = useContext(
    DesktopContext,
  ) as DesktopContextType;

  const { grid } = styles;
  const { t } = useTranslation();

  return (
    <Modal
      width="250"
      height="260"
      title={t('gamesModal.title')}
      icon={<Joy102 variant="32x32_4" />}
      closeModal={() => setShowGames(false)}
      menu={menu(() => setShowGames(false))}
    >
      <Frame bg="#fff" h="100%" boxShadow="in" fontSize="16px" padding={10}>
        <div className={grid}>
          <IconButton
            icon={
              <img
                src={t('gamesModal.games.cavescape.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%', border: '1px solid black' }}
              />
            }
            text={t('gamesModal.games.cavescape.title') ?? ''}
            onClick={() =>
              setGames((games: any) => ({ ...games, cavescape: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t('gamesModal.games.awaken.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('gamesModal.games.awaken.title') ?? ''}
            onClick={() =>
              setGames((games: any) => ({ ...games, awaken: true }))
            }
          />

          <IconButton
            icon={
              <img
                src={t('gamesModal.games.torrato.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('gamesModal.games.torrato.title') ?? ''}
            onClick={() =>
              setGames((games: any) => ({ ...games, torrato: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t('gamesModal.games.spacial.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('gamesModal.games.spacial.title') ?? ''}
            onClick={() =>
              setGames((games: any) => ({ ...games, spacial: true }))
            }
          />
        </div>
      </Frame>
    </Modal>
  );
};
