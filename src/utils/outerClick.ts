import React from "react";

interface OuterClickProps {
  contextClassName: string;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OuterClick({
  contextClassName,
  setMenuVisible,
}: OuterClickProps) {
  const handleClick = (event: MouseEvent) => {
    const targets = event.target as HTMLElement;
    // Check if the click is outside the selectable-dropdown-wrapper
    if (!targets.closest(`.${contextClassName}`)) {
      setMenuVisible(false); // Close the menu by updating the state
    }
  };

  // Add event listener on mount and remove it on unmount
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
