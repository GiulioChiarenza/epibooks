import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/MyNav';
import CustomAlert from './components/Welcome';
import CustomFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
   <>
  <header>
    <CustomNavbar></CustomNavbar>
  </header>
  <main>
    <CustomAlert></CustomAlert>
    <AllTheBooks></AllTheBooks>
  </main>
  <footer>
    <customFooter></customFooter>
  </footer>
   </>
  );
}

export default App;
