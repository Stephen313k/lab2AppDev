function str_len(value) {
    var num = value.length;
    return num;
}
function str_len_nospaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log("String length with spaces and all is: " + str_len("test 1"));
console.log("String length with spaces not included in the count: "
    + str_len_nospaces("test 1"));
function str_len_both(value, spaces) {
    //note ? for optional parameter,
    //so will default to false due to
    //code in the function, but I could
    //change from optional and provide
    //a default to the parameter by writing
}
//note ? for optional parameter,
//so will default to false due to
//code in the function, but I could
//change from optional and provide
//a default to the parameter by writing
