## Roman Numeral Converter

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman numerals | Arabic numerals |
|---|---|
| M | 1000 |
| CM | 900 |
| D | 500 |
| CD | 400 |
| C | 100 |
| XC | 90 |
| L | 50 |
| XL | 40 |
| X | 10 |
| IX | 9 |
| V | 5 |
| IV | 4 |
| I | 1 |

**Objective:** Build an app that is functionally similar to a Roman numeral converter.

**User Stories:**

* You should have an input element with an id of "number".
* You should have a button element with an id of "convert-btn".
* You should have a div element with an id of "output".

**Functionality:**

* Clicking the `convert-btn` element without entering a value into the `number` element should display "Please enter a valid number" in the `output` element.
* Entering `-1` into the `number` element and clicking `convert-btn` should display "Please enter a number greater than or equal to 1" in the `output` element.
* Entering a number greater than or equal to 4000 into the `number` element and clicking `convert-btn` should display "Please enter a number less than or equal to 3999" in the `output` element.

**Conversion Examples:**

* Entering `9` into the `number` element and clicking `convert-btn` should display "IX" in the `output` element.
* Entering `16` into the `number` element and clicking `convert-btn` should display "XVI" in the `output` element.
* Entering `649` into the `number` element and clicking `convert-btn` should display "DCXLIX" in the `output` element.
* Entering `1023` into the `number` element and clicking `convert-btn` should display "MXXIII" in the `output` element.
* Entering `3999` into the `number` element and clicking `convert-btn` should display "MMMCMXCIX" in the `output` element.

**Challenge:**

Fulfill the user stories and pass all the tests to complete this project. Add your own personal touch!

**Happy Coding!**
