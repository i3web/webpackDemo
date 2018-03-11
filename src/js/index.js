// import _ from 'lodash';
import '../css/style.css'
import apple from '../img/apple.jpeg'
import printMe from './print.js'
function component() {
    let element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'hello webpack'
    element.classList.add('hello');
    // var myIcon=new Image();
    // myIcon.src=apple;
    //
    // element.appendChild(myIcon)
    var btn=document.createElement('button');
    btn.innerHTML='click me and check the console';
    btn.onclick=printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
