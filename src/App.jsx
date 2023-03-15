import { GlobalStyle } from './styles/_resets';
import { variables } from './styles/variables.js';
import { data } from './data';
import styled from 'styled-components';
import Hero from './components/Hero/Hero';

const Main = styled.main`
  height: 100vh;
  background-image: url('./assets/mobile/image-host.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding:3.87rem 1.5rem 5.87rem;
  text-align: center;
  position: relative;
  z-index: 0;

  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${variables.darkBlue};
    opacity: .9;
    filter: brightness(80%);
    position: absolute;
    left:0;
    top:0;
  }

  @media screen and (min-width: 43.75rem) {
    background-color: ${variables.darkBlue};
    background-image: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    padding: 3.87rem 2.5rem 5.87rem;
    &::after{
      background-image: url('./assets/tablet/image-host.jpg');
      background-repeat: no-repeat;
      background-position: top right;
      background-size: 500px;
      opacity: 1;
      filter: none;
    }

    &::before{
      content:'';
      display: block;
      position: absolute;
      background-image: url('./assets/desktop/bg-pattern-dots.svg');
      background-size: contain;
      background-repeat: no-repeat;
      height: 100px;
      width: 230px;
      z-index: 3;
      bottom:0;
      left: 2.5rem;
    }
  }

  @media screen and (min-width:62.5rem) {
    padding: 8.125rem  10.31rem;

    &::after{
      background-image: url('./assets/desktop/image-host.jpg');
      background-size: 900px;
      background-position: top 149px right;
    }
    &::before{
      right:0;
      left:auto;
      bottom:230px;
    }
  }
`

function App() {

  return (
    <Main main>
      <GlobalStyle />
      <Hero props={data}/>
    </Main>
  )
}

export default App;
