function ImageProcessing() {
    setTimeout(function () {
        console.log("Reading Image 1");
        Test();

    },0);

    function Test(){
        setTimeout(function () {
            console.log("Reading Image 2");
        },0);

    }
    console.log("Processing....");

}

function ReadFile() {
    console.log("File was Read");

}

function getData() {
    console.log("function got data")
    
}
ImageProcessing();//ASYNC Function
ReadFile();
getData();