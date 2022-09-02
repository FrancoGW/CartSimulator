import { Component } from "react";
import Producto from './Producto'

const style = { 
    Productos:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }

}
class Productos extends Component{
    render(){
        
        const { Productos , agregarAlCarro} = this.props
        return(
            <div style={style.Productos}>
                {Productos.map(producto =>
                    <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                    />    
                )}
            </div>
        )
    }
}
export default Productos