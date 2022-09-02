import { Component } from "react";
const style ={
    logo:{
        fontWeight:'700',
        fontSize: '2rem'
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={style.logo}>
                The Verduleria
            </div>
        )
    }
}

export default Logo