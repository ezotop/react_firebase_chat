import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import AppRouter from './component/AppRouter';
import './App.css';
import { Context } from '.';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth) // Хук возвращает кортеж из самого Пользователя, Переменная которая отвечает за то загружен он или нет и Ошибки

    return (
        <Router>
            <Navbar />
            <AppRouter />
        </Router>
    );
}

export default App;
