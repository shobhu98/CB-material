function GetApple() {
    apple=20;
    let a=new Promise(function (res,rej) {

        if(apple>40){
            res("apple are cheap");
        }
        else{
            rej("Apple are costly")
        }

    })
    return a;

}
console.log("I am in Fruit Market");
console.log("Confirm Rate");
GetApple().then(function (data) {
    console.log(data)

}).catch(function (e) {
    console.log(e);

});
