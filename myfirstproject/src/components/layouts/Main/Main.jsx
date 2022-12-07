import React from 'react'
import { Cube } from '../../ui/Cube/Cube'
import { SubTitle } from '../../ui/SubTitle/SubTitle'
import javaimg from '../../../images/java.png'
import pythonimg from '../../../images/python.png'
import jsimg from '../../../images/js.png'
import php from '../../../images/php.png'
import html5 from '../../../images/html5.png'
import cImg from '../../../images/c.png'
import kotlin from '../../../images/kotlin.png'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <main>
      
        <SubTitle styleclass="title2" SubTitle = "Languages In The World Of Programming"/>
        <div className='cont-cards'>
        <Link className='Ancla1' to="/ContactUs" rel="stylesheet" href="" > <Cube text="Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems." styleclass={javaimg}/> 
</Link>



          <Cube text="Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código" styleclass={pythonimg}/> 
          <Cube text="JavaScript es un lenguaje de programación interpretado, Se define como orientado a objetos,basado en prototipos, imperativo, débilmente tipado y dinámico" styleclass={jsimg}/> 
          <Cube text="PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web." styleclass={php}/> 
          <Cube text="El HTML5 es un lenguaje de etiquetas, utilizado para la estructuración y la presentación de contenido en los sitios web." styleclass={html5}/> 
          <Cube text="C# es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma " styleclass={cImg}/> 
          <Cube text="Kotlin es un lenguaje de programación de tipado estático que corre sobre la máquina virtual de Java y también puede ser compilado a código fuente de JavaScript." styleclass={kotlin}/> 
        </div>
    </main>
  )
}