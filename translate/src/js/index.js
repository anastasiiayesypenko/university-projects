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
            let translationVariants = new Set();
            data.find(word => {
                if (Object.keys(word).includes(selection)) {
                    translationVariants.add(word[selection].toLowerCase());
                    let counter = 0;
                    let setWrapper = document.createElement('div');
                    translationVariants.forEach(function(elem) {
                        counter++;
                        const variant = document.createElement('p');
                        variant.textContent = `${counter}) ${elem}`;
                        setWrapper.append(variant);
                    })
                    this.resultWindow.textContent = `You selected: ${selection}.`;
                    this.resultWindow.appendChild(setWrapper);
                }
            });
        })
        .catch(err => console.log(err));
      
    }
}
let translatorPage = new Translator();
