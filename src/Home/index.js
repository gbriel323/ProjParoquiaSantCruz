import React, { Component } from 'react';
import { View,Text, Image, StyleSheet,Button,TouchableHighlight,Linking,TouchableOpacity} from 'react-native'; 



class Home extends Component{
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  static navigationOptions = {
    
  };

  onPress = () => {
    this.setState({
      
    })
  }

  render(){
    //let iconemenuexemple = 'src/./assets/icone/bell-icon.png'
    let iconemenuexemple = '../../assets/icone/bell-icon.png'
    let iconeparoquia = '../../assets/icone/paroquia01.png'
    let iconecontato = '../../assets/icone/contatos01.png'
    let iconeoracao = '../../assets/icone/oracao01.png'
    let iconeaovivo = '../../assets/icone/aovivo01.png'
    let iconeintensoes = '../../assets/icone/intensoes01.png'
    let iconenoticias = '../../assets/icone/noticias01.png'
    let iconemissas = '../../assets/icone/missa01.png'
    let iconecomunidades = '../../assets/icone/comunidades01.png'
    let iconepastorais = '../../assets/icone/patorais01.png'
    let linkexemple = ''
    return(
      <View style={{flex:1, backgroundColor: '#F2CA52'}}>
          {/* logo principal - Cabeçalho */}
          <View style={{flex:2,flexDirection:"row" }}>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}>
          <Image style={styles.IconesPrincipal} source={require(iconemenuexemple)} />
          </View>
          <View style={{flex:1}}></View>  
          </View>

          {/* Menu Principal - Icones */}
          <View style={{flex:6,flexDirection:"row"}}>
           {/* Coluna Esquerda , backgroundColor: '#F2B749'*/} 
          <View style={{flex:1}}>
          <Image style={styles.IconesMenuPrincipal} source={require(iconeparoquia)} />
          <Text style={styles.TextoMenuPrincipal}>Paróquia</Text>
          <Image style={styles.IconesMenuPrincipal} source={require(iconemenuexemple)} />
          <Text style={styles.TextoMenuPrincipal}>Comunidades</Text>
          <Image style={styles.IconesMenuPrincipal} source={require(iconeintensoes)} />
          <Text style={styles.TextoMenuPrincipal}>Intensões</Text>

          </View>
          {/* Coluna Centro*/}
          <View style={{flex:1,}}>
          <Image style={styles.IconesMenuPrincipal} source={require(iconenoticias)} />
          <Text style={styles.TextoMenuPrincipal}>Notícias</Text>
          <Image style={styles.IconesMenuPrincipal} source={require(iconeoracao)} />
          <Text style={styles.TextoMenuPrincipal}>Orações</Text>
          <Image style={styles.IconesMenuPrincipal} source={require(iconemenuexemple)} />
          <Text style={styles.TextoMenuPrincipal}>Pastorais</Text>

          </View>
          {/* Coluna Direita */}  
          <View style={{flex:1}}>
          <Image style={styles.IconesMenuPrincipal} source={require(iconemissas)} />
          <Text style={styles.TextoMenuPrincipal}>Missas</Text>
          
          <TouchableOpacity  onPress={() => {
          this.props.navigation.navigate('Contatos')          
          }}>
          <Image style={styles.IconesMenuPrincipal} source={require(iconecontato)}/>
          </TouchableOpacity>
          <Text style={styles.TextoMenuPrincipal}>Contatos</Text>
          
          <TouchableOpacity  onPress={() => {
            //on clicking we are going to open the URL using Linking
          Linking.openURL('https://www.youtube.com/channel/UCBES7hq7ioNfiour8HYw_JQ');
            //Linking.openURL('https://www.google.com.br');
          }}>
          <Image style={styles.IconesMenuPrincipal} source={require(iconeaovivo)}/>
          </TouchableOpacity>
          <Text style={styles.TextoMenuPrincipal}>Ao Vivo</Text>
          
          </View>
          </View>

          {/* Rodapé */}
          <View style={{flex:1, }}></View>

      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  IconesPrincipal: {
    height: 150,
    width: 150,
    margin: -10,
    marginTop:10,
  },
  IconesMenuPrincipal: {
    height: 70,
    width: 60,
    margin: 30,
    marginTop: 40,
  },
  TextoMenuPrincipal: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -30,
  }
});