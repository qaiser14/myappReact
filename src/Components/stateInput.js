import React from 'react'
import p1 from '../assets/profile.jpg'
import p2 from '../assets/profile2.jpg'

class Input extends React.Component{



            state={
                data: [

                    {
                        img:p1,
                        name: "qaiser",
                        age: 18,
                        country:"aus",
                        class:"Master",
                        gender:"male",
                        skills:"HTMl,css,js,jquerry",
                        type:"Fulls stack developer ",
                        profile:"kjhfdkahdlkjaflkhslkdhjflkjalksdjalkjflksdjflks",
                        uni:"university of sydney"
                    }

                   ,
                   {
                    img:p2,
                    name: "zohaib",
                    age: 18,
                    country:"aus",
                    class:"Master",
                    gender:"male",
                    skills:"HTMl,css,js,jquerry",
                    type:"Fulls stack developer ",
                    profile:"kjhfdkahdlkjaflkhslkdhjflkjalksdjalkjflksdjflks",
                    uni:"university of sydney"
                },
                {
                    img:p2,
                    name: "zohaib",
                    age: 18,
                    country:"aus",
                    class:"Master",
                    gender:"male",
                    skills:"HTMl,css,js,jquerry",
                    type:"Fulls stack developer ",
                    profile:"kjhfdkahdlkjaflkhslkdhjflkjalksdjalkjflksdjflks",
                    uni:"university of sydney"
                }
                ,
                {
                    img:p2,
                    name: "zohaib",
                    age: 18,
                    country:"aus",
                    class:"Master",
                    gender:"male",
                    skills:"HTMl,css,js,jquerry",
                    type:"Fulls stack developer ",
                    profile:"kjhfdkahdlkjaflkhslkdhjflkjalksdjalkjflksdjflks",
                    uni:"university of sydney"
                }
                ,
                {
                    img:p2,
                    name: "zohaib",
                    age: 18,
                    country:"aus",
                    class:"Master",
                    gender:"male",
                    skills:"HTMl,css,js,jquerry",
                    type:"Fulls stack developer ",
                    profile:"kjhfdkahdlkjaflkhslkdhjflkjalksdjalkjflksdjflks",
                    uni:"university of sydney"
                }
                
                
                ]


            }


    // state={
    //     data: [
    //         {
    //             name:"qaiser",
    //             age:18,
    //             country:"aus"
    //         }
    //         ,
    //         {
    //             name:"Raheem",
    //             age:22,
    //             country:"pk"
    //         }
    //         ,
    //         {
    //             name:"Pardesi",
    //             age:17,
    //             country:"london"
    //         }
            
    //     ]
    // }



    render(){

        let response = this.state.data.map((item,index)=>{
            return(
                <div>
                    <img style={{width:"200px", height:"200px", borderRadius:"50%"}} src={item.img} />
                    <span  style={{color:"red"}} >{item.profile}</span>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                    <p>{item.country}</p>
                    <span>{item.gender}</span>
                </div>
            )
        })
    




        // let response = this.state.data.map((item,index)=>{
        //     return (
        //         <div>
        //             <h1>{item.name}</h1>
        //             {/* <h2>{item.age}</h2>  */}
        //                 <p>{item.country}</p>
        //                            </div>
        //     )
        // })

        console.log(response);
        return(
                <div>
                    <h1>Hello From Input</h1>
                    {response} 
                </div>

        )
    }
}


export default Input