import logo from './logo.svg';
import './App.css';
import Demo from './componet/Demo';
import Data from './Data';
import Data2 from './Data2';
import Country from './container/Country';
import CountryFun from './container/CountryFun';

function App() {
  return (
    <div className="App">
     {/* <Data /> */}
     <Data2 />
      <Demo />
      <Country name="raj" id="17"/>
      <CountryFun name="mansi" id="11"/>
     </div>
  );
}

export default App;
