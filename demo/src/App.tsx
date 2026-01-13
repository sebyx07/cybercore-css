import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Components from './pages/Components';
import Effects from './pages/Effects';
import Docs from './pages/Docs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<Components />} />
        <Route path="effects" element={<Effects />} />
        <Route path="docs" element={<Docs />} />
      </Route>
    </Routes>
  );
}

export default App;
