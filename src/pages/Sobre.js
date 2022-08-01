import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

function Sobre({navigation}){
    // const githubUsername = navigation.getParam('github_username');
    return (
      <>
         <View style={styles.container2}>
          <Text style={styles.titulo}> Trabalho de Conclusão de Curso </Text>         
          <Text style={styles.texto}> Rafaela Soares Souza Kobi  </Text>
          <Text style={styles.texto}> Acadêmica de Nutrição (UniSales Oficial) </Text>
          <Image source={require('../../assets/rafa.gif')} style={styles.logo1} /> 
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}> Professor Coordenador: </Text>
          <Text style={styles.texto}>Mírian Patrícia Castro Pereira Paixão</Text>
          <Text style={styles.texto}> Professora de Nutrição (UniSales Oficial) </Text>
          <Text>     
          </Text>
        {/* </View>

        <View style={styles.container}>
          <Text style={styles.titulo}> Centro Universitário Salesiano (UniSales) </Text> 
        <Image source={require('../../assets/logo.png')} style={styles.logo2} />   */}     
        </View>


        <View style={styles.container1}>
        <Image source={require('../../assets/bruno.gif')} style={styles.logo3} />         
          <Text style={styles.texto1}>Desenvolvido</Text>
          <Text style={styles.texto1}>Bruno Kobi Valadares de Amorim</Text>
          <Text style={styles.texto1}>Acadêmico de Sistemas de Informação (UniSales Oficial)</Text>
          <Text style={styles.texto1}>Versão 1.0  - 2020 </Text>                   
        </View>

        <View style={styles.container3}>        
         <Text style={styles.titulo3}>   Guia Alimentar Brasileiro</Text>
         <Image source={require('../../assets/Brazil-flag-icon.png')} style={styles.logo} />
         <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
            <Text style={styles.botao2}> Deixe seu Feedback </Text>
         </TouchableOpacity>
      </View>

      </>

      );
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
          backgroundColor: '#c6f2fc',
          alignItems: "center",
          justifyContent: "flex-start", 
          marginTop:-150,        
        },
        container2: {
          flex: 2,
          backgroundColor: '#c6f2fc',
          alignItems: "center",
          justifyContent: "flex-start",         
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
          width: 24,
          height: 24,
          paddingLeft:10,
          // marginBottom: 20,
        },

        logo1: {
          width: 160,
          height: 130,
          marginTop:-2,
          // marginBottom: 20,
        },
        logo3: {
          width: 100,
          height: 90,
          marginTop:-2,
          // marginBottom: 20,
        },
        
         titulo3:{
            textAlign:'justify',
            marginTop:2,
            fontSize:18,
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#fff',          
          },
          botao2:{  
            fontSize:15,
            fontWeight:'bold',
            paddingStart:5,
            paddingTop:5,
            paddingLeft:0,
            paddingRight:0, 
            alignItems: "center",
            justifyContent: "center",   
            height:35,
            width:'auto',
            backgroundColor:'#3b5998',    
            borderRadius:25,
            borderTopWidth:2,
              borderLeftWidth:2,
              borderRightWidth:2,
              borderBottomWidth:5,
            color:'#fff',
            marginTop:10,
            marginRight:8,
            marginLeft:8,
            marginBottom:5, 
          },
      });

      

export default Sobre;