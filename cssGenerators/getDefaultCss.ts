export const getDefaultCss = (themeId: string, paragraphSpacing: number): string => {
  return `
      .${themeId} html, .${themeId} body, .${themeId} div, .${themeId} span, .${themeId} applet, .${themeId} object, .${themeId} iframe,
      .${themeId} h1, .${themeId} p, .${themeId} blockquote, .${themeId} pre,
      .${themeId} a, .${themeId} abbr, .${themeId} acronym, .${themeId} address, .${themeId} big, .${themeId} cite, .${themeId} code,
      .${themeId} del, .${themeId} dfn, .${themeId} em, .${themeId} img, .${themeId} ins, .${themeId} kbd, .${themeId} q, .${themeId} s, .${themeId} samp,
      .${themeId} small, .${themeId} strike, .${themeId} strong, .${themeId} tt, .${themeId} var,
      .${themeId} b, .${themeId} u, .${themeId} i, .${themeId} center,
      .${themeId} dl, .${themeId} dt, .${themeId} dd, .${themeId} ol, .${themeId} ul, .${themeId} li,
      .${themeId} fieldset, .${themeId} form, .${themeId} label, .${themeId} legend,
      .${themeId} table, .${themeId} caption, .${themeId} tbody, .${themeId} tfoot, .${themeId} thead, .${themeId} tr, .${themeId} th, .${themeId} td,
      .${themeId} article, .${themeId} aside, .${themeId} canvas, .${themeId} details, .${themeId} embed, 
      .${themeId} figure, .${themeId} figcaption, .${themeId} footer, .${themeId} header, .${themeId} hgroup, 
      .${themeId} menu, .${themeId} nav, .${themeId} output, .${themeId} ruby, .${themeId} section, .${themeId} summary,
      .${themeId} time, .${themeId} mark, .${themeId} audio, .${themeId} video {
        margin: 0;
        margin-block: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
      }
      /* HTML5 display-role reset for older browsers */
      .${themeId} article, .${themeId} aside, .${themeId} details, .${themeId} figcaption, .${themeId} figure, 
      .${themeId} footer, .${themeId} header, .${themeId} hgroup, .${themeId} menu, .${themeId} nav, .${themeId} section {
        display: block;
      }
      .${themeId} body {
        line-height: 1;
      }
      .${themeId} blockquote, .${themeId} q {
        quotes: none;
      }
      .${themeId} blockquote:before, .${themeId} blockquote:after,
      .${themeId} q:before, .${themeId} q:after {
        content: '';
        content: none;
      }
      .${themeId} table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .${themeId} b{
        font-weight: bold;
      }
    
      .${themeId} em, .${themeId} i{
        font-style: italic;
      }

      .${themeId} h1 {
        font-size: 1.3em;
        padding: 0.6em 0em;
      }
  
      .${themeId} ul, .${themeId} ol{
        padding: 0rem 1rem;
        line-height: ${paragraphSpacing};
      }

      .${themeId} ul .reset-padding, .${themeId} ol .reset-padding{
        margin-left: -1rem;
      }
      .${themeId} li{
        padding: 0.2rem 0rem;
      }

    `;
};
