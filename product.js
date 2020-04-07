var tPrice = 0;

// 生日蛋糕
var product1_1 = { name: "甜蜜草莓", price: 250, amount: 0, total: 0 };
var product1_2 = { name: "水果派對", price: 200, amount: 0, total: 0 };
var product1_3 = { name: "巧克力蛋糕", price: 150, amount: 0, total: 0 };
var product1_4 = { name: "藍莓蛋糕", price: 100, amount: 0, total: 0 };

$("#btn1-1").click(function () {
	var num = document.getElementById("num1-1").value;
	var pNum = parseInt(num);
	product1_1.amount = product1_1.amount + pNum;
	product1_1.total = product1_1.price * product1_1.amount;
	var clear = 0;
	document.getElementById("num1-1").value = clear;
	clear.innerHTML;
	document.getElementById("name1-1").innerHTML = product1_1.name;
	document.getElementById("amount1-1").innerHTML = product1_1.amount;
	document.getElementById("price1-1").innerHTML = product1_1.price;
	tPrice = tPrice + product1_1.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn1-2").click(function () {
	var num = document.getElementById("num1-2").value;
	var pNum = parseInt(num);
	product1_2.amount = product1_2.amount + pNum;
	product1_2.total = product1_2.price * product1_2.amount;
	var clear = 0;
	document.getElementById("num1-2").value = clear;
	clear.innerHTML;
	document.getElementById("name1-2").innerHTML = product1_2.name;
	document.getElementById("amount1-2").innerHTML = product1_2.amount;
	document.getElementById("price1-2").innerHTML = product1_2.total;
	tPrice = tPrice + product1_2.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn1-3").click(function () {
	var num = document.getElementById("num1-3").value;
	var pNum = parseInt(num);
	product1_3.amount = product1_3.amount + pNum;
	product1_3.total = product1_3.price * product1_3.amount;
	var clear = 0;
	document.getElementById("num1-3").value = clear;
	clear.innerHTML;
	document.getElementById("name1-3").innerHTML = product1_3.name;
	document.getElementById("amount1-3").innerHTML = product1_3.amount;
	document.getElementById("price1-3").innerHTML = product1_3.total;
	tPrice = tPrice + product1_3.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn1-4").click(function () {
	var num = document.getElementById("num1-4").value;
	var pNum = parseInt(num);
	product1_4.amount = product1_4.amount + pNum;
	product1_4.total = product1_4.price * product1_4.amount;
	var clear = 0;
	document.getElementById("num1-4").value = clear;
	clear.innerHTML;
	document.getElementById("name1-4").innerHTML = product1_4.name;
	document.getElementById("amount1-4").innerHTML = product1_4.amount;
	document.getElementById("price1-4").innerHTML = product1_4.total;
	tPrice = tPrice + product1_4.total;
	document.getElementById("total").innerHTML = tPrice;
});

// 美味麵包
var product2_1 = { name: "巧克力甜甜圈", price: 250, amount: 0, total: 0 };
var product2_2 = { name: "愛心牛角", price: 200, amount: 0, total: 0 };
var product2_3 = { name: "番茄火腿", price: 150, amount: 0, total: 0 };
var product2_4 = { name: "獨家菠蘿", price: 100, amount: 0, total: 0 };

$("#btn2-1").click(function () {
	var num = document.getElementById("num2-1").value;
	var pNum = parseInt(num);
	product2_1.amount = product2_1.amount + pNum;
	product2_1.total = product2_1.price * product2_1.amount;
	var clear = 0;
	document.getElementById("num2-1").value = clear;
	clear.innerHTML;
	document.getElementById("name2-1").innerHTML = product2_1.name;
	document.getElementById("amount2-1").innerHTML = product2_1.amount;
	document.getElementById("price2-1").innerHTML = product2_1.total;
	tPrice = tPrice + product2_1.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn2-2").click(function () {
	var num = document.getElementById("num2-2").value;
	var pNum = parseInt(num);
	product2_2.amount = product2_2.amount + pNum;
	product2_2.total = product2_2.price * product2_2.amount;
	var clear = 0;
	document.getElementById("num2-2").value = clear;
	clear.innerHTML;
	document.getElementById("name2-2").innerHTML = product2_2.name;
	document.getElementById("amount2-2").innerHTML = product2_2.amount;
	document.getElementById("price2-2").innerHTML = product2_2.total;
	tPrice = tPrice + product2_2.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn2-3").click(function () {
	var num = document.getElementById("num2-3").value;
	var pNum = parseInt(num);
	product2_3.amount = product2_3.amount + pNum;
	product2_3.total = product2_3.price * product2_3.amount;
	var clear = 0;
	document.getElementById("num2-3").value = clear;
	clear.innerHTML;
	document.getElementById("name2-3").innerHTML = product2_3.name;
	document.getElementById("amount2-3").innerHTML = product2_3.amount;
	document.getElementById("price2-3").innerHTML = product2_3.total;
	tPrice = tPrice + product2_3.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn2-4").click(function () {
	var num = document.getElementById("num2-4").value;
	var pNum = parseInt(num);
	product2_4.amount = product2_4.amount + pNum;
	product2_4.total = product2_4.price * product2_4.amount;
	var clear = 0;
	document.getElementById("num2-4").value = clear;
	clear.innerHTML;
	document.getElementById("name2-4").innerHTML = product2_4.name;
	document.getElementById("amount2-4").innerHTML = product2_4.amount;
	document.getElementById("price2-4").innerHTML = product2_4.total;
	tPrice = tPrice + product2_4.total;
	document.getElementById("total").innerHTML = tPrice;
});

