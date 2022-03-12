import React from 'react'

class practise extends React.Component{

        state ={

        number: 0
    }


    render(){

        console.log("hello from render Qaiser");

        let handleAdd = ()=>{
            console.log('hello from fn')
            this.setState({
                number: this.state.number + 1
            })
        } 

        return(

            <div>
            <button onClick={handleAdd}>Add</button>
            <span>{this.state.number}</span>
            </div>
        )   
    }
}

export default practise
