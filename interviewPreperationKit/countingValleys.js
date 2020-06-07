
var n = 8;
var s = "UDDDUDUU";

function countingValleys(n, s)
{
    if(n==0)
        return 0;
    var sea=0;``
    var v = 0;
    var i=0;
    while(i < n) {

        if(s[i]=='U') {
            sea++;
        }
        else if(s[i]=='D') {
            
            if(sea==0)
            {
                v++;
                sea--;
            }
            else {
                sea--;
            }            
        }
        i++;
    }
    return v;
}

//console.log(s[1]=='U');
console.log(countingValleys(n,s));