import { BrowserRouter } from "react-router"
import AppRouter from './components/AppRouter';
import './css/style.css'

const App = () =>  {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
