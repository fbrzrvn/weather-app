import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #56CCF2;
    background: -webkit-linear-gradient(to top, #2F80ED, #56CCF2);
    background: linear-gradient(to top, #2F80ED, #56CCF2);
  }

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    display: block;
    height: auto;
    max-height: 150px;
    width: auto;
    max-width: 150px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1080px;
    margin: auto;
  }

  .app-title {
    margin-bottom: 1.5rem;
    color: #fff;
    text-align: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    .container {
      padding: 2rem 1rem;
    }
  }
`;

export default GlobalStyle;
