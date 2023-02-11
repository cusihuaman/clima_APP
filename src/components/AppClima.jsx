import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/UseClima"
import Louding from "./Louding"

const AppClima = () => {
  const {resultado,cargando,closed}=useClima()
  return (
    <>
    <main className="dos-columnas">
        <Formulario/>
        {cargando ? <Louding/>:
        resultado?.name ? <Resultado/>:closed?<p>{closed}</p>:<p>El clima se va mostrar aqui</p>}
    </main>
    </>
  )
}

export default AppClima