import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Components from './pages/Components';
import Docs from './pages/Docs';
import Effects from './pages/Effects';
import Home from './pages/Home';
import Icons from './pages/Icons';
import Utilities from './pages/Utilities';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<Components />} />
        <Route path="components/:tab" element={<Components />} />
        <Route path="icons" element={<Icons />} />
        <Route path="effects" element={<Effects />} />
        <Route path="utilities" element={<Utilities />} />
        <Route path="utilities/:tab" element={<Utilities />} />
        <Route path="docs" element={<Docs />} />
        <Route path="docs/:section" element={<Docs />} />
      </Route>
    </Routes>
  );
}

export default App;
