/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles/index.css";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';

function App() {
  return(
    <BrowserRouter basename="/rick-and-morty">
      <AppRoutes/>
    </BrowserRouter>
  );
}
export default App
