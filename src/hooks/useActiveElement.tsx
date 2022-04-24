import React from "react";

const useActiveElement = () => {
  const [activeElement, setActiveElement] = React.useState(
    document.activeElement
  );

  React.useEffect(() => {
    const onFocus = (event: any) => setActiveElement(event.target);
    const onBlur = (event: any) => setActiveElement(null);

    window.addEventListener("focus", onFocus, true);
    window.addEventListener("blur", onBlur, true);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return {
    activeElement,
  };
};

export default useActiveElement;
