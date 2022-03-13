import ReactDOM from 'react-dom';
import App from './App';
import TokenContextProvider from './contexts/TokenContext';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <TokenContextProvider>
        <App/>
    </TokenContextProvider>
    ,document.getElementById('root'));
