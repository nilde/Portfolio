import logo from './logo.svg';
import './App.css';
import { View, StyleSheet } from "react-native";
import WebApp from './components/web/WebApp'
import MobileApp from './components/mobile/MobileApp'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 767 })
    return isMobile ? children : null
  }


  return (

    <div className="App">
      <BrowserRouter>
        <Desktop>
          <WebApp />
        </Desktop>
        <Mobile>
          <MobileApp />

        </Mobile>
      </BrowserRouter>

    </div>
  );
}


var styles = StyleSheet.create({

})


export default App;
