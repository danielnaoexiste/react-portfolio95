import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown, Fieldset, Frame, Modal } from '@react95/core';
import { Settings } from '@react95/icons';

import { DesktopContext } from '../../../context/DesktopContext';
import type { DesktopContextType } from '../../../interfaces/desktop';
import i18n from '../../../i18n';

export const DesktopSettingsModal = () => {
  const { setShowSettings, theme, setTheme } = useContext(
    DesktopContext,
  ) as DesktopContextType;

  const { t } = useTranslation();

  const options = [
    'azureOrange',
    'bee',
    'blackAndWhite',
    'brick',
    'candy',
    'coldGray',
    'counterStrike',
    'eggplant',
    'highContrast',
    'lilac',
    'lilacRoseDark',
    'maple',
    'marine',
    'matrix',
    'millenium',
    'modernDark',
    'molecule',
    'ninjaTurtles',
    'olive',
    'pamelaAnderson',
    'plum',
    'rainyDay',
    'rose',
    'slate',
    'spruce',
    'storm',
    'theSixtiesUSA',
    'tokyoDark',
    'tooSexy',
    'travel',
    'vaporTeal',
    'vermillion',
    'violetDark',
    'water',
    'win95',
  ];

  return (
    <Modal
      width="260"
      height="240"
      title={t('settingsModal.title')}
      defaultPosition={{ x: 800, y: 192 }}
      icon={<Settings variant="32x32_4" />}
      closeModal={() => setShowSettings(false)}
      buttons={[
        { value: t('actions.ok'), onClick: () => setShowSettings(false) },
      ]}
    >
      <Frame h="100%" boxShadow="none" padding={2}>
        <Fieldset
          legend={t('settingsModal.display') ?? ''}
          style={{ paddingTop: '.5rem' }}
        >
          <div style={{ marginBottom: '.5rem' }}>
            {t('settingsModal.scheme')}
          </div>
          <Dropdown
            options={options}
            onChange={(e) => setTheme((e.target as HTMLInputElement).value)}
            defaultValue={theme}
          />

          <div style={{ marginTop: '1rem', marginBottom: '.5rem' }}>
            {t('settingsModal.language')}
          </div>
          <Dropdown
            options={['pt-BR', 'en-US']}
            onChange={(e) =>
              i18n.changeLanguage((e.target as HTMLInputElement).value)
            }
            defaultValue={i18n.language}
          />
        </Fieldset>
      </Frame>
    </Modal>
  );
};
