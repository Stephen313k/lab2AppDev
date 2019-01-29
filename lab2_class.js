"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.colours = [];
    }
    toDoClass.prototype.addColour = function (colour) {
        this.colours.push(colour);
        return this.colours.length;
    };
    toDoClass.prototype.listAllColours = function () {
        colours.forEach(function (colour) {
            console.log(colours);
        });
    };
    toDoClass.prototype.deleteColours = function (colour) {
        var index = colours.indexOf(colour, 0);
        if (index > -1) {
            this.colours.splice(index, 1);
            console.log("item " + colour + " has been deleted");
        }
        else {
            console.log("item not found: " + colour);
        }
        return this.colours.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addColour("blue");
testClass.addColour("red");
testClass.listAllColours();
testClass.deleteColours("red");
testClass.listAllColours();
