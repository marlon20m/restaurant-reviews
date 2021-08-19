import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import List from './views/List';
import Detail from './views/Detail';




function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" exact element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
