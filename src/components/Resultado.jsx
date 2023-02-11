import useClima from "../hooks/UseClima"

const Resultado = () => {
    const {resultado}=useClima()
    const {name,main}=resultado
    const kelvin=273.15
  return (
    <div className="contenedor">
        <h2> El clima de {name} es:</h2>
        <p>Temperatura actual es:{parseInt(main.temp-kelvin)} <span>&#x2103;</span></p>
        <p> minima es:{parseInt(main.temp_min-kelvin)} <span>&#x2103;</span></p>
        <p> maxima es:{parseInt(main.temp_max-kelvin)} <span>&#x2103;</span></p>
    </div>
  )
}

export default Resultado