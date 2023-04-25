import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Fieldset, Modal } from '@react95/core';

import { DesktopContext } from '../../../../context/DesktopContext';
import type { DesktopContextType } from '../../../../interfaces/desktop';

import { menu } from '../../../../common/constants';
import { Computer3 } from '@react95/icons';

type ProjectProps = {
  translationKey: string;
  title: string;
  icon: string;
  preview?: string;
  previewDir?: string;
  src?: string;
  front?: string;
  back?: string;
};

export const DesktopProjectsProject: React.FC<ProjectProps> = ({
  translationKey,
  title,
  preview,
  previewDir,
  icon,
  src,
  front,
  back,
}) => {
  const { setProjects } = useContext(DesktopContext) as DesktopContextType;
  const { t } = useTranslation();

  const handleClose = () => {
    setProjects((projects: any) => ({ ...projects, [translationKey]: false }));
  };

  const modalButtons = useMemo(() => {
    const btns = [];
    if (src)
      btns.push({
        value: t('actions.source'),
        onClick: () => window.open(src, '_blank'),
      });
    if (front)
      btns.push({
        value: t('actions.front'),
        onClick: () => window.open(front, '_blank'),
      });
    if (back)
      btns.push({
        value: t('actions.back'),
        onClick: () => window.open(back, '_blank'),
      });

    return btns;
  }, [src, front, back, t]);

  return (
    <Modal
      width={preview ? (previewDir === 'vertical' ? '540' : '680') : '320'}
      height={preview ? (previewDir === 'vertical' ? '840' : '680') : '150'}
      title={`${title}.exe`}
      icon={
        icon ? (
          <img src={icon} width={32} style={{ borderRadius: '50%' }} />
        ) : (
          <Computer3 />
        )
      }
      closeModal={handleClose}
      menu={menu(handleClose)}
      buttons={modalButtons}
      defaultPosition={{ x: 260, y: 0 }}
    >
      {!!preview && (
        <Fieldset
          legend={`${t(`projectsModal.projects.${translationKey}.title`)}`}
          style={{ marginBottom: '1rem' }}
        >
          <div>
            <img
              src={preview}
              width={previewDir === 'vertical' ? 480 : 640}
              height={previewDir === 'vertical' ? 640 : 480}
            />
          </div>
        </Fieldset>
      )}

      <Fieldset
        legend={t('actions.about') ?? ''}
        style={{ marginBottom: '.5rem' }}
      >
        {t(`projectsModal.projects.${translationKey}.description`)}
      </Fieldset>
    </Modal>
  );
};
