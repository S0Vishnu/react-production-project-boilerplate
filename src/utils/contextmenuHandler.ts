import React, { useState } from "react";

interface HandleDivProps {
  switchesRef: React.RefObject<HTMLDivElement>;
  setMenuLeftPosition: React.Dispatch<React.SetStateAction<number>>;
  setMenuTopPosition: React.Dispatch<React.SetStateAction<number>>;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
// The functional component that handles right-click (contextmenu) events
export default function ContextMenuHandler({
  switchesRef,
  setMenuLeftPosition,
  setMenuTopPosition,
  setMenuVisible,
}: HandleDivProps) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  // Function to handle the contextmenu event when a right-click happens
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const targets = event.target as HTMLElement;
    const isInsideSwitches = switchesRef.current?.contains(
      targets as Node
    );
    const rect = switchesRef.current?.getBoundingClientRect();
    if (!rect) return;

    const totalHeight = rect.height + rect.top;

    const totalWidth = rect.width + rect.left;

    // Calculate the new position for the context menu
    if (isInsideSwitches) {
      const yPosition = event.clientY;
      const xPosition = event.clientX;
      //for top contextmenu handling

      if (
        totalHeight - yPosition > 20 &&
        totalHeight - yPosition < 260
      ) {
        const minTop = yPosition - 110;
        setMenuTopPosition(minTop);
      } else if (
        totalHeight - yPosition >= 260 &&
        yPosition > height - 73
      ) {
        const minTop = yPosition + 115;
        setMenuTopPosition(minTop);
      }

      // for top contextmenu handling
      if (
        totalWidth - xPosition > 500 &&
        totalWidth - xPosition < 900
      ) {
        const minLeft = xPosition + 80;
        setMenuLeftPosition(minLeft);
      } else if (
        totalWidth - xPosition > 10 &&
        totalWidth - xPosition > 150
      ) {
        const minLeft = xPosition + 80;
        setMenuLeftPosition(minLeft);
      } else {
        const minLeft = xPosition - 80;
        setMenuLeftPosition(minLeft);
      }
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  };
  React.useEffect(() => {
    const element = switchesRef.current;

    // Create a resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        // Update the width state with the new width of the element
        const { width, height } = entries[0].contentRect;
        setWidth(width);
        setHeight(height);
      }
    });

    // Start observing the element's width changes
    if (element) {
      resizeObserver.observe(element);
    }

    // Cleanup observer on component unmount
    return () => {
      if (element) {
        resizeObserver.unobserve(element);
        
      }
    };
  }, [height, width]);

  React.useEffect(() => {
    let drag = false;
    let isRightMouseDown = false;

    const handleDown = (event: MouseEvent) => {
      if (event.button === 2) {
        isRightMouseDown = true;
        drag = false;
      }
    }

    const handleUp = (event: MouseEvent) => {
      if (event.button === 2) {
        isRightMouseDown = false;
        if (!drag) {
          handleClick(event);
        }
      };
    }

    const handleMove = (event: MouseEvent) => {
      if (isRightMouseDown) { drag = true; };
    }

    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);
  return null;
}
