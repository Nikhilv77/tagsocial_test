import { createGlobalStyle } from "styled-components";
import '@fontsource/kaushan-script'
import '@fontsource/sirin-stencil'


const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6{
margin: 0;
padding: 0;
}
body{
  font-family: 'Sirin Stencil';
  overflow-x: hidden;
}
section {
  border: 1px solid transparent;
}
a{
  color: inherit;
  text-decoration: none;
}
::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #181818;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`
export default GlobalStyles