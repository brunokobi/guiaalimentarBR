import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import InNatura from './pages/InNatura';
import MinProcessado from './pages/MinProcessado';
import Processado from './pages/Processado';
import UltraProcessado from './pages/UltraProcessado';
import Passo1 from './pages/Passo1';
import Passo2 from './pages/Passo2';
import Passo3 from './pages/Passo3';
import Passo4 from './pages/Passo4';
import Passo5 from './pages/Passo5';
import Passo6 from './pages/Passo6';
import Passo7 from './pages/Passo7';
import Passo8 from './pages/Passo8';
import Passo9 from './pages/Passo9';
import Passo10 from './pages/Passo10';
import Sobre from './pages/Sobre';
import Mais from './pages/Mais';
import LetraA from './pages/LetraA';
import LetraB from './pages/LetraB';
import LetraC from './pages/LetraC';
import LetraD from './pages/LetraD';
import LetraE from './pages/LetraE';
import LetraF from './pages/LetraF';
import LetraG from './pages/LetraG';
import LetraH from './pages/LetraH';
import LetraI from './pages/LetraI';
import LetraL from './pages/LetraL';
import LetraM from './pages/LetraM';
import LetraN from './pages/LetraN';
import LetraO from './pages/LetraO';
import LetraP from './pages/LetraP';
import LetraR from './pages/LetraR';
import LetraS from './pages/LetraS';
import LetraT from './pages/LetraT';
import LetraU from './pages/LetraU';
import LetraV from './pages/LetraV';
import LetraX from './pages/LetraX';
import Teste from './pages/Teste';
import Teste1 from './pages/Teste1';
import Teste2 from './pages/Teste2';
import Teste3 from './pages/Teste3';
import Teste4 from './pages/Teste4';
import Teste5 from './pages/Teste5';
import Teste6 from './pages/Teste6';
import Teste7 from './pages/Teste7';
import Teste8 from './pages/Teste8';
import Teste9 from './pages/Teste9';
import Feedback from './pages/Feedback';
// import Main from './pages/Anime';
// import Menu from './pages/Main';




