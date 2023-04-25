import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Frame, Modal } from '@react95/core';
import { Computer3, Progman1 } from '@react95/icons';

import { DesktopContext } from '../../../context/DesktopContext';
import type { DesktopContextType } from '../../../interfaces/desktop';
import { menu } from '../../../common/constants';

import styles from './DesktopProjectsModal.module.css';
import { IconButton } from '../../../components/IconButton';

export const DesktopProjectsModal = () => {
  const { setShowProjects, setProjects } = useContext(
    DesktopContext,
  ) as DesktopContextType;
  const { t } = useTranslation();

  const { grid } = styles;

  return (
    <Modal
      width="250"
      height="260"
      title={t('projectsModal.title')}
      icon={<Progman1 variant="32x32_4" />}
      closeModal={() => setShowProjects(false)}
      menu={menu(() => setShowProjects(false))}
    >
      <Frame bg="#fff" h="100%" boxShadow="in" fontSize="16px" padding={10}>
        <div className={grid}>
          <IconButton
            icon={
              <img
                src={t('projectsModal.projects.froggy.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('projectsModal.projects.froggy.title') ?? ''}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, froggy: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t('projectsModal.projects.surigu.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('projectsModal.projects.surigu.title') ?? ''}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, surigu: true }))
            }
          />
          <IconButton
            icon={<Computer3 />}
            text={t('projectsModal.projects.yeop.title') ?? ''}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, yeop: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t('projectsModal.projects.beeper.icon') ?? ''}
                width={32}
                style={{ borderRadius: '50%' }}
              />
            }
            text={t('projectsModal.projects.beeper.title') ?? ''}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, beeper: true }))
            }
          />
        </div>
      </Frame>
    </Modal>
  );
};
