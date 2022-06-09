import logo from './logo.svg';
import './App.css';
import Demo from './componet/Demo';
import Data from './Data';
import Data2 from './Data2';
import Country from './container/Country';
import CountryFun from './container/CountryFun';
import Lifecycle from './container/time/Lifecycle';
import Lifecyclefun from './container/time/Lifecyclefun';
import Counter from './container/Counter';
import { useEffect, useState } from 'react';
import Loading from './container/Loading';
import Home from './container/Home';


const HomeWithLoading = Loading(Home)

function App(props) {

  const [loading,setloading]=useState(false);
  const [data,setData]=useState([]);

  let officedata=[
    {id:101,name:"raj"},
    {id:102,name:"rinkesh"}
  ];

  useEffect(() => {

      setloading(true);
      setTimeout(()=>{setloading(false);setData(officedata)},2000);

  },[]);


  return (
    <div className="App">
     {/* <Data /> */}
     {/* <Data2 /> */}
      {/* <Demo /> */}
      {/* <Country name="raj" id="17"/> */}
      {/* <CountryFun name="mansi" id="11"/> */}
      {/* <Lifecycle /> */}
      {/* <Lifecyclefun />  */}
      {/* <Counter />  */}

      <HomeWithLoading
        isLoading={loading}
        data={data} 
      />
     </div>
  );
}

export default App;