// 喜餅禮盒
var product3_1 = { name: "純潔的愛", price: 250, amount: 0, total: 0 };
var product3_2 = { name: "情深不知幾何", price: 200, amount: 0, total: 0 };
var product3_3 = { name: "藍色和你", price: 150, amount: 0, total: 0 };
var product3_4 = { name: "Love", price: 100, amount: 0, total: 0 };

$("#btn3-1").click(function () {
	var num = document.getElementById("num3-1").value;
	var pNum = parseInt(num);
	product3_1.amount = product3_1.amount + pNum;
	product3_1.total = product3_1.price * product3_1.amount;
	var clear = 0;
	document.getElementById("num3-1").value = clear;
	clear.innerHTML;
	document.getElementById("name3-1").innerHTML = product3_1.name;
	document.getElementById("amount3-1").innerHTML = product3_1.amount;
	document.getElementById("price3-1").innerHTML = product3_1.total;
	tPrice = tPrice + product3_1.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn3-2").click(function () {
	var num = document.getElementById("num3-2").value;
	var pNum = parseInt(num);
	product3_2.amount = product3_2.amount + pNum;
	product3_2.total = product3_2.price * product3_2.amount;
	var clear = 0;
	document.getElementById("num3-2").value = clear;
	clear.innerHTML;
	document.getElementById("name3-2").innerHTML = product3_2.name;
	document.getElementById("amount3-2").innerHTML = product3_2.amount;
	document.getElementById("price3-2").innerHTML = product3_2.total;
	tPrice = tPrice + product3_2.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn3-3").click(function () {
	var num = document.getElementById("num3-3").value;
	var pNum = parseInt(num);
	product3_3.amount = product3_3.amount + pNum;
	product3_3.total = product3_3.price * product3_3.amount;
	var clear = 0;
	document.getElementById("num3-3").value = clear;
	clear.innerHTML;
	document.getElementById("name3-3").innerHTML = product3_3.name;
	document.getElementById("amount3-3").innerHTML = product3_3.amount;
	document.getElementById("price3-3").innerHTML = product3_3.total;
	tPrice = tPrice + product3_3.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn3-4").click(function () {
	var num = document.getElementById("num3-4").value;
	var pNum = parseInt(num);
	product3_4.amount = product3_4.amount + pNum;
	product3_4.total = product3_4.price * product3_4.amount;
	var clear = 0;
	document.getElementById("num3-4").value = clear;
	clear.innerHTML;
	document.getElementById("name3-4").innerHTML = product3_4.name;
	document.getElementById("amount3-4").innerHTML = product3_4.amount;
	document.getElementById("price3-4").innerHTML = product3_4.total;
	tPrice = tPrice + product3_4.total;
	document.getElementById("total").innerHTML = tPrice;
});

// 彌月蛋糕
var product4_1 = { name: "房子餅乾", price: 250, amount: 0, total: 0 };
var product4_2 = { name: "粉紅之心", price: 200, amount: 0, total: 0 };
var product4_3 = { name: "可愛小馬", price: 150, amount: 0, total: 0 };
var product4_4 = { name: "零食風暴", price: 100, amount: 0, total: 0 };

