'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Translator =
/*#__PURE__*/
function () {
  function Translator() {
    _classCallCheck(this, Translator);

    this.textarea = document.querySelector('.text-section__book');
    this.textarea.onselect = this.onSelection.bind(this);
    this.resultWindow = document.getElementById('result');
    this.firstValueArray = [];
  }

  _createClass(Translator, [{
    key: "onSelection",
    value: function onSelection(event) {
      var _this = this;

      var selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd).toLowerCase();
      var wordEndWhitespace = /\s$/gi;

      if (wordEndWhitespace.test(selection)) {
        selection = selection.replace(' ', '');
      }

      var wordFetch = fetch('https://raw.githubusercontent.com/anastasiiayesypenko/university-projects/master/translate/src/js/dict.json').then(function (response) {
        if (response.ok) return response.json();
        throw new Error(function (err) {
          return console.log(response.statusText);
        });
      }).then(function (data) {
        var translationVariants = new Set();
        data.find(function (word) {
          if (Object.keys(word).includes(selection)) {
            translationVariants.add(word[selection].toLowerCase());
            var counter = 0;
            var setWrapper = document.createElement('div');
            setWrapper.textContent = "Translations: ";
            translationVariants.forEach(function (elem) {
              counter++;
              var variant = document.createElement('p');
              variant.textContent = "".concat(counter, ") ").concat(elem);
              setWrapper.append(variant);
            });
            _this.resultWindow.textContent = "You selected: ".concat(selection, ".");

            _this.resultWindow.appendChild(setWrapper);
          }
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return Translator;
}();

var translatorPage = new Translator();