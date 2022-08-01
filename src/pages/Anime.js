import React,{useState} from 'react';
import Routes from '../routes'
import Menu from './Main'
import { StyleSheet, Text, View,Image,StatusBar} from 'react-native';


function Anime({navigation}){
  const [mudar,setMudar]=useState(false);

  setTimeout(() => {
    setMudar(true);
  }, 6000);
   if(mudar==false){
     return (
      <>
         <View style={styles.container}>
         <Text style={styles.titulo3}>Você conhece o guia alimentar brasileiro ??</Text>
          <Image source={require('../../assets/prato.gif')} style={styles.logo} />
          <Text style={styles.titulo3}>Veja os 10 passos de uma alimentação saudável</Text>
         </View>
      </>

      );
    }
      else{
        return(
          <>    
          <StatusBar barStyle="light-content" backgroundColor="#4fb8ce"/>
          <Routes />
       
         </>   
        );

      }
    }

    const styles = StyleSheet.create({
        // container: { 
        //   flex:1,        
        //   backgroundColor: '#dcf19b',
        //   alignItems: "center",
        //   justifyContent: "flex-start",                  
        // },
        container1: { 
          flex:1,        
          backgroundColor: '#c6f2fc',
          alignItems: "center",
          justifyContent: "flex-end",                  
        },

        container: {
          flex: 1,
          backgroundColor: '#4fb8ce',
          alignItems: "center",
          justifyContent: "center",         
        },
          titulo:{
            textAlign:'center',
            marginTop:2,         
            fontSize:20,
            fontWeight:'bold', 
            marginLeft:5,
            marginRight:2,
            marginBottom:10,          
            height:'auto',
            width:'auto',
            backgroundColor:'#3b5998',    
            borderRadius:10,
            borderColor:"black",
          borderTopWidth:2,
          borderLeftWidth:2,
          borderRightWidth:5,
          borderBottomWidth:5,
            color:'#fff',
          },

          titulo1:{
            textAlign:'justify',
            marginTop:0,
            fontSize:18,
            marginLeft:5,
            marginRight:2,
            marginBottom:0          
          },
        
        // titulo:{
        //   fontSize:20,
        //   fontWeight:'bold',
        //   marginTop:10,  
        // },
        texto:{
          fontSize:18,
          marginTop:2,
          fontWeight:'bold', 
        },
        texto1:{
          fontSize:14,
          //fontWeight:'bold', 
        },

         container3: {
          flexDirection:'row',
          backgroundColor: '#4fb8ce',
          alignItems: "center",
          justifyContent: "center", 
          height:45,          
        },

        logo: {
          width: 448,
          height: 398,
          paddingLeft:10,
          // marginBottom: 20,
        },
        
         titulo3:{
          fontWeight:'bold', 
            textAlign:'center',
            marginTop:2,
            fontSize:32,
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#fff',          
          },
      });

      

export default Anime;