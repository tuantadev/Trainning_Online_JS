var welcom = 'xin chao moi nguoi';
var number = 1.234;
var danhsachHocVien = ['phong','banam'];
var hocvien1 = danhsachHocVien[0];
console.log('welcom');
console.log(number);
console.log(danhsachHocVien.length);
console.log(hocvien1);
var nameStudent = 'nam';
var ageStudent = 25;

var student1 = {
    name : 'Nam',
    age  : 25  
}
console.log(student1.age);
console.log(student1['age']);

// function
function gioiThieu(){
    console.log('xin chao luong');
    console.log('xin chao khai');
    console.log('xin chao nam');
}
gioiThieu();
var gioiThieu2 = gioiThieu;
gioiThieu2();

// null 
//undefined
var number1;
console.log(number1);

//true : 1, '0'.
//false : false ,'' , 0 , null , undefined, NaN
if(null){
    console.log('nhay vao true');
}else{
    console.log('nhay vao else');
}
// dao nguoc
var x = true;
var y = !x;

// var isTeacher = true;
var isTeacher = !true;
// doi kieu bat ky thanh true false !!
var teacher = !!'A';
//toan tu
// dk1 || dk2 
// dk1 && dk2 

var number = 0;
number  += 1;
number++ ;
++number;
console.log(number);

// x++ : khong de tren cung 1 hang, uu tien phep gan hoac + - * / truoc sau do moi tang x
//++x : de tren cung 1 hang duoc, uu tien tang x truoc sau do moi den phep gan
//var x = 10
//var y = x++ + x++;

//arr 
// var arr = ['a','b','c'];
// for(let i = 0;i < arr.length; i++){
//     console.log(arr[i]);
// }
// for (var i in arr){  // in la key
//     console.log(i);
// }
// for (var i of arr){  // of la value
//     console.log(i);
// }

//object
var person = {
    name : 'Nam',
    age  : 26
}


var key = 'name';
Object.name;
// Object['name']  or Object[key]

for (var i in person){  // ko dung var of  
    console.log(person[i]);
}

//break lap tuc thoat khoi vong lap gan nhat
//continue lap tuc sang mot luot lap moi


//function
var number1  = 0;
var number2  = 10;
function test(num1,num2){
    var sum = num1 + num2
    return sum;
}

var rs = test(number1, number2);
var rs = test(5,6);
console.log(rs);

//function nang cao
function test(num1,num2){
    var sum = num1 + num2
    return function(){
        console.log('hello');
    };
}

var f1 = test(); //c1 in ra
f1();
test()();   //c2 in ra

//pass by value
var money = 999
function increase(param){
    param = 1000;
}
increase(money);

//callback
//scope
//bất đồng bộ
//promise

//các method trong js
//array 
//string
//json
//try catch
//regexp

//callback : param chua function
function sangtac(cb){
    console.log('do');
    console.log('re');
    cb();
    console.log('mi');
}

sangtac(function(){
    console.log('Fa');
})

var arr = [1,4,6,8,9];
arr.filter(function(value,index){

})

//bat dong bo xem video 

//promise
new Promise(function(resolve,reject){
    readFileAsync('tailieu.txt',function(err,data){
        if(err){
            reject(888);
        }else{
            resolve(8888);
        }
    })
})
.then(function(data){

})
.catch(function(error){

})

//closures