$("#btn4-1").click(function () {
	var num = document.getElementById("num4-1").value;
	var pNum = parseInt(num);
	product4_1.amount = product4_1.amount + pNum;
	product4_1.total = product4_1.price * product4_1.amount;
	var clear = 0;
	document.getElementById("num4-1").value = clear;
	clear.innerHTML;
	document.getElementById("name4-1").innerHTML = product4_1.name;
	document.getElementById("amount4-1").innerHTML = product4_1.amount;
	document.getElementById("price4-1").innerHTML = product4_1.total;
	tPrice = tPrice + product4_1.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn4-2").click(function () {
	var num = document.getElementById("num4-2").value;
	var pNum = parseInt(num);
	product4_2.amount = product4_2.amount + pNum;
	product4_2.total = product4_2.price * product4_2.amount;
	var clear = 0;
	document.getElementById("num4-2").value = clear;
	clear.innerHTML;
	document.getElementById("name4-2").innerHTML = product4_2.name;
	document.getElementById("amount4-2").innerHTML = product4_2.amount;
	document.getElementById("price4-2").innerHTML = product4_2.total;
	tPrice = tPrice + product4_2.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn4-3").click(function () {
	var num = document.getElementById("num4-3").value;
	var pNum = parseInt(num);
	product4_3.amount = product4_3.amount + pNum;
	product4_3.total = product4_3.price * product4_3.amount;
	var clear = 0;
	document.getElementById("num4-3").value = clear;
	clear.innerHTML;
	document.getElementById("name4-3").innerHTML = product4_3.name;
	document.getElementById("amount4-3").innerHTML = product4_3.amount;
	document.getElementById("price4-3").innerHTML = product4_3.total;
	tPrice = tPrice + product4_3.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn4-4").click(function () {
	var num = document.getElementById("num4-4").value;
	var pNum = parseInt(num);
	product4_4.amount = product4_4.amount + pNum;
	product4_4.total = product4_4.price * product4_4.amount;
	var clear = 0;
	document.getElementById("num4-4").value = clear;
	clear.innerHTML;
	document.getElementById("name4-4").innerHTML = product4_4.name;
	document.getElementById("amount4-4").innerHTML = product4_4.amount;
	document.getElementById("price4-4").innerHTML = product4_4.total;
	tPrice = tPrice + product4_4.total;
	document.getElementById("total").innerHTML = tPrice;
});

// 點心餐盒
var product5_1 = { name: "迪芬蛋糕", price: 250, amount: 0, total: 0 };
var product5_2 = { name: "玫瑰玫瑰我愛你", price: 200, amount: 0, total: 0 };
var product5_3 = { name: "紫羅蘭之夜", price: 150, amount: 0, total: 0 };
var product5_4 = { name: "海洋之心", price: 100, amount: 0, total: 0 };

$("#btn5-1").click(function () {
	var num = document.getElementById("num5-1").value;
	var pNum = parseInt(num);
	product5_1.amount = product5_1.amount + pNum;
	product5_1.total = product5_1.price * product5_1.amount;
	var clear = 0;
	document.getElementById("num5-1").value = clear;
	clear.innerHTML;
	document.getElementById("name5-1").innerHTML = product5_1.name;
	document.getElementById("amount5-1").innerHTML = product5_1.amount;
	document.getElementById("price5-1").innerHTML = product5_1.total;
	tPrice = tPrice + product5_1.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn5-2").click(function () {
	var num = document.getElementById("num5-2").value;
	var pNum = parseInt(num);
	product5_2.amount = product5_2.amount + pNum;
	product5_2.total = product5_2.price * product5_2.amount;
	var clear = 0;
	document.getElementById("num5-2").value = clear;
	clear.innerHTML;
	document.getElementById("name5-2").innerHTML = product5_2.name;
	document.getElementById("amount5-2").innerHTML = product5_2.amount;
	document.getElementById("price5-2").innerHTML = product5_2.total;
	tPrice = tPrice + product5_2.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn5-3").click(function () {
	var num = document.getElementById("num5-3").value;
	var pNum = parseInt(num);
	product5_3.amount = product5_3.amount + pNum;
	product5_3.total = product5_3.price * product5_3.amount;
	var clear = 0;
	document.getElementById("num5-3").value = clear;
	clear.innerHTML;
	document.getElementById("name5-3").innerHTML = product5_3.name;
	document.getElementById("amount5-3").innerHTML = product5_3.amount;
	document.getElementById("price5-3").innerHTML = product5_3.total;
	tPrice = tPrice + product5_3.total;
	document.getElementById("total").innerHTML = tPrice;
});

$("#btn5-4").click(function () {
	var num = document.getElementById("num5-4").value;
	var pNum = parseInt(num);
	product5_4.amount = product5_4.amount + pNum;
	product5_4.total = product5_4.price * product5_4.amount;
	var clear = 0;
	document.getElementById("num5-4").value = clear;
	clear.innerHTML;
	document.getElementById("name5-4").innerHTML = product5_4.name;
	document.getElementById("amount5-4").innerHTML = product5_4.amount;
	document.getElementById("price5-4").innerHTML = product5_4.total;
	tPrice = tPrice + product5_4.total;
	document.getElementById("total").innerHTML = tPrice;
});
