import React from "react";

export interface AutoCompleteProps {
  suggestions: string[];
  placeHolder?: string;
  ignorecase?: boolean;
}

export default function AutoComplete(props: AutoCompleteProps) {
  const { suggestions, placeHolder, ignorecase } = props;

  const [inputValue, setInputValue] = React.useState<string>("");
  const [matching, setMatching] = React.useState<string[]>([]);

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
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyboardChange = () => {};

  const deriveClosestSuggestion = () => {};

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder={placeHolder || ""}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        {matching.length > 0 &&
          matching.map((item: string) => {
            return <div key={item}>{item}</div>;
          })}
      </div>
    </>
  );
}
