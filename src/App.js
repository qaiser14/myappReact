import React from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Services from './Components/Services'
import main from './Components/main'
import footer from './Components/footer'
import practise from './Components/practise'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Input from './Components/stateInput'
import statemap from './Components/statemap'

class App extends  React.Component{

    state = {
        number:0
    }
    


    render(){
        console.log("hello from render");
        // let number = 0
       let  handleAdd = ()=>{
            console.log("hello from fn");
            this.setState({
                number : this.state.number + 1
            })
                // number++
                // alert("alerting")
                // number2 = this.number
                // console.log(number2);
                // console.log(number);
                // this.forceUpdate()
        }
        return(
            
            <div>
                <h1>hello from qaiser</h1>
                <p>hello from zohaib</p>
                <Input />
                <button onClick={handleAdd}> add </button>
                    <span>{this.state.number}</span>
                <button>Sub</button>

                <Router>
                <Nav />
                <Route path="/nav" component={Nav}  />
                <Route path="/header" component={Header} />
                <Route path="/Services" component={Services}></Route>
                <Route path="/main" component={main}></Route>
                <Route path="/footer" component={footer}></Route>
                <Route path="/practise" component={practise}></Route>
                <Route path="/statemap" component={statemap}></Route>
                </Router> 

            </div>
        )


    }




}


export default App;

