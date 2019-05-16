'use strict';
class Statistics {
    constructor() {
        this.form = document.querySelector('.form');
        this.form.addEventListener('submit', this.onCalculate.bind(this));
        this.input = document.querySelector('.form__input');
        this.result = document.querySelector('.result');
    }
    onCalculate(event) {
        event.preventDefault();
        let { value } = this.input;
        let lowerText = value.toLowerCase();
        let avoidSymbols = lowerText.replace(/\n|\?|\.|,|\"|\(|\)|\;|\—|\»|\«|\.\.\.|\!|\ \–\ /gi, " ");
        let clearText = avoidSymbols.replace(/\ \ \ \ \ |\ \ \ \ |\ \ \ |\ \ /g, " ");
        let text = clearText.split(' ');
        let frequency_of_slovoforma = {};
        for (let slovoforma of text) {
            if (frequency_of_slovoforma[slovoforma]) {
                frequency_of_slovoforma[slovoforma] += 1;
            } else {
                frequency_of_slovoforma[slovoforma] = 1;
            }
        }
        const sortArray = [];
        for (let i in frequency_of_slovoforma) {
            sortArray.push([i.replace(/\ /g, ''), frequency_of_slovoforma[i]]);
        }
        sortArray.sort(function(a, b) {
            return b[1] - a[1];
        });
        for (let i of sortArray) {
            let item = document.createElement('p');
            item.textContent = i.toString();
            this.result.append(item);
        }
    }
}

let statistics = new Statistics();