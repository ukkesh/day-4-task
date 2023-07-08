// odd numbers using IIFE
(function(a){
    var a1="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            a1+=a[i]
        }
    }
    a1+=a[a.length-1]
    console.log(a1);
})([10,21,30,41,50,61]);


//odd numbers using anonymous
var a=function(a1){
    var b="";
    for(i=0;i<a1.length-1;i++){
    if(a1[i]%2!==0)
    {
        b+=a1[i];
    }
}
    b+=a1[a1.length-1];
    
}console.log(a([10,21,30,41,50,61]))

//-------------------------------------------------------------------------------------------------------------------

// prime numbers using anonymous

var a=function(a1){
    var result="";
    for(i=0;i<a1.length;i++)
    {
        var b=0;
        for(j=1;j<=a1[i];j++)
        {
            if(a[i]%j==0)
            {
                b++
            }
        }
        if(b==2)
        {
            result+=a[i]
        }
    }
    return result;
}console.log([1,2,3,4,5,6,7,8,9,10,11,12,13])

//prime number iife

(function(a){
    var a1="";
    for(i=0;i<a.length;i++)
    {
        var b=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j==0)
            {
                b++
            }
        }
        if(b==2)
    {
        a1=a[i]
    }
    }console.log(a1);

})([1,2,3,4,5,6,7,8,9,10,11,12,13]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//string to title caps anonymous

var a=function(a1){
    var result=a1.tolowercase().split("");
    for(var i=0;i<result.length;i++){
        result[i]=result[i][0].touppercase()+ result[i].slice(1);


    }
    result.join("");
    var b="";
    for(let i=0;i<result.length-1;i++)
    {
        b+=result[i]
    }
    b+=result[result.length-1]
    return b;
}console.log(a("b49 tamil batch"));


//string to title caps iife

(function(a){
    var a1 = a.tolowercase().split("");
    for(var i=0;i<a1.length;i++){
        a1[i]=a1[i][0].touppercase()+a1[i].slice(1);
    }
a1.join("");
var result="";
for(let i=0; i<a1.length-;i++)
{
    result+a1[i]
}
result+a1[a1.length-1]
console.log(result)}
)("b49 tamil batch");

//------------------------------------------------------------------------------------------------------------------------------------------------

//rotate iife
(function(a,b){
    c=a.length;
d=[];
e="";
for(i=0;i<c;i++)
{
    d[(i+b)%(c)]=a[i]
}
for(i=0;i<d.length-1;i++)
{
    e+=d[i]
}
e+=d[d.length-1]
console.log(e);
})([3,5,7,9,5,1],1);


//anonymous rotate 

var a=function(a1,b){
    c=a1.length;
d=[];
e="";
for(i=0;i<c;i++)
{
    d[(i+b)%(c)]=a1[i]
}
for(i=0;i<d.length-1;i++)
{
    e+=d[i]
}
e+=d[d.length-1]
return e;
}console.log(a[3.5,7,9,5,1],2)

//----------------------------------------------------------------------------------------------------------------------------------------------

//anonymous palindrome

var a=function(a1){
    var result="";
    var fun ="";
    for(i=0;i<a1.length;i++)
    {
        result+=a1[i];
        var pal=0
        for(j=0;j<result.length;j++)
        {
            if(result[j]==result[((result.length-1)-j)])
            {
                pal++
            }
        }
         if(pal==result.length)
         {
           fun+=result
         }
     result="";
    }  
  return fun;
}console.log(a([2112,111,"wow","mom"]))


//iife-

(function(a){
    var result="";
    var fun="";
    for(i=0i<a.length;i++)
    {
        result+=a[i];
        var pal=0
        for(j=0;j<result.length;j++)
        {
            if(result[j]==result[((result.length-1)-j)])
            {
                pal++
            }
        }
        if(pal==result.length)
        {
            fun+=result
        }
        result="";
    }
    console.log(fun);

})([2112,111,"wow","mom"]);

//-------------------------------------------------------------------------------------------------------------------------------------------

//duplicate
var a=function(a1){
    var b=[];
    var c=a1.length;
    for(let i=0;i<c-1;i++)
    {
        for(let j=i+1;j<c;J++)
        {
            if(a1[i]===a1[j])
            {
                delete a1[j]
            }
        }
    }
for(let i=0;i<a1.length;i++)
{
    if(a1[i]%10===Math.floor(a1[i]%10))
    {
        b.push(a1[i])
    }
}
let d=""
for(let i=0;i<b.length-1;i++)
{
    d+=b[i];

}
d+=b[b.length-1];
 return d;
}console.log(a([12,10,12,49,49,10]]));


//iife

(function(a){
    var b=[];
    var c=a.length;
    for(let i=0;i<c-1;i++)
    {
        for(let j=i+1;j<c;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
let d=""
for(let i=0;i<b.length-1;i++)
{
    d+=b[i]
}
d+=b[b.length-1];
console.log(d);
})([10,20,30,10,20,30]);

//----------------------------------------------------------------------------------------------------------------------------------------------

// sum  anonymous

var a= function(a1){
    var b=0;
    for (i=0;i<a1.length;i++){
        b+=a1[i]
    }
    return b;
}console.log(a[10,50,100,150,200])


// sum iife

(function(a){
    var a1=0;
    for(i=0;i<a.length;i++)
    {
        a1+=a[i]
    }
    console.log(a1);
})([10,50,100,150,200]);

//-----------------------------------------------------------------------------------------------------------------------------------------------

// median anonymous
var med = function(a,b){
    var c=[];
    var d=a.length;
    var e=b.length;
    var f=0;
    var g=0;
    var arr=0;
    while(f<d&&g<e)
    {
        ifa[f]<b[g]
        {
            c.push(a[f])
            f++
        }
        else
        {
            c.push(b[g])
            g++
        }
    }
    if(f<d)
    {
        for(let k=f;k<d;k++)
        {
            c.push(a[k])
        }

    }
    else if(g<e)
    {
        for(let m=g;m<e;m++)
        {
            c.push(b[m])
        }
    }
    if(c.length%2==0)
    {
        arr=(c[(c.length/2)-1]+c[c.length/2])/2
    }
    else
    {
        arr=(c[Math.floor(c,length/2)])
    }
    return arr;
}console.log(med([1,2,3,4],[5,6,7,8]));


//iife

(function(a,b)
{
    var c[];
    var d=a.length;
    var e=b.length;
    var f=0;
    var g=0;
    var arr=0;
    while(f<d&&g<e)
    {
        if(a[f]<b[f])
        {
            c.push(a[f])
            f++
        }
        else
        {
            c.push(b[g])
            g++
        }

    }
    if(f<d)
    {
        for(let i=f;i<d;i++)
        {
            c.push(a[i])
        }
    }
    if(c.length%2==0)
    {
        arr=(c[(c.length/2)-1]+c[c.length/2])/2
    }
    else
    {
        arr=c[Math.floor(c.length/2)]
    }
    console.log(arr)

})([1,2,3,4][5,6,7,8]);