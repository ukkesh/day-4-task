//odd numbers

var a=(b)=>{
    let arr=[];
    for (let i=0;i<b.length;i++)
    {
        if(b[i]%2!=0)
        {
            arr.push(b[i]);
        }
    }
    return arr;
}
console.log(a([1,5,9,7,5,3]))

//---------------------------------------------------------------------------

// title caps

var title = (a)=>{
    a=a.toLowerCase().split('');
    for(var i=0;i<a.length;i++)
    {
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
    }
    return a.join('');

}console.log(title("b49 tamil batch"));

//----------------------------------------------------------------------------

// sum

var a=[];
var b = 0;
var c=(a)=>{
    for(var i=0;i<a.length;i++)
    {
        b=b+a[i];
    }
    return b;
}console.log(c([1,5,9,7,5,3]));

//-----------------------------------------------------------------------------------

//prime

var a=(a1)=>{
    var b="";
    for(i=0;i<a1.length;i++)
    {
        var prm=0;
        for(j=1;j<=a1[i];j++)
        {
            if(a1[i]%j===0)
            {
                prm++
            }
        }
        if(prm==2)
        {
            b+=a1[i]

        }
    }
    return b;
}
console.log(a([1,5,9,7,3]))

//--------------------------------------------------------------------------------------

// palindrome

var a=(a1)=>{
    var b="";
    var c="";
    for(i=0;i<a1.length;i++)
    {
        b+=a1[i];
        var pal=0;
        for(j=0;j<b.length;j++)
        {
            if(b[j]===b[((b.length-1)-j)])
            {
                pal++
            }
        }
        if(pal===b.length)
        {
            c+=b
        }
        b="";
    }
    return c;
}
console.log(a(["wow","mom",1221,2002]))