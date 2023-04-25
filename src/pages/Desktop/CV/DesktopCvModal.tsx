import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Computer3 } from '@react95/icons';
import { Frame, Modal, ProgressBar } from '@react95/core';

import { menu } from '../../../common/constants';
import { DesktopContext } from '../../../context/DesktopContext';
import type { DesktopContextType } from '../../../interfaces/desktop';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import type {
  ToolbarSlot,
  TransformToolbarSlot,
} from '@react-pdf-viewer/toolbar';

export const DesktopCvModal = () => {
  const { setShowCv } = useContext(DesktopContext) as DesktopContextType;
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
    Search: () => <></>,
    Open: () => <></>,
  });

  const { t } = useTranslation();

  return (
    <Modal
      icon={<Computer3 variant="16x16_4" />}
      title={t('cvModal.title')}
      closeModal={() => setShowCv(false)}
      width="720"
      height="750"
      menu={menu(() => setShowCv(false))}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <Frame h="690px" boxShadow="in" fontSize="16px" padding={10}>
          <div
            className="rpv-core__viewer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '4px',
              }}
            >
              <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
            </div>
            <div
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
            >
              <Viewer
                fileUrl={t('cvModal.path') ?? '/CV_EN.pdf'}
                defaultScale={1.1}
                plugins={[toolbarPluginInstance]}
                renderLoader={(percentages: number) => (
                  <div style={{ width: '240px' }}>
                    <ProgressBar
                      width={240}
                      percent={Math.round(percentages)}
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </Frame>
      </Worker>
    </Modal>
  );
};
