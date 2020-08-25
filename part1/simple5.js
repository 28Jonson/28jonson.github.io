

var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

/*Usage example*/
findIP.then(ip => document.write('your ip: ', ip)).catch(e => console.error(e))



////////////////////////////////////////////////////////////////////////////////////

    // ball.offsetWidth=0 до того, как изображение загрузилось!
    // исправим это, установив ширину:
    ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
    ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

// ////////////////////////////////////////////////////////////////////////////
let div = document.createElement('div');
div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
let simpleDiv = document.querySelector('.simpleDiv');
simpleDiv.append(div);

let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = 'Bye there!';
div.after(div2);
setTimeout(() => div2.remove(), 2000);

//==============================================
ol.before(document.createElement('hr'), 'before');
ol.after('after', document.createElement('hr'));
let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // вставить liFirst в начало <ol>
let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);
ol.textContent = 'I am here!!!'


second.after(first);
first.after(document.createElement('hr'));


function getListContent() {
    // let fragment = new DocumentFragment();
    let result = [];

    for(let i=1; i<=3; i++) {
        let li = document.createElement('li');
        li.append(i);
        // fragment.append(li);
        result.push(li);
    }

    // return fragment;
    return result;
}
ul.append(...getListContent());

// console.dir(table.rows[1].cells);
function name() {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}
function surName() {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}
let ageName = true;
function age() {
    if (ageName) {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => +rowA.cells[2].innerHTML > +rowB.cells[2].innerHTML ? -1 : 1);

        table.tBodies[0].append(...sortedRows);
        ageName = !ageName;
    } else {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => +rowA.cells[2].innerHTML > +rowB.cells[2].innerHTML ? 1 : -1);

        table.tBodies[0].append(...sortedRows);
        ageName = !ageName;
    }    
}

document.querySelector('#table tr th:nth-child(1)').addEventListener('click', name)
document.querySelector('#table tr th:nth-child(2)').addEventListener('click', surName)
document.querySelector('#table tr th:nth-child(3)').addEventListener('click', age)


one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


// /////////////////////////////////////////////////////////////
// https://learn.javascript.ru/styles-and-classes#sledite-za-edinitsami-izmereniya
let classNotification = `position: fixed;z-index: 1000;padding: 5px;border: 1px solid black;font-size: 20px;background: white;text-align: center;background: #b80000;color: rgb(255,255,255);`


function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    if ( className === 'welcome2') {
        notification.style.cssText = classNotification;
    }
    

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    // setTimeout(() => notification.remove(), 1500);
    // console.log(notification);

}

// test it
let i = 1;
// setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello Sasha ' + ++i,
        className: "welcome2",
    });
// }, 2000);

/////////////////////////////////////////////////////////////////
// https://learn.javascript.ru/size-and-scroll
console.log(`layer2.offsetParent.id = ${layer2.offsetParent.id}  
layer2.offsetTop = ${layer2.offsetTop}  
layer2.offsetLeft = ${layer2.offsetLeft}`);