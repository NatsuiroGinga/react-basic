// 框架核心包
import React from 'react';
// 专门做渲染的包
import ReactDOM from 'react-dom/client';
// 应用的全局的样式文件
import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件APP, 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
