import Chat from "./component/Chat";
import Login from "./component/Login";
import { LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login
    }
]

export const privateRoutes = [ // Приватные роуты, доступны только авторизированным пользователям
    {
        path: '/chat',
        component: Chat
    }
]