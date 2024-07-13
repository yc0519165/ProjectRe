import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import IncomeExpences from './components/IncomeExpences';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
      <Header></Header>
      <div className='container'>
        <Balance></Balance>
        <IncomeExpences></IncomeExpences>
        <History></History>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    </>
  );
}

export default App;
