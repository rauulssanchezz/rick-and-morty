/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Footer from './components/ui/footer/footer';
import Header from './components/ui/header/header';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <AppRoutes/>
      <Footer />
    </BrowserRouter>
  );
}
export default App
