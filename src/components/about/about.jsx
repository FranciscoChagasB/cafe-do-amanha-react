import Carousel from "../carousel/carousel"
import style from "./about.module.css"

function About (){
    return(
        <section>
            <div className= {style.contentTexts}>
                <h1>
                Sobre Nós
                </h1>
                <p>
                O Café do Amanhã foi fundado por Nanda e Junior, dois apaixonados por café e pela cidade de Fortaleza.
                Localizado na Avenida Beira Mar, nosso café oferece um refúgio acolhedor onde você pode desfrutar de 
                sabores únicos e de uma vista deslumbrante.
                </p>
                
              
            </div> 
             <Carousel/>
        </section>
    )
}
export default About