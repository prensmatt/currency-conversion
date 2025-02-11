// function toggleChoice(elements, selectedElement) {
//     elements.forEach(element => {
//         if (element === selectedElement) {
//             element.classList.add("choice");
//         }else {
//             element.classList.remove("choice");
//         }
//     });
// }
// let rubOne = document.querySelector(".rub-one");
// let usdOne = document.querySelector(".usd-one");
// let eurOne = document.querySelector(".eur-one");
// let gbpOne = document.querySelector(".gbp-one");
// let rubTwo = document.querySelector(".rub-two");
// let usdTwo = document.querySelector(".usd-two");
// let eurTwo = document.querySelector(".eur-two");
// let gbpTwo = document.querySelector(".gbp-two");
// let p2 = document.querySelector(".input-footer-text-two");
// let p1 = document.querySelector(".input-footer-text-one");
// https://v6.exchangerate-api.com/v6/a03495cb7aef8936ab109a1a/latest/USD
// const apiKey = 'd1164f90d8-baad48595a-sn8wxk';
// const baseUrl = 'https://api.fastforex.io/fetch-all';
// let fromCurrency = 'RUB';
// let toCurrency = 'USD';
// let error = document.querySelector(".internet");
// let firstInp = document.querySelector(".input-one input");
// let secondInp = document.querySelector(".input-two input");
// let burgerMenu = document.querySelector(".burger-menu");
// let listBurger = document.querySelector(".list-burger");
// burgerMenu.addEventListener("touchstart",()=>{
//     listBurger.classList.toggle("disnone");
// })
// let rate = 1;
// let rate1 = 1;
// let a;
// function updateExchangeRate() {
//     fetch(`${baseUrl}?api_key=${apiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             rate = data.results[toCurrency] / data.results[fromCurrency];
//             rate1 = data.results[fromCurrency] / data.results[toCurrency]
//             p1.textContent = "1 " + fromCurrency + " = " + (rate !== 1 ? rate.toFixed(5) : "1") + " " + toCurrency;
//             p2.textContent = "1 " + toCurrency + " = " + (rate1 !== 1 ? rate1.toFixed(5) : "1") + " " + fromCurrency;
//             if (a == 2) {
//                 firstInp.value = (secondInp.value * rate1).toFixed(5);
//             }
//             else if (a == 1) {
//                 secondInp.value = (firstInp.value * rate).toFixed(5);
//             }

//         })
//         error.classList.add('disnone')
// }
// function wifi() {
//     while (!navigator.onLine) {
//         error.classList.remove('disnone');
//         if(toCurrency == fromCurrency){
//             p1.textContent = "1 " + fromCurrency + " = " + "1 " + " " + toCurrency;
//             p2.textContent = "1 " + toCurrency + " = " + "1 " + " " + fromCurrency;
//             if(a == 1){
//             secondInp.value = firstInp.value;
//             }
//             else if(a == 2){
//             firstInp.value = secondInp.value;
//             }
//             break;
//         }
//         else if(toCurrency != fromCurrency){
//             if(a == 1){
//                 secondInp.value = "";
//             }
//             else if(a == 2){
//                 firstInp.value = "";
//             }
//             break;
//         }
//     }
//     while (navigator.onLine) {
//         if (error.classList != "disnone") {
//             error.classList.add('disnone')
//             updateExchangeRate();
//         }
//         break;
//     }
    
// }
// function ensureSingleDecimal(input) {
//     let value = input.value;
//     let parts = value.split('.');
//     if (parts.length > 2) {
//         value = parts[0] + '.' + parts.slice(1).join('');
//     }
//     if (parts[1] && parts[1].length > 5) {
//         parts[1] = parts[1].substring(0, 5);
//         value = parts.join('.');
//     }
//     input.value = value;
// }
// function removeLeadingZeros(input) {
//     let value = input.value;
//     let cut = value.split("");
    
//     if (cut[0] === "0") {
//         if (cut[1] === "0") {
//             cut.splice(0, 1);
//             value = cut.join("");
//         }
//         else if (cut[1] && cut[1].match(/[1-9]/)) {
//             cut.splice(0, 1);
//             value = cut.join("");
//         }
//         else if (cut[1] === ".") {
//             value = cut.join("");
//         }
//     }
    
//     input.value = value;
// }
// firstInp.addEventListener('input', () => {
//     if (firstInp.value.length > 19) {
//         let item = firstInp.value.split('');
//         for (let i = 19; i < firstInp.value.length; i++) {
//             item[i] = "";
//         }
//         firstInp.value = item.join('');
//     }
//     firstInp.value = firstInp.value.replace(/[^0-9.,]/g, '');
//     firstInp.value = firstInp.value.replace(",", ".");
//     ensureSingleDecimal(firstInp);
//     removeLeadingZeros(firstInp) ;    

