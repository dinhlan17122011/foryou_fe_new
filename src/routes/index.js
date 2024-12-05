import config from '../config/index.js';

import Home from '../pages/HomePage/HomePage.jsx';
import logIn from '../pages/UserRegiste_LogInPage/Log_In.jsx'
import register from '../pages/UserRegiste_LogInPage/Registe.jsx'
import VerifyEmail from '../pages/VerifyEmailPage/VerifyEmail.jsx';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: logIn },
    { path: config.routes.register, component: register },
    {path : config.routes.verify_email, component : VerifyEmail}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };