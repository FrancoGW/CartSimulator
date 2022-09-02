import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallerCarro from './DetallerCarro'

const style ={
    carro:{
        backgroundColor:'#359A2C',
        color:'#FFF',
        border:'none',
        padding:'15px',
        borderRadius:'5px',
        cursor:'pointer'
    },
    bubble:{
        position:'relative',
        left:12,
        top:20,
    }
}
class Carro extends Component{
    render(){
        const {carro, esCarroVisible,mostrarCarro} = this.props
        const cantidad = carro.reduce((acc,el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={style.bubble}>
                    {cantidad !== 0? <BubbleAlert value={cantidad}/>
                    :null}
                </span>
                <button onClick={mostrarCarro} style={style.carro}>
                carro

                </button>
                {esCarroVisible? <DetallerCarro carro={carro}/> : null}
               
            </div>
        )
    }
}

export default Carro