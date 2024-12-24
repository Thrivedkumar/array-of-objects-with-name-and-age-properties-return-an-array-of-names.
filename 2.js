/*Given an array of objects with name and age properties, return an array of
names.
Input:[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name:
"Charlie", age: 35 }]
Expected Output: ["Alice", "Bob", "Charlie"]*/



//var x =[{name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name:
  //  "Charlie", age: 35 }];
    //var array=x.map(y=>y.name);
//console.log(array);

var X=[{name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }];
var y=X.map(function(element,index){
    var z=element.name;
    return z;
    
});
console.log(y);
