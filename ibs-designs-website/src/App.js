import { Routes, Route } from 'react-router-dom';

import './styles/App.styles.scss';

import Header from './components/header.component';
import Home from './pages/home.page';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
