import React from "react";

export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const decimal_index = e.currentTarget.value.indexOf(".");
  if (decimal_index > -1) {
    const decimals = e.currentTarget.value.substring(
      decimal_index,
      e.currentTarget.value.length + 1
    );
    if (decimals.length > 2 && e.keyCode !== 8 && e.keyCode !== 9) {
      e.preventDefault();
    }
  }
};
 