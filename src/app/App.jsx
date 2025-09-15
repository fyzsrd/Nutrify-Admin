
import { useDispatch } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useEffect,useState  } from 'react';
import { setAuthFromStorage } from './store/authSlice';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const authData = localStorage.getItem("auth");

    if(authData){
      dispatch(setAuthFromStorage(JSON.parse(authData)))
    }
    setLoading(false);
  },[dispatch])

  if (loading) return <div>Loading...</div>;
  

  return (
    <>
    <AppRoutes />
    <ToastContainer />
    </>
  )
}

export default App
