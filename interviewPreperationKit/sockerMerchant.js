
var n = 9;
var arr = [10,20,20,10,10,30,50,10,20];

var obj = {};
for(var i=0; i<n; i++) {
    var temp = arr[i];
    if(obj[temp])
        obj[temp]++;
     else
        obj[temp]=1;
}

console.log(obj);

var count=0;
var objvalues = Object.values(obj);
for(var i=0; i<objvalues.length; i++)
{
    count+= parseInt(objvalues[i]/2);
}

console.log(count);

