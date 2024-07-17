import React from "react";

export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const decimal_index = e.currentTarget.value.indexOf(".");
  if (decimal_index > -1) {
    const decimals = e.currentTarget.value.substring(
      decimal_index,
      e.currentTarget.value.length + 1
    );
    if (decimals.length > 2 && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  }
};
 