import { useState } from 'react'

export function App() {
  const [input1, setinput1] =useState(0);
  const [input2, setinput2] = useState(0);
  const [Resultado, setResultado] = useState(0);

const iMC = ()=>{
setResultado(input1/(input2*input2));
}
 

  return (


    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Calculo de IMC</h1>
      </div>
        
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#">
              <input required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  type="number" onChange={e => setinput1(e.target.value)}  placeholder='Agregar Peso' />

              <input required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" onChange={e => setinput2(e.target.value)}  placeholder='Agregar Altura en metro' />
              
            </form>
            <div>
              <br />
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={iMC}>Calcular</button>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'> Tu IMC es:  { Math.round(Resultado)}</h2>
            </div>


      </div> 
        
        </div>
    </>
     
   
  )
}

export default App

