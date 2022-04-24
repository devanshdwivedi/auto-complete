import React from "react";
import useActiveElement from "../../hooks/useActiveElement";

export interface AutoCompleteProps {
  suggestions: string[];
  placeHolder?: string;
  ignorecase?: boolean;
  width?: number;
}

export default function AutoComplete(props: AutoCompleteProps) {
  const { suggestions, placeHolder, ignorecase, width } = props;

  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [matching, setMatching] = React.useState<string[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const { activeElement } = useActiveElement();

  React.useEffect(() => {
    if (inputValue) {
      let matchingRegex: RegExp = new RegExp(`${inputValue}`);
      if (ignorecase) {
        matchingRegex = new RegExp(`${inputValue}`, "i");
      }
      const matchingItems = suggestions.filter((item: string) => {
        return matchingRegex.test(item);
      });
      setMatching(matchingItems);
    } else {
      setMatching([]);
    }
    setActiveIndex(null);
  }, [inputValue]);

  const isInputFocused = () => activeElement === inputRef.current;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (matching.length > 0) {
      if (e.key == "ArrowDown") {
        // Down arrow key
        if (activeIndex === null) {
          setActiveIndex(0);
        } else {
          let newActiveIndex = (activeIndex + 1) % matching.length;
          setActiveIndex(newActiveIndex);
        }
      } else if (e.key === "Enter") {
        // Enter key
        if (activeIndex !== null) {
          setInputValue(matching[activeIndex]);
        }
      }
    }
  };

  return (
    <>
      <div style={{ width: `${width || 200}px` }}>
        <input
          ref={inputRef}
          type="text"
          style={{ width: "100%" }}
          onKeyDown={handleKeyDown}
          value={inputValue}
          placeholder={placeHolder || ""}
          onChange={handleInputChange}
        ></input>
        {matching.length > 0 && isInputFocused() && (
          <div
            style={{
              marginTop: "1px",
              border: "1px solid gray",
              width: "100%",
            }}
          >
            {matching.map((item: string, index: number) => {
              return (
                <div
                  style={
                    index === activeIndex ? { backgroundColor: "#d3d3d3" } : {}
                  }
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
