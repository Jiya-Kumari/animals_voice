///teachablemachine.withgoogle.com/models/hnmm7ggTg/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    }) ;
    classifier=ml5.soundClassifier('/teachablemachine.withgoogle.com/models/hnmm7ggTg/model.json',modelReady);
}
function modelReady(){
    console.log("model is loaded");
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log("got the results");
    
}
function gotResults(error,results){
    console.log(results);
    console.log("got the results");
    random_red=Math.floor(Math.random()*255);
    random_green=Math.floor(Math.random()*255);
    random_blue=Math.floor(Math.random()*255);
document.getElementById("result_label").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
document.getElementById("result_confidence").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
img1=document.getElementById("cat");
img2=document.getElementById("cow");
img3=document.getElementById("dog");
if(results[0].label=="clap"){
    img1.src="cow.png";
}else if(results[0].label=="drum"){
    img1.src="dog.jpg";
}else if(results[0].label=="whitle"){
    img1.src="cat";
}
}
