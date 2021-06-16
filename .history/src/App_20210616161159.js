import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import AppRouter from './component/AppRouter';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <AppRouter />
        </Router>
    );
}

export default App;