//     a = 1;
//     if (firstInp.value === ".") {
//         firstInp.value = "0.";
//     }
//     else {
//         secondInp.value = (firstInp.value * rate).toFixed(5);
//     }
//     wifi();
// });
// secondInp.addEventListener('input', () => {
//     if (secondInp.value.length > 19) {
//         let item = secondInp.value.split('');
//         for (let i = 19; i < secondInp.value.length; i++) {
//             item[i] = "";
//         }
//         secondInp.value = item.join('');
//     }
//     secondInp.value = secondInp.value.replace(/[^0-9.,]/g, '');
//     secondInp.value = secondInp.value.replace(",", ".");
//     removeLeadingZeros(secondInp); 
//     ensureSingleDecimal(secondInp);
//     a = 2;
//     if (secondInp.value === ".") {
//         secondInp.value = "0.";
//     }
//     else {
//         firstInp.value = (secondInp.value * rate1).toFixed(5);
//     }
//     wifi();
// });
// usdOne.addEventListener("click", () => {
//     toggleChoice([rubOne, usdOne, eurOne, gbpOne], usdOne);
//     fromCurrency = usdOne.textContent;
//     updateExchangeRate();
//     wifi();
// });
// rubOne.addEventListener("click", () => {
//     toggleChoice([rubOne, usdOne, eurOne, gbpOne], rubOne);
//     fromCurrency = rubOne.textContent;
//     updateExchangeRate();
//     wifi();
// });
// eurOne.addEventListener("click", () => {
//     toggleChoice([rubOne, usdOne, eurOne, gbpOne], eurOne);
//     fromCurrency = eurOne.textContent;
//     updateExchangeRate();
//     wifi();
// });
// gbpOne.addEventListener("click", () => {
//     toggleChoice([rubOne, usdOne, eurOne, gbpOne], gbpOne);
//     fromCurrency = gbpOne.textContent;
//     updateExchangeRate();
//     wifi();
// });
// usdTwo.addEventListener("click", () => {
//     toggleChoice([rubTwo, usdTwo, eurTwo, gbpTwo], usdTwo);
//     toCurrency = usdTwo.textContent;
//     updateExchangeRate();
//     wifi();
// });
// rubTwo.addEventListener("click", () => {
//     toggleChoice([rubTwo, usdTwo, eurTwo, gbpTwo], rubTwo);
//     toCurrency = rubTwo.textContent;
//     updateExchangeRate();
//     wifi();
// });
// eurTwo.addEventListener("click", () => {
//     toggleChoice([rubTwo, usdTwo, eurTwo, gbpTwo], eurTwo);
//     toCurrency = eurTwo.textContent;
//     updateExchangeRate();
//     wifi();
// });
// gbpTwo.addEventListener("click", () => {
//     toggleChoice([rubTwo, usdTwo, eurTwo, gbpTwo], gbpTwo);
//     toCurrency = gbpTwo.textContent;
//     updateExchangeRate();
//     wifi();
// });
// updateExchangeRate();
// window.addEventListener('online', updateExchangeRate);
// window.addEventListener('offline', wifi);




















let firstInp = document.querySelector(".input-one input");
let secondInp = document.querySelector(".input-two input");
let footerTextOne = document.querySelector('.input-footer-text-one')
let footerTextTwo = document.querySelector('.input-footer-text-two')
let btnOne = document.querySelectorAll('.button-one button');
let btnTwo = document.querySelectorAll('.button-two button');
let first = 'RUB';
let second = 'USD';
let btns = document.querySelectorAll('.buttons button');
let internet = document.querySelector('.internet');
let main;
let btnMainOne=document.querySelector('.button-one');
let btnMainTwo=document.querySelector('.button-two');

function firstSecondFetch(){
    if(main==1){
        fetch(`https://v6.exchangerate-api.com/v6/a03495cb7aef8936ab109a1a/pair/${first}/${second}`).then(res => res.json()).then(data =>{
            secondInp.value = (Number(firstInp.value) * data.conversion_rate).toFixed(5);
            if(firstInp.value == ""){
                secondInp.value = "";
            }
    })
}
else if(main==2){
    fetch(`https://v6.exchangerate-api.com/v6/a03495cb7aef8936ab109a1a/pair/${second}/${first}`).then(res => res.json()).then(data =>{
        firstInp.value = (Number(secondInp.value) * data.conversion_rate).toFixed(5);
        if(secondInp.value == ""){
            firstInp.value = "";
        }
    })
}
};

function footerText(){
    fetch(`https://v6.exchangerate-api.com/v6/a03495cb7aef8936ab109a1a/pair/${first}/${second}`).then(res => res.json()).then(data =>{
        footerTextOne.textContent="1 "+first+" = "+data.conversion_rate+" "+ second
    })
    fetch(`https://v6.exchangerate-api.com/v6/a03495cb7aef8936ab109a1a/pair/${second}/${first}`).then(res => res.json()).then(data =>{
        footerTextTwo.textContent="1 "+second+" = "+data.conversion_rate+" "+ first
    })
};

firstInp.addEventListener('input', () => {
    main=1;
    if(firstInp.value.includes(".")){
        let items=firstInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        firstInp.value=items.join('.');
    }
    firstSecondFetch();
    internetConnection();
});

