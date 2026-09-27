import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './component/Header';
import Body from './component/Body';
import Counter from './component/Counter'

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Counter />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
