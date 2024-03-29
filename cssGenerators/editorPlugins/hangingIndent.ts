export const getHangingIndentCss = (themeId: string, indentValue: number) => {
    return `
      .${themeId} .hanging{
        line-height: 1.6em;
        text-indent: -${indentValue}cm;
        padding-left: ${indentValue}cm;
        orphans: 3; 
        widows: 3;
      }
    `
  };