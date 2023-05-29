let b=[];
let i=0;
while(i<10){
    b.push(i+1);
    i++;
}
console.log(b);
// console.log("Even numbers :");
// for(i=0;i<10;i++){
//     if(b[i]%2==0){
//         console.log(b[i]);
//     }

// }
for(i=0;i<10;i++){
    let j=2;
    let count=0;
    while(j<=Math.sqrt(b[i])){
        if(b[i]%j==0)
            count++;
        j++;
    }
    if(count==0 && b[i]!=1){
        console.log(b[i]);
    }
}