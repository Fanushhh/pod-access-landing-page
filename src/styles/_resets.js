import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
      font-family: 'Chivo', sans-serif;
    }

  * {
  margin: 0;
  }

  html, body {
  height: 100%;

  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  color:white;
  
  }

  img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  }

  input, button, textarea, select {
  font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  }

  #root, #__next {
  isolation: isolate;
  }
  /* chivo-regular - latin */
/* chivo-100 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 100;
  src: url('/public/assets/fonts/chivo-v18-latin-100.eot'); /* IE9 Compat Modes */
  src: url('/public/assets/fonts/chivo-v18-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/assets/fonts/chivo-v18-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-100.woff') format('woff'), /* Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/assets/fonts/chivo-v18-latin-100.svg#Chivo') format('svg'); /* Legacy iOS */
}
/* chivo-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  src: url('/public/assets/fonts/chivo-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: url('/public/assets/fonts/chivo-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/assets/fonts/chivo-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/assets/fonts/chivo-v18-latin-regular.svg#Chivo') format('svg'); /* Legacy iOS */
}
/* chivo-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 700;
  src: url('/public/assets/fonts/chivo-v18-latin-700.eot'); /* IE9 Compat Modes */
  src: url('/public/assets/fonts/chivo-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/assets/fonts/chivo-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/assets/fonts/chivo-v18-latin-700.svg#Chivo') format('svg'); /* Legacy iOS */
}
/* chivo-800 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 800;
  src: url('/public/assets/fonts/chivo-v18-latin-800.eot'); /* IE9 Compat Modes */
  src: url('/public/assets/fonts/chivo-v18-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/assets/fonts/chivo-v18-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/public/assets/fonts/chivo-v18-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/assets/fonts/chivo-v18-latin-800.svg#Chivo') format('svg'); /* Legacy iOS */
}
`;