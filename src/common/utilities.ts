export const onKeyDown = (e: any) => {
  const decimal_index = e.target.value.indexOf(".");
  if (decimal_index > -1) {
    var decimals = e.target.value.substring(
      decimal_index,
      e.target.value.length + 1
    );
    if (decimals.length > 2 && e.keyCode !== 8 && e.keyCode !== 9) {
      e.preventDefault();
    }
  }
};
 