secondInp.addEventListener('input', () => {
    main=2;
    if(secondInp.value.includes(".")){
        let items=secondInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        secondInp.value=items.join('.');
    }
    firstSecondFetch();
    internetConnection();
});

firstInp.addEventListener('input', () => {
    firstInp.value = firstInp.value.replace(/[^0-9.]/g, '');
    firstInp.value = firstInp.value.replace(",", ".");
    let item = firstInp.value.split('');
    let count=0;
    if (item[0] == '.') {
        item[0]="0.";
    }
    for (let i = 0; i < item.length ; i++) {
        if (item[i] === '.') {
            count++;
            if (count > 1) {
                item[i]="";
            }
        }
    }
    firstInp.value=item.join('');
    
    if(firstInp.value.includes(".")){
        let items=firstInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        firstInp.value=items.join('.');
    }
    if(item[0] == 0){
        for(let i=1;i<=item.length;i++){
            if(item[1] != "."){
        if(item[i] == "1" || item[i] == "2" || item[i] == "3" || item[i] == "4" || item[i] == "5" || item[i] == "6" || item[i] == "7" || item[i] == "8" || item[i] == "9"){
            for(let j=0;j<i;j++){
                item[j]="";
            }
        }
    }
        if(item[i] == "."){
            for(let j=1;j<i;j++){
                item[j-1]="";
            }
        }
    }
    }
    firstInp.value=item.join('');
    internetConnection();

    
});

secondInp.addEventListener('input', () => {
    secondInp.value = secondInp.value.replace(/[^0-9.,]/g, '');
    secondInp.value = secondInp.value.replace(",", ".");
    let item = secondInp.value.split('');
    let count=0;
    if (item[0] == '.') {
        item[0]="0.";
    }
    for (let i = 0; i < item.length ; i++) {
        if (item[i] === '.') {
            count++;
            if (count > 1) {
                item[i]="";
            }
        }
    }
    secondInp.value=item.join('');
    
    if(secondInp.value.includes(".")){
        let items=secondInp.value.split(".");
        if(items[1].length>5){
            items[1]=items[1].substring(0, 5);
        }
        secondInp.value=items.join('.');
    }

    if(item[0] == 0){
        for(let i=1;i<=item.length;i++){
            if(item[1] != "."){
        if(item[i] == "1" || item[i] == "2" || item[i] == "3" || item[i] == "4" || item[i] == "5" || item[i] == "6" || item[i] == "7" || item[i] == "8" || item[i] == "9"){
            for(let j=0;j<i;j++){
                item[j]="";
            }
        }
    }
        if(item[i] == "."){
            for(let j=1;j<i;j++){
                item[j-1]="";
            }
        }
    }
    }
    secondInp.value=item.join('');
    internetConnection();
    
});

function choice(elements, selectedElement) {
    elements.forEach(element => {
        if (element === selectedElement) {
            element.classList.add("choice");
        } else {
            element.classList.remove("choice");
        }
    });
};

btnOne.forEach((itemOne, i) =>{
    itemOne.addEventListener('click', () =>{
        choice(btnOne,itemOne);
        first=itemOne.textContent;
        firstSecondFetch();
        footerText();
        internetConnection();
    })
});

btnTwo.forEach((itemTwo, j) =>{
    itemTwo.addEventListener('click', () =>{
        second=itemTwo.textContent;
        choice(btnTwo,itemTwo);                
        firstSecondFetch();
        footerText();
        internetConnection();
    })
});

let threeLine=document.querySelector(".menu");
let menuThreeLine=document.querySelector(".menu-three-line");
threeLine.addEventListener("touchstart", () =>{
 menuThreeLine.classList.toggle('dis-none') ;  
})

function internetConnection() {
    if (!navigator.onLine) {
        internet.classList.remove("dis-none");
                    let firstOne=btnMainOne.getElementsByClassName('choice')[0];
                    let secondOne=btnMainTwo.getElementsByClassName('choice')[0];

                    if(main==1){
                        if(firstOne.innerHTML==secondOne.innerHTML){
                            secondInp.value=firstInp.value;
                            footerTextOne.textContent ="1 "+firstOne.innerHTML+" = 1 "+secondOne.innerHTML;
                            footerTextTwo.textContent ="1 "+secondOne.innerHTML+" = 1 " + firstOne.innerHTML;
                    }
                    else{
                        secondInp.value='';
                    }
                }
                else if(main==2){
                    if(firstOne.innerHTML==secondOne.innerHTML){
                        firstInp.value=secondInp.value;
                        footerTextOne.textContent ="1 "+firstOne.innerHTML+" = 1 "+secondOne.innerHTML;
                        footerTextTwo.textContent ="1 "+secondOne.innerHTML+" = 1 " + firstOne.innerHTML;
            }
            else{
                firstInp.value='';
            }
                }
    } else {
        internet.classList.add("dis-none");
        firstSecondFetch();
        footerText();
    }
};

internetConnection();

window.addEventListener('online', internetConnection);
window.addEventListener('offline', internetConnection);