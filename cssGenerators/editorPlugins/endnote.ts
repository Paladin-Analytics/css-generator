export const getEndNoteCss = (themeId: string, footnoteFontSize: number) => {
  return `
    .${themeId} .endnote-link{
      color: inherit;
      text-decoration: none;
      padding-left: 0.2rem;
    }
    .${themeId} .endnotes{
      font-size: ${footnoteFontSize ? footnoteFontSize : 0.9}rem !important;
      padding-top: 1rem !important;
      margin-top: 1rem !important;
      margin-bottom: 2rem !important;
      page-break-inside: avoid;
      break-inside: avoid;
      text-align: left;
    }
    .${themeId} .endnotes-separator{
      height:0.175rem;
      background-color:#000000;
      margin-bottom: 2rem !important;
    }
    .${themeId} .endnote-backlink{
      color: inherit;
      text-decoration: none;
    }
    .${themeId} a{
      text-decoration: none;
      color: inherit;
    }
    
    .${themeId} .endnote-item{
      margin-left: 1.2rem;
    }
    
    .${themeId} .endnote-title{
      padding-top: 1rem
    }
  `;
};
