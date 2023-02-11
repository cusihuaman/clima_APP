import useClima from "../hooks/UseClima"
import { useState } from "react";

const Formulario = () => {
    const [alerta,setAlerta]=useState('')
    const {busqueda,datosBusqueda,consultarClima}=useClima()
    const {cuidad,pais}=datosBusqueda;
    const handleSubmit=e=>{
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todo los campos son obligatorios')
            return
        }
        consultarClima(busqueda)
    }
    setTimeout(() => {
        setAlerta()
    }, 3000);
  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p>}
        <form onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor="cuidad">Cuidad</label>
                <input 
                type="text" 
                id='cuidad'
                name='ciudad'
                onChange={datosBusqueda}
                value={cuidad} />
            </div>
            <div className='campo'>
                <label htmlFor="pais">Pais</label>
                <select 
                name="pais" 
                id="pais"
                onChange={datosBusqueda}
                value={pais}
                >
                    <option value="">Seleccione un Pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="PE">Peru</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                </select>
            </div>
            <input type="submit" value='Consultar Clima' />
        </form>
    </div>
  )
}

export default Formulario