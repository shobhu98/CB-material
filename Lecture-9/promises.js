// function GetApple() {
//     let apple=80;
//     let a=new Promise(function (res,rej) {
//
//         if(apple>40){
//             res("apple are cheap");
//         }
//         else{
//             rej("Apple are costly")
//         }
//
//     });
//     return a;
//
// }
// console.log("I am in Fruit Market");
// console.log("Confirm Rate");
// console.log(GetApple());
// GetApple().then(function (data) {
//     console.log(data)
//
// }).catch(function (e) {
//     console.log(e);
//
// });

function readFile(name) {
    return new Promise((res,rej)=>{
        if(name===undefined){
            rej('readfile promise rejected');
        }
        res(name);

    });

}
function convertToString(data) {
    return new Promise((res,rej)=>{
        let strin=data.toString();
        res(strin);
    });

};

function splittingData(str) {
    return new  Promise((res,rej)=>{
        if(typeof(str)!=='string' ){
            rej("String in incorrect");
        }
        let arr=str.split(' ');
        res(arr);
    });



    
};


function getRidofSpace(str) {
    return new Promise((res,rej) => {
        let s = str.replace(/\s/g, '');
        res(s);
    })

};



function loop(arr){
     return new Promise((res,rej) => {
    if(typeof(arr) != 'object' || arr.length < 1) {
        rej("Array is not correct");
    }
    arr.forEach(function(data){
        console.log(data);
    });

}


let strDone = readFile('Hello World')
    .then(convertToString)
    .then(getRidofSpace)
    .then(splittingData)
    .then(loop)
    .then((data)=> console.log(data))