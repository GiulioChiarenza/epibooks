
import './App.css';
import CustomNavbar from './components/MyNav';
import CustomAlert from './components/Welcome';
import CustomFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import SingleBook from './components/SingleBook';
import books from './data/book.json'
function App() {
  return (
   <>
  <header>
    <CustomNavbar></CustomNavbar>
  </header>
  <main>
    <CustomAlert></CustomAlert>
    <BookList book={books[0]}/>
    <AllTheBooks></AllTheBooks>
  </main>
  <footer>
    {/* <customFooter></customFooter> */}
  </footer>
   </>
  );
}

export default App;