const Routes = createAppContainer(
    createStackNavigator({
     

       Main:{
           screen: Main,
           navigationOptions:{
             title: 'Guia Alimentar Brasileiro',
             headerTitleAlign:'center',
             headerStyle:{                            
                backgroundColor:'#4fb8ce',
                
            }              
           },
       },

      // Menu:{
      //        screen: Menu,
      //        navigationOptions:{
      //          title: 'Guia Alimentar Brasileiro',
      //          headerTitleAlign:'center',
      //          headerStyle:{                            
      //             backgroundColor:'#4fb8ce',
                  
      //         }              
      //        },
      //    },

      

       InNatura:{
        screen: InNatura,
        navigationOptions:{
          title: 'Alimentos in Natura',
          headerTitleAlign:'center', 
        },
       },

       MinProcessado:{
        screen: MinProcessado,
        navigationOptions:{
          title: 'Alimentos Minimamente Processados',
          headerTitleAlign:'rigth',          
        },
       },

       Processado:{
        screen: Processado,
        navigationOptions:{
          title: 'Alimentos Processados',
          headerTitleAlign:'center',          
        },
       },

       UltraProcessado:{
        screen: UltraProcessado,
        navigationOptions:{
          title: 'Alimentos UltraProcessados',
          headerTitleAlign:'center',          
        },
       },

       Passo1:{
        screen: Passo1,
        navigationOptions:{
          title: '1º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo2:{
        screen: Passo2,
        navigationOptions:{
          title: '2º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo3:{
        screen: Passo3,
        navigationOptions:{
          title: '3º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo4:{
        screen: Passo4,
        navigationOptions:{
          title: '4º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo5:{
        screen: Passo5,
        navigationOptions:{
          title: '5º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo6:{
        screen: Passo6,
        navigationOptions:{
          title: '6º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo7:{
        screen: Passo7,
        navigationOptions:{
          title: '7º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo8:{
        screen: Passo8,
        navigationOptions:{
          title: '8º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo9:{
        screen: Passo9,
        navigationOptions:{
          title: '9º Passo',
          headerTitleAlign:'center', 
        },
       },

       Passo10:{
        screen: Passo10,
        navigationOptions:{
          title: '10º Passo',
          headerTitleAlign:'center', 
        },
       },

       Sobre:{
        screen: Sobre,
        navigationOptions:{
          title: 'Equipe de Desenvolvimento',
          headerTitleAlign:'center', 
        },
       },

       Mais:{
        screen: Mais,
        navigationOptions:{
          title: 'Glossário',
          headerTitleAlign:'center', 
        },
       },

       LetraA:{
        screen: LetraA,
        navigationOptions:{
          title: 'Letra A',
          headerTitleAlign:'center', 
        },
       },

       LetraB:{
        screen: LetraB,
        navigationOptions:{
          title: 'Letra B',
          headerTitleAlign:'center', 
        },
       },

       LetraC:{
        screen: LetraC,
        navigationOptions:{
          title: 'Letra C',
          headerTitleAlign:'center', 
        },
       },

       LetraD:{
        screen: LetraD,
        navigationOptions:{
          title: 'Letra D',
          headerTitleAlign:'center', 
        },
       },

       LetraE:{
        screen: LetraE,
        navigationOptions:{
          title: 'Letra E',
          headerTitleAlign:'center', 
        },
       },

       LetraF:{
        screen: LetraF,
        navigationOptions:{
          title: 'Letra F',
          headerTitleAlign:'center', 
        },
       },

       LetraG:{
        screen: LetraG,
        navigationOptions:{
          title: 'Letra G',
          headerTitleAlign:'center', 
        },
       },

       LetraH:{
        screen: LetraH,
        navigationOptions:{
          title: 'Letra H',
          headerTitleAlign:'center', 
        },
       },

       LetraI:{
        screen: LetraI,
        navigationOptions:{
          title: 'Letra I',
          headerTitleAlign:'center', 
        },
       },

       LetraL:{
        screen: LetraL,
        navigationOptions:{
          title: 'Letra L',
          headerTitleAlign:'center', 
        },
       },

       LetraM:{
        screen: LetraM,
        navigationOptions:{
          title: 'Letra M',
          headerTitleAlign:'center', 
        },
       },

       LetraN:{
        screen: LetraN,
        navigationOptions:{
          title: 'Letra N',
          headerTitleAlign:'center', 
        },
       },

       LetraO:{
        screen: LetraO,
        navigationOptions:{
          title: 'Letra O',
          headerTitleAlign:'center', 
        },
       },

       LetraP:{
        screen: LetraP,
        navigationOptions:{
          title: 'Letra P',
          headerTitleAlign:'center', 
        },
       },

       LetraR:{
        screen: LetraR,
        navigationOptions:{
          title: 'Letra R',
          headerTitleAlign:'center', 
        },
       },

       LetraS:{
        screen: LetraS,
        navigationOptions:{
          title: 'Letra S',
          headerTitleAlign:'center', 
        },
       },

       LetraT:{
        screen: LetraT,
        navigationOptions:{
          title: 'Letra T',
          headerTitleAlign:'center', 
        },
       },

       LetraU:{
        screen: LetraU,
        navigationOptions:{
          title: 'Letra U',
          headerTitleAlign:'center', 
        },
       },

       LetraX:{
        screen: LetraX,
        navigationOptions:{
          title: 'Letra X',
          headerTitleAlign:'center', 
        },
       },

       LetraV:{
        screen: LetraV,
        navigationOptions:{
          title: 'Letra V',
          headerTitleAlign:'center', 
        },
       },

       Teste:{
        screen: Teste,
        navigationOptions:{
          title: 'Teste de Conhecimento do 1º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste1:{
        screen: Teste1,
        navigationOptions:{
          title: 'Teste de Conhecimento do 2º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste2:{
        screen: Teste2,
        navigationOptions:{
          title: 'Teste de Conhecimento do 3º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste3:{
        screen: Teste3,
        navigationOptions:{
          title: 'Teste de Conhecimento do 4º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste4:{
        screen: Teste4,
        navigationOptions:{
          title: 'Teste de Conhecimento do 5º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste5:{
        screen: Teste5,
        navigationOptions:{
          title: 'Teste de Conhecimento do 6º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste6:{
        screen: Teste6,
        navigationOptions:{
          title: 'Teste de Conhecimento do 7º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste7:{
        screen: Teste7,
        navigationOptions:{
          title: 'Teste de Conhecimento do 8º Passo',
          headerTitleAlign:'center', 
        },
       },
       
       Teste8:{
        screen: Teste8,
        navigationOptions:{
          title: 'Teste de Conhecimento do 9º Passo',
          headerTitleAlign:'center', 
        },
       },

       Teste9:{
        screen: Teste9,
        navigationOptions:{
          title: 'Teste de Conhecimento do 10º Passo',
          headerTitleAlign:'center', 
        },
       },

       Feedback:{
        screen: Feedback,
        navigationOptions:{
          title: 'Feedback do Aplicativo',
          headerTitleAlign:'center', 
        },
       },
      
   
    },{
        defaultNavigationOptions:{
            headerTintColor:'#FFF',              
           // headerStatusBarHeight:50,                    
            headerStyle:{                
                backgroundColor:'#4fb8ce',
               
            }
        }
    }
    )
);

export default Routes;



