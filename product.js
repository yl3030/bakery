
var product1_1 = {name:"甜蜜草莓", price:250, amount:0};
var product1_2 = {name:"水果派對", price:200, amount:0};
var product1_3 = {name:"巧克力蛋糕", price:150, amount:0};
var product1_4 = {name:"藍莓蛋糕", price:100, amount:0};

$("#btn1-1").click(function(){
    var num = document.getElementById("num1-1").value;
    var pNum = parseInt(num);
    product1_1.amount=product1_1.amount+pNum;
    console.log(product1_1.amount);
    product1_1.price = product1_1.price*product1_1.amount;
    console.log(product1_1.price);
    var clear = 0;
    document.getElementById("num1-1").value=clear;
    clear.innerHTML;
})

$("#btn1-2").click(function(){
    var num = document.getElementById("num1-2").value;
    var pNum = parseInt(num);
    product1_2.amount=product1_2.amount+pNum;
    console.log(product1_2.amount);
    product1_2.price = product1_2.price*product1_2.amount;
    console.log(product1_2.price);
    var clear = 0;
    document.getElementById("num1-2").value=clear;
    clear.innerHTML;
})

$("#btn1-3").click(function(){
    var num = document.getElementById("num1-3").value;
    var pNum = parseInt(num);
    product1_3.amount=product1_3.amount+pNum;
    console.log(product1_3.amount);
    product1_3.price = product1_3.price*product1_3.amount;
    console.log(product1_3.price);
    var clear = 0;
    document.getElementById("num1-3").value=clear;
    clear.innerHTML;
})

$("#btn1-4").click(function(){
    var num = document.getElementById("num1-4").value;
    var pNum = parseInt(num);
    product1_4.amount=product1_4.amount+pNum;
    console.log(product1_4.amount);
    product1_4.price = product1_4.price*product1_4.amount;
    console.log(product1_4.price);
    var clear = 0;
    document.getElementById("num1-4").value=clear;
    clear.innerHTML;
})