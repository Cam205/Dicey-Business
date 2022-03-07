let dice = [];
let btnGenerate = $("#btn-generate");
let btnRoll = $("#btn-roll");
let btnSum = $("#btn-sum");

class Die {
    constructor() {
        this.div = $("<div></div>");
        this.roll();
        $(this.div).appendTo("#dice-container");
        dice.push(this);
        $(this.div).click(() => {
            this.roll();
        });
        $(this.div).dblclick(() => {
            $(this.div).remove();
            dice.splice($.inArray(this, dice), 1);
        });
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.getChar();
        $(this.div).text("" + this.char + "");
        $(this.div).addClass("die");
    }

    getChar() {
        if (this.value === 1) {
            this.char = "⚀";
        } else if (this.value === 2) {
            this.char = "⚁"
        } else if (this.value === 3) {
            this.char = "⚂";
        } else if (this.value === 4) {
            this.char = "⚃";
        } else if (this.value === 5) {
            this.char = "⚄";
        } else {
            this.char = "⚅";
        }
    }
}

$(btnGenerate).click(() => {
    let die = new Die();
});

$(btnRoll).click(() => {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
});

$(btnSum).click(() => {
    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert(`The sum of the values of all dice on the screen is ${sum}.`);
});