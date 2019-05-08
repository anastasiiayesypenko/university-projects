'use strict';
class Translator {
    constructor() {
        this.textarea = document.querySelector('.text-section__book');
        this.textarea.onselect = this.onSelection.bind(this);
        this.resultWindow = document.getElementById('result');
        this.firstValueArray = [];
    }
    onSelection(event) {
        let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd).toLowerCase();
        const wordEndWhitespace = /\s$/gi;
        if (wordEndWhitespace.test(selection)) {
            selection = selection.replace(' ', '');
        }
        const wordFetch = fetch('https://raw.githubusercontent.com/anastasiiayesypenko/university-projects/master/translate/src/js/dict.json')
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(err => console.log(response.statusText));
        })
        .then(data => {
            const dictionary = data[0];
            const entries = Object.entries(dictionary);
            for (let word in dictionary) {
                let wordList = [];
                if (word === selection) {
                    wordList.push(word);
                    
                    console.log(dictionary[word]);
                }
            }
                // if (selection === value[0]) {
                //     if (this.firstValueArray.includes(value[0])) {
                //         console.log('1', value[1]);
                //     } else {
                //         this.firstValueArray.push(value[0]);
                //         console.log('',value[1]);
                //         this.resultWindow.textContent = `You selected: ${selection}. \n Translation: ${value[1].toLowerCase()}`;
                //         console.log(this.firstValueArray);
                //     }

                    
            //     } 

            // });
        })
        .catch(err => console.log(err));
      
    }
}
let translatorPage = new Translator();
