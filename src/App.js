import React, { Component } from 'react';
import Header from './Component/UI/Header/Header';
import Input from './Component/UI/Input/Input';
import ipfs from './IPFS/ipfs';
class App extends Component{
  
  state={
    dpHash:null
  }
 
  reader={
    onloadend:()=>{

    }
  }
 

 handleInputOnChange=(event)=>{
let file=  event.target.files[0];
let reader=new window.FileReader();
reader.readAsArrayBuffer(file);
reader.onloadend=()=>{
  console.log(reader.result);

ipfs.files.add(Buffer(reader.result),(error,result)=>{
  if(error){
    console.error(error);
    return;
  }

this.setState({dpHash:result[0].hash});
console.log(result[0].hash);
});

}

 }

  render(){
    console.log(ipfs);
    return(<div>
            <Header dpHash={this.state.dpHash}/>
            
            <Input onChange={this.handleInputOnChange}  />

           </div>);
  }
}


export default App;
