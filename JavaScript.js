const callback=(num)=>{
      
    var sqrtroot=num/2;  
    do   
    {  
       var t=sqrtroot;  
        sqrtroot=(t+(num/t))/2;  
    }   
    while((t-sqrtroot)!= 0);  
    return sqrtroot;  
}  

function map(list,squroot){
    for(var i=0;i<list.length;i++){
        const val=squroot(list[i]);
        list[i]=val;
    }
    console.log(list);
}


const checkNumber=(a)=>{
    if(a%2==0){
        return "Even number";
    }
    else{
        return "Odd number";
    }
}

function filter(list,checkNum){
    var result=[];
    for(var i=0;i<list.length;i++){
        result.push(`${checkNum(list[i])} : ${list[i]} `);
    }
    console.log(result);

}


function reduce(list,subtraction){
    for(var i=1;i<list.length;i++){
        list[i]=subtraction(list[i-1],list[i]);
    }
    console.log(list);
}


const print=(num)=>{
    console.log(num);
}

function forEach(list,print){
    for(var i=0;i<list.length;i++){
        print(list[i]);
    }

}


const list=[2,3,4,21,65,1235,784,1587,12540,122];
map(list,callback);
filter(list,checkNumber);
reduce(list,(num1,num2)=>num2-num1);
forEach(list,print);

