import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Nav';

function App() {
  return (    
    <div className="app">
      <Navbar />
      <Header />
      <Content /> 
    </div>    
  );
}
export default App;
