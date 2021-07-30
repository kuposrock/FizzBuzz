

    var fizzbuzzlist = [];
for(var i=1; i<=100;i++){
    if(i%3==0&&i%5==0){
        fizzbuzzlist.push("FizzBuzz");
    }
    else if(i%3==0){
        fizzbuzzlist.push("Fizz");
    }
    else if(i%5==0){
        fizzbuzzlist.push("Buzz");
    }
    else{
        fizzbuzzlist.push(String(i));
    }

}

console.log(fizzbuzzlist);