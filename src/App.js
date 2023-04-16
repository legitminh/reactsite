
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import './App.scss';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App
