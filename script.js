const ul = document.querySelector('ul');
const button = document.querySelector('button');
const loader = document.querySelector('.content');
let pressed = 0;
let acting = true;
const timeOuts = [];
let loaderState = false;
const storage = [
    {
        id : 1,
        title : 'Deadpool1',
        time : "01:48"
    },
    {
        id : 1,
        title : 'Deadpool2',
        time : "02:00"
    },
];

const giveMeLI = () => {
    storage.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h1>${el.title}</h1>
            <h3>${el.time}</h3>
        `
        ul.appendChild(li);
    });
    loaderState = false;
    loader.style.display = 'none';
}

const giveMeErr = () => {
    const li = document.createElement('li');
    li.innerHTML = `
        <h1>Data is not loaded!</h1>
    `
    ul.appendChild(li);
    loaderState = false;
    loader.style.display = 'none';
    acting = true;
}
button.addEventListener('click', async (e) => {
    e.preventDefault();
    if (acting === false) {
        return;
    }
    timeOuts.forEach(timer => {
        clearTimeout(timer);
    })
    if (pressed % 3 != 2) {
        ul.innerHTML = '';
        loaderState = true;
        loader.style.display = 'flex';
        const myTimeout = setTimeout(giveMeLI, 2000);
        timeOuts.push(myTimeout);
    } else {
        const myTimeout = setTimeout(giveMeErr, 2000);
        timeOuts.push(myTimeout);
        acting = false;
    }
    pressed++;
})