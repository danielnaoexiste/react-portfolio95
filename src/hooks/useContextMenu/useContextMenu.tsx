import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export const useContextMenu = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setXPos(e.pageX);
      setYPos(e.pageY);
      setShowMenu(true);
    },
    [setXPos, setYPos],
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.addEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  useLayoutEffect(() => {
    if (containerRef?.current) {
      if (xPos + containerRef.current?.offsetWidth > window.innerWidth) {
        setXPos((xPos) => xPos - containerRef.current!.offsetWidth);
      }

      if (yPos + containerRef.current?.offsetHeight > window.innerHeight) {
        setYPos((yPos) => yPos - containerRef.current!.offsetHeight);
      }
    }
  }, [xPos, yPos]);

  return { xPos, yPos, containerRef, showMenu };
};
