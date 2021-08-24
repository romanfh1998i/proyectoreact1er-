import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <layout title={'Ejemplo de Next.js con Express'}>
     <div className='container'>
      <div className='jumbotron'>
        <h1>Ejemplo de twitter utilizando api de twitter</h1>
        <h2>Siganme en romanfh1998i en instagram </h2>
          <p>Este siendo utilizado por roman </p>
          <div class="row ">
            <div class="col-sm-10">
              <p>HOLA SOY ROMAN </p> 
              </div>
            <div class="col-xs-6 col-sm-8">
              soy programador y tambien soy publicista

            </div>
            <Link href='/busqueda'><a className='btn btn-primary btn-lig'role ='button'>usalo </a></Link>


          </div>
          <h6> creado con amor por roman</h6>
      </div>
     </div>
   </layout>
  )
}
