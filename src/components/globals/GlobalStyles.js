import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  body {
    color: red;
    font-family: 'Lato', sans-serif;
  }
`

export default Globals;