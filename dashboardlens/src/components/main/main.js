import hello from '../../assets/hello.svg'
//import charts//
import './main.css'

const main = () => {
  return (
    <main>
      <div className='main_container'>
        <div className='main__title'>
          <img src={hello} alt='Hello'/>
          <div className='main__greeting'>
            <h1>Olá, Bubu</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>
        <div className='main__card'>
          <div className='card'>
            <i className='fa fa-file-text fa-2x text-lightblue'></i>

          </div>

        </div>
      </div>
    </main>
  )

}


export default main