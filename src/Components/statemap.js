import React from 'react'
import p1 from '../assets/profile.jpg'
import p2 from '../assets/profile2.jpg'


class statemap extends React.Component{

    state={

        data:[
            {
                img:p1,
                name: "Qaiser",
                age: 18,
                country:"Aus",
                class:"Master",
                gender:"male",
                skills:"html, css, jquery, javascript, React",
                type:"Full stack developer",
                profile:"The best developer in town",
                uni:"The university of Sydney"
            }
            ,

            {
                img:p2,
                name: "Nauman",
                age: 24,
                country:"Germany",
                class:"Bachelor",
                gender:"male",
                skills: "html, css, jquery, javascript, React",
                type:"MERN Stack developer",
                profile: "GOOD and great developer",
                uni:"The university of Melbourne"

            }
        ]
    }


    render(){

        let response1 = this.state.data.map((item, index)=>{
            return(
                <div>
                    <img style={{width:"200px", height:"200px", borderRadius:"50%"}} src={item.img}/>
                    <span style={{color:"blue"}}>{item.profile}</span>

                </div>
            )
     
        })  


        return(

            <div>
                {response1}
            </div>
        )
    }

}

export default statemap