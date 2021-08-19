import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import List from './views/List';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Header />
          <Route path='/' exact component={List} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
