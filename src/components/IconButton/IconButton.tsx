import { Tooltip } from '@react95/core';
import styles from './IconButton.module.css';

interface IconButtonProps {
  text?: string | undefined;
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  onClick: () => void;
}

export const IconButton = ({ text, icon, onClick }: IconButtonProps) => {
  const { iconBtn, iconText } = styles;

  return (
    <Tooltip text={text}>
      <div className={iconBtn} onClick={() => onClick()}>
        {icon}
        <span className={iconText}>{text}</span>
      </div>
    </Tooltip>
  );
};
