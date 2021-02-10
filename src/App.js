import React, { Component } from 'react'
import Numeros from './numeros'
import Symbol from "./symbol"
import Equal from "./equal"
import Clear from "./clear"

import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

 class App extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          display:[],
          display2:[],
          symbol:null,
          result:null
       }
       this.handler=this.handler.bind(this)
       this.handleSymbol=this.handleSymbol.bind(this)
       this.handleResult=this.handleResult.bind(this)
       this.handleClear=this.handleClear.bind(this)
       
     }
     
     handler({num}){
      
        this.setState(this.state.symbol==null?
          {display:[...this.state.display, num]}:
         { display2:[...this.state.display2, num]})
        
      }
     handleSymbol({symbol}){
      this.setState({
        symbol:symbol
      })}

      handleResult(){
        let calculate=0
        
        switch (this.state.symbol){
          case "+": calculate=this.state.display.join('')*1+this.state.display2.join('')*1;
          break;
          case "-": calculate=this.state.display.join('')*1-this.state.display2.join('')*1;
          break;
          case "*": calculate=this.state.display.join('')*1*this.state.display2.join('')*1;
          break;
          case "/": calculate=this.state.display.join('')*1/this.state.display2.join('')*1;
          break;
          default:
            break;
        }
        this.setState({
          result:calculate
        })
      }
        handleClear(){
          this.setState({
          display:[],
          display2:[],
          symbol:null,
          result:null
          })
        }
      
    
     
  render() {
    return (
      <div>
      <div className="mx-auto w-25 all m-5">
        <div className="disp">
       <h3>{this.state.display} {this.state.symbol} {this.state.display2}</h3>
       <h2>{this.state.result}</h2>
       </div>
       <div className="content">
        <div className="d-flex justify-content-center ">
      
       <Numeros num={1} handleNum={this.handler}/>
       <Numeros num={2} handleNum={this.handler}/>
       <Numeros num={3} handleNum={this.handler}/>
       </div>
       <div className="d-flex justify-content-center ">
       <Numeros num={4} handleNum={this.handler}/>
       <Numeros num={5} handleNum={this.handler}/>
       <Numeros num={6} handleNum={this.handler}/>
       </div>
       <div className="d-flex justify-content-center ">
       <Numeros num={7} handleNum={this.handler}/>
       <Numeros num={8} handleNum={this.handler}/>
       <Numeros num={9} handleNum={this.handler}/>
       </div>
       <div className="d-flex justify-content-center ">
       <Numeros num={0} handleNum={this.handler}/>
       <Symbol symbol={"+"} handleSymbol={this.handleSymbol}/>
       <Symbol symbol={"-"} handleSymbol={this.handleSymbol}/>
       </div>
       <div className="d-flex justify-content-center ">
       <Symbol symbol={"*"} handleSymbol={this.handleSymbol}/>
       <Symbol symbol={"/"} handleSymbol={this.handleSymbol}/>
       <Clear handleCle={this.handleClear}/>
       </div>
       <div className="d-flex justify-content-center ">
       <Equal handleRes={this.handleResult}/>
       </div>
       </div>
        </div>
        <footer>
        <p>VasiK Kalkulator is a basic App developed in React.js by <span className="span">Lucio Colombo </span></p>
      </footer>
      </div>
    )
  }
}

export default App

