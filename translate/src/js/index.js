'use strict';
class Translator {
    constructor() {
        this.textarea = document.querySelector('.text-section__book');
        this.textarea.onselect = this.onSelection.bind(this);
        this.resultWindow = document.getElementById('result');
    }
    onSelection(event) {
        let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        this.resultWindow.textContent = `You selected: ${selection}`;
        const wordEndWhitespace = /\s$/gi;
        if (wordEndWhitespace.test(selection)) {
            selection.replace(' ', '');
        }
      }
    findWordInDictionary() {
        const wordFetch = fetch('https://raw.githubusercontent.com/anastasiiayesypenko/university-projects/master/translate/src/js/dict.json')
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(err => console.log(response.statusText));
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}
let translatorPage = new Translator();
translatorPage.findWordInDictionary();

