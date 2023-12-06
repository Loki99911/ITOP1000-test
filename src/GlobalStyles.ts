import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  height: 100vh;
  font-family:"Noto Sans", sans-serif;
}

img {
  display: block;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-family: Oswald;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

ul,ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}
`;
