// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
// 如果某个模块中，使用 from 接收到的成员为 undefined，则没必要进行接收，如 css文件

// 使用 ES6 导入语法，导入 jquery
import $ from "jquery";

import './css/index.css';

// import './css/index.less';
import '@/css/index.less';

// 导入图片，得到图片文件
import logo from './images/vs.png';

import '@/images/666.jpg';

$(function () {
    $("li:odd").css('background-color', 'pink');
    $("li:even").css('background-color', 'yellow');

    $("img").attr("src", logo);
});
