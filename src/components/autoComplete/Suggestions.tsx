import React from "react";

export interface SuggestionsProps {
  suggestions: string[];
}

export default function Suggestions({ suggestions }: SuggestionsProps) {
  return (
    <>
      {suggestions.map((suggestion) => {
        <div>{suggestion}</div>;
      })}
    </>
  );
}
