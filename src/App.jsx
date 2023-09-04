/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users';
import Loading from './components/Loading';
import { useGlobalContext } from './context';

// eslint-disable-next-line no-unused-vars
let url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  
  const {
    loading,
    data,
    fetchUsers
  } = useGlobalContext();

  



  useEffect(() => {
    fetchUsers(url)
  }, []);

  if (loading) {
    return <Loading />
  }


  return (
    <>
     <Users data={data} />
    </>
  )
}

export default App
