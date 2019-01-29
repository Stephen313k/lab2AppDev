var colours = [];
function addColour(colour) {
    colours.push(colour);
    return colours.length;
}
function listAllColours() {
    colours.forEach(function (colour) {
        console.log(colours);
    });
    function deleteColours(colour) {
        var index = colours.indexOf(colour, 0);
        if (index > -1) {
            colours.splice(index, 1);
            console.log("item " + colour + " has been deleted");
        }
        else {
            console.log("item not found: " + colour);
        }
        return colours.length;
    }
    addColour("blue");
    addColour("red");
    addColour("orange");
    listAllColours();
    deleteColours("orange");
    listAllColours();
}
