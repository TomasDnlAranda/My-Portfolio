// importamos createGlobalStyle de styledComponents
import { createGlobalStyle } from 'styled-components';

// guardamos en componente todo los estilos que va a tener globalmente
const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
}

`;

export default GlobalStyle;
