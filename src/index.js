import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test from './Test'
import Binding from './2way_binding'
import Todo from './TodoList'
import reportWebVitals from './reportWebVitals';
import SetInterTime from './SetInterTime'
import Preview from './Preview'
import ChatApp from './ChatApp'
import  UseLayoutEffect  from './UseLayoutEffect';
import UseRefState from './UseRefState'
import UseMomo from './UseMemo'
import UseReducer from './UseReducer'
import Todoreducer from './Todo'
import UseContext from './UseContext/App'
import {ThemeProvider} from './UseContext/ThemeContext'

// Fakes comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `Noi dung comments cua lesson ${id}`
      })
    )
  },2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Binding />
    <Todo />
    <SetInterTime />
    <Preview />
    <ChatApp />
    <UseLayoutEffect />
    <UseRefState /> */}
    {/* <UseMomo /> */}
    {/* <UseReducer /> */}
    {/* <Todoreducer /> */}
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
