// function ImageProcessing() {
//     setTimeout(function () {
//         console.log("Reading Image 1");
//         // Test();
//         readFile(Test);
//
//     },0);
//
//     function Test(){
//         setTimeout(function () {
//             console.log("Reading Image 2");
//         },0);
//
//     }
//     console.log("Processing....");
//
// }
//
// function ReadFile() {
//     console.log("File was Read");
//
// }
//
// function getData() {
//     console.log("function got data")
//
// }
// function readFile(test) {
//     setTimeout(function () {
//         // file Extract
//         // file Test
//         test();
//     },0);
//
//
// }
// ImageProcessing();//ASYNC Function
// ReadFile();
// getData();
ImageProcessing();

function ImageProcessing() {
    readFile("240*240",function (res) {
        console.log("Processing Ended");
        console.log(res);


    });


    console.log("Processing started");

}
function readFile(number,cb) {
    setTimeout(function () {
        console.log("Reading File");
        cb(number);

    },0);


}