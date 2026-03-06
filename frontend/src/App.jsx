import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Form from './pages/Form';
import Resultado from './pages/Resultado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/formulario" element={<Form />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  );
}

export default App;
