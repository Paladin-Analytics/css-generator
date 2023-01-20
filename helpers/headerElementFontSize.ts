import { HeaderElement } from "types";

/**
 * Get the relevant font size in 'em' for a given theme font size slider value
 */
export const getTitleFontSize = (element: HeaderElement) => {
  return (4 + element.size + (element.fontSizeOffset || 0)) / 3;
};

/**
 * Get the relevant font size in 'em' for a given theme font size slider value
 */
export const getSubTitleFontSize = (element: HeaderElement) => {
  return (3 + element.size + (element.fontSizeOffset || 0)) / 3;
};

/**
 * Get the relevant font size in 'em' for a given theme font size slider value
 */
export const getChapNumberFontSize = (element: HeaderElement) => {
  return (2 + element.size + (element.fontSizeOffset || 0)) / 3;
};

// /**
//  * Get the font size for theme thumbnail header elements in px
//  */
// export const getThemeThumbnailFontSize = (
//   element: HeaderElement,
// ) => {
//   const fontSize = 10 + element.size / 2;

//   return fontSize;
// };
