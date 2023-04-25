import { RecycleFull } from '@react95/icons';
import { useTranslation } from 'react-i18next';

import styles from './Page.module.css';

export const PageIcons = (): JSX.Element => {
  const { iconContainer } = styles;
  const { t } = useTranslation();

  return (
    <>
      <div className={iconContainer}>
        <RecycleFull variant="32x32_4" />
        <p>{t('icons.bin')}</p>
      </div>
    </>
  );
};
