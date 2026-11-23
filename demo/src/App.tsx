import { lazy, Suspense } from 'react';

import { Navigate, Route, Routes, useParams } from 'react-router';

import DocsShell from './components/DocsShell';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const GettingStarted = lazy(() => import('./pages/GettingStarted'));
const Theming = lazy(() => import('./pages/Theming'));
const ModuleIndex = lazy(() => import('./pages/ModuleIndex'));
const ModulePage = lazy(() => import('./pages/ModulePage'));
const Icons = lazy(() => import('./pages/Icons'));
const OgCard = lazy(() => import('./pages/OgCard'));

// Where the tabs of the old single-page docs live now.
const LEGACY_DOCS: Record<string, string> = {
  installation: '/docs#install',
  usage: '/docs#sass',
  architecture: '/docs#layers',
  customization: '/docs/theming#override',
  colors: '/docs/theming#tokens-palette',
  typography: '/docs/theming#tokens-type',
  spacing: '/docs/theming#tokens-spacing',
  components: '/components',
  effects: '/effects',
  utilities: '/utilities',
  icons: '/icons',
};

function LegacyDocs() {
  const { section = '' } = useParams<{ section: string }>();
  const target = LEGACY_DOCS[section];
  return target ? <Navigate to={target} replace /> : <NotFound />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<DocsShell />}>
          <Route path="docs" element={<GettingStarted />} />
          <Route path="docs/theming" element={<Theming />} />
          <Route path="docs/:section" element={<LegacyDocs />} />
          <Route path="components" element={<ModuleIndex group="components" />} />
          <Route path="components/:slug" element={<ModulePage group="components" />} />
          <Route path="effects" element={<ModuleIndex group="effects" />} />
          <Route path="effects/:slug" element={<ModulePage group="effects" />} />
          <Route path="utilities" element={<ModuleIndex group="utilities" />} />
          <Route path="utilities/:slug" element={<ModulePage group="utilities" />} />
          <Route path="icons" element={<Icons />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="og"
        element={
          <Suspense fallback={null}>
            <OgCard />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
