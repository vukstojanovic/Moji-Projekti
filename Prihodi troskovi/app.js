
import {IncExp} from "./data.js";

const monthYear = document.getElementById("month-year");

const totalBudget = document.getElementById("totalBudget");
const totalIncome = document.getElementById("totalIncome");
const totalExpenses = document.getElementById("totalExpenses");
const type = document.getElementById("plusMinus");
const description = document.getElementById("description");
const number = document.getElementById("value");
const btn = document.getElementById("btn");
const incomeElements = document.querySelector(".income ul");
const expensesElements = document.querySelector(".expenses ul");
const allElements = document.querySelector(".elements");
const expPercentages = totalExpenses.querySelector(".percentage");
const incPercentages = totalIncome.querySelector(".percentage");
console.log(expPercentages);
let id = 0;

const date = new Date();
const monthsList = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
monthYear.innerHTML = `${monthsList[date.getMonth()]}, ${date.getFullYear()}`;

const newDataBase = new IncExp();
console.log(newDataBase);

// event listeneri

btn.addEventListener("click", () => {
    addObject();
});

allElements.addEventListener("click", (e) => {
    deleteObject(e);
});

type.addEventListener("change", () => {
    type.classList.toggle("redBorder");
    description.classList.toggle("redBorder");
    number.classList.toggle("redBorder");
    btn.querySelector("i").classList.toggle("redBtn");
});

// funkcije

function addObject() {

    if (Number(number.value) && description.value.trim()) {
        const obj = {};
        obj.id = id.toString();
        obj.type = type.value;
        obj.name = description.value;
        obj.number = Number(number.value);
        newDataBase.classifyElement(obj);
        id++;

        console.log(newDataBase);
        
        displayResults();

    }

}

function deleteObject(e) {

    if (e.target.className.includes("far")) {
        const xButton = e.target.parentElement;
        const xButtonId = xButton.id;
        newDataBase.removeItem(xButtonId);
        console.log(newDataBase);
        newDataBase.updateNumbers();
        incomeElements.innerHTML = "";
        expensesElements.innerHTML = "";
        displayResults();
    }

}

function displayResults() {

    incomeElements.innerHTML = "";
    expensesElements.innerHTML = "";
        
        newDataBase.incomeList.forEach(inc => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="name">${inc.name}</span><span class="number-container"><span class="num">${commasNumber(inc.number)}</span><span class="iks" id="${inc.id}"><i class="far fa-times-circle"></i></span></span>`;
            incomeElements.appendChild(li);
        });

        newDataBase.expensesList.forEach(exp => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="name">${exp.name}</span><span class="number-container"><span class="num">${commasNumber(exp.number)}</span><span class="percentage">${commasNumber(exp.percentage)}%</span><span class="iks" id="${exp.id}"><i class="far fa-times-circle"></i></span></span>`;
            expensesElements.appendChild(li);
        });

        totalIncome.querySelector(".digit").innerHTML = commasNumber(newDataBase.totalInc);
        totalExpenses.querySelector(".digit").innerHTML = commasNumber(newDataBase.totalExp);
        expPercentages.innerHTML = `${commasNumber(newDataBase.totalExpPercentage)}%`;
        incPercentages.innerHTML = `${commasNumber(newDataBase.totalExpPercentage)}%`;
        if (newDataBase.budget > 0) {
            totalBudget.innerHTML = "+ " + commasNumber(Math.abs(newDataBase.budget));
        } else if (newDataBase.budget < 0) {
            totalBudget.innerHTML = "- " + commasNumber(Math.abs(newDataBase.budget));
        } else {
            totalBudget.innerHTML = commasNumber(Math.abs(newDataBase.budget));
        }
        description.value = "";
        number.value = 0;

}

function commasNumber(num) {

    let whole = num.toFixed(2).split(".")[0];
    let decimal = num.toFixed(2).split(".")[1];
    return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + decimal;

}








