import { Routes, Route } from 'react-router-dom';

import './styles/App.styles.scss';

import Header from './components/header.component';
import Home from './pages/home.page';
import About from './pages/about.page';
import Contact from './pages/contact.page';
import Shop from './pages/shop.page';
import Footer from './components/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
