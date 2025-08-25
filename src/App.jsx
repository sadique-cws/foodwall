import Header from './components/Header'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { Route, Routes } from 'react-router';

function App(props) {

  return (
    <div className='bg-slate-100 h-screen'>
      <Header title={props.title}/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App