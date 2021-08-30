
export class IncExp {

    constructor() {
        this.incomeList = [];
        this.expensesList = [];
        this.totalInc = 0;
        this.totalExp = 0;
        this.budget = 0;
        this.totalExpPercentage = 0;
    }

    // set obj(x) {this._obj = x} 
    // get obj() {return this._obj}
    
    classifyElement(obj) {
        if (obj.type === "inc") {
            this.incomeList.push(obj);
        } else if (obj.type === "exp") {
            this.expensesList.push(obj);
        }
        this.updateNumbers();
    }

    updateNumbers() {
        this.totalIncome();
        this.totalExpenses();
        this.addExpensePercentages();
        this.addTotalExpensePercentage();
        this.totalBudget();
    }
    
    totalIncome() {
        let income = 0
        this.incomeList.forEach(inc => {
            income += inc["number"];
        });
        this.totalInc = income;
    }

    totalExpenses() {
        let expenses = 0;
        this.expensesList.forEach(exp => {
            expenses += exp["number"];
        });
        this.totalExp = expenses;
    }

    totalBudget() {
        this.budget = this.totalInc - this.totalExp;
    }

    addExpensePercentages() {
        this.expensesList.forEach((exp, index, arr) => {
            if (this.totalInc > 0) {
                arr[index].percentage = exp.number / this.totalInc * 100;
            } else {
                arr[index].percentage = 0;
            }
        });
    }

    addTotalExpensePercentage() {
        this.totalExpPercentage =  this.totalExp / this.totalInc * 100;
        if (this.totalInc == 0) {
            this.totalExpPercentage = 0;
        }
    }

    removeItem(x) {
        this.incomeList = this.incomeList.filter(el => !(el.id === x));
        this.expensesList = this.expensesList.filter(el => !(el.id === x));
        this.updateNumbers();
    }

}

























