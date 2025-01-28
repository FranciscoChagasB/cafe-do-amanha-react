import style from "./Home.module.css"

function Home(){
   return (
      <section className={style.content}>
      <div className={style.textcontent}>
         <h2>
         Cada xícara conta uma história
         </h2> 
         <p>
         Bem-vindo ao Café do Amanhã, onde o aroma do café se mistura com a brisa do mar.
         </p>
      </div>
   </section>
   )
   
   
}
export default Home