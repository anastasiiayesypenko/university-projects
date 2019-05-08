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
      }
}
let translatorPage = new Translator();

