import React from 'react';
//import { Image, Text, View ,StatusBar} from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
//import Routes from './src/routes';
import Anime from './src/pages/Anime'

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <>
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
       
        </>
      ); }
  else{
    return (
          <> 
    {/* <StatusBar barStyle="light-content" backgroundColor="#4fb8ce"/> */}
   {/* <Routes />    */}
   <Anime />
    </>
    );}
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/splash.png'),
      require('./assets/anun.jpg'),
      require('./assets/anun1.jpg'),
      require('./assets/batata.jpg'),
      require('./assets/biscoito.jpg'),
      require('./assets/Brazil-flag-icon.png'),
      require('./assets/chips.jpg'),
      require('./assets/chocolate.jpg'),
      require('./assets/conge.jpg'),
      require('./assets/conge1.jpg'),
      require('./assets/conservas.jpg'),
      require('./assets/cozinhar.jpg'),
      require('./assets/cozinhar1.jpg'),
      require('./assets/despz.jpg'),
      require('./assets/despz1.jpg'),
      require('./assets/dispe.jpg'),
      require('./assets/dispe1.jpg'),
      require('./assets/farinhas.jpg'),
      require('./assets/feira.jpeg'),
      require('./assets/feira1.jpeg'),
      require('./assets/frutas-e-verduras.jpg'),
      require('./assets/frutas.jpg'),
      require('./assets/graos.jpg'),
      require('./assets/icon.png'),
      require('./assets/innatura.jpg'),
      require('./assets/janta.jpg'),
      require('./assets/janta1.jpg'),
      require('./assets/lanche.jpg'),
      require('./assets/leite.jpg'),
      require('./assets/mc.jpg'),
      require('./assets/minpro.jpg'),
      require('./assets/miojo.jpg'),
      require('./assets/nuggets.jpg'),
      require('./assets/obe.jpg'),
      require('./assets/oleo.jpg'),
      require('./assets/pao.jpg'),
      require('./assets/pro.jpg'),
      require('./assets/prog.jpg'),
      require('./assets/prog1.jpg'),
      require('./assets/queijo.jpg'),
      require('./assets/raizes.jpg'),
      require('./assets/refrigerante.jpg'),
      require('./assets/rest.jpg'),
      require('./assets/rest1.jpg'),
      require('./assets/sal.jpg'),
      require('./assets/super.jpg'),
      require('./assets/super1.jpg'),
      require('./assets/ultra.jpg'),
      require('./assets/verduras.jpg'),
      require('./assets/prato.gif'),
      require('./assets/band1.gif'),
      require('./assets/band2.gif'),
      require('./assets/band3.gif'),
      require('./assets/band4.gif'),
      require('./assets/rafa.gif'),
      require('./assets/bruno.gif'),
      require('./assets/logo.png')
           
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
}


// import React from 'react';
// import {StatusBar,View, Text} from 'react-native';
// import Routes from './src/routes';


// export default function App() { 

//   return (
//     <>    
//     <StatusBar barStyle="light-content" backgroundColor="#4fb8ce"/>
//    <Routes />   
//    </>
//   );
// }

