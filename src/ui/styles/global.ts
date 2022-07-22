import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Titillium Web', sans-serif;
    src: url('/static/fonts/TitilliumWeb-Light.ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Titillium Web', sans-serif;
    src: url('/static/fonts/TitilliumWeb-Regular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Titillium Web', sans-serif;
    src: url('/static/fonts/TitilliumWeb-SemiBold.ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Titillium Web', sans-serif;
    src: url('/static/fonts/TitilliumWeb-Bold.ttf');
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
  }
`
