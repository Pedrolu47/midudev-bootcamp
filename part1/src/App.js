/* import logo from './logo.svg';
 */
import './App.css';
import  Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es la app del curso Fullstack bootcamp</p>
}
const App = () => {
  return (
    <div className="App">
      <Mensaje color = 'red' message = 'Hola como estamos' />
      <Mensaje color = 'green' message = 'En un curso' />
      <Mensaje color = 'blue' message = 'De react'/>
      <Description />
      <Description />
    </div>
  )
    
}

export default App;
