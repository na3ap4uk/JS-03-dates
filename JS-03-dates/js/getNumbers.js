'use strict';
(function() {
    //------------------------------------
    var someArray = [2, 3, 'wtf', '4', 0, null];

    function getNumbers(arr) {
        var numbersArr = [];
        var item;
        for (var i = 0; i < arr.length; i++) {
            item = parseFloat(arr[i]);
            if (!isNaN(item)) {
                numbersArr.push(item);
            }
        }
        return numbersArr;
    }
    //-----------------------------------
    //------------------------------------
    someArray = [2, 3, 'wtf', '4', 0, null, 8, 4];

    function getNumericSum(arr) {
        var sum = 0;
        var item;
        for (var i = 0; i < arr.length; i++) {
            item = parseFloat(arr[i]);
            if (!isNaN(item)) {
                sum = sum + item;
            }
        }
        return sum;
    }
    //-----------------------------------
    //------------------------------------------
    someArray = [2, '3', 4, 3, 2];

    function getQuanOfUniqueCharacters(arr) {
        var quan = [];
        for (var i = 0; i < arr.length; i++) {
            if (quan.indexOf(arr[i]) === -1) {
                quan.push(arr[i]);
            }
        }
        return quan.length;
    }
    console.log(getQuanOfUniqueCharacters(someArray));
    //------------------------------------------
    //------------------------------------------
    var newArray = "muahaha";

    function newGetQuanOfUniqueCharacters(string) {
        var quan = [];
        for (var i = 0; i < string.length; i++) {
            if (quan.indexOf(string[i]) === -1) {
                quan.push(string[i]);
            }
        }
        return quan.length;
    }
    console.log(newGetQuanOfUniqueCharacters(newArray));
    //------------------------------------------
    //------------------------------------------
    var pensionersArray = [{
        name: 'Oksana',
        age: 45
    }, {
        name: 'Martin',
        age: 65
    }, {
        name: 'Stefan',
        age: 66
    }, {
        name: 'Maria',
        age: 79
    }];

    function getPensionersName(arr) {
        var pensioners = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].age > 65) {
                pensioners.push(arr[i].name);
            }
        }
        return pensioners;
    }
    console.log(getPensionersName(pensionersArray));
    //------------------------------------------
})();