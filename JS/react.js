const App = () => {
    return React.createElement('h1', null, 'Hola Mundo');
};

const root = ReactDOM.createRoot(document.getElementById('holaMundo'));
root.render(React.createElement(App));
