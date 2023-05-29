let a= 10;
var b=1;
const c=2;
//console.log(a,b,c);
let d=[1,2,3,4,5];
let p={
    r : 1,
    q : 2
};
let e=[
    {
        f : 10,
        g : 20
    },
    {
        t : 5,
        s : 2
    }
];
//console.log(d,p,e);
d.push(9);
console.log(d);
d.pop();
console.log(d);
console.log("Using for loop");
for(let i=0;i<d.length;i++){
    console.log(d[i]);
}
console.log("using while");
let j=0;
while(j<d.length){
    console.log(d[j]);
    j++;
}