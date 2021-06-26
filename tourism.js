
var date= new Date();
var hour= date.getHours();

if(hour<12 && hour>9) {
    alert("Hey Good morning, let's start our journey");
}
if(hour>12 && hour<13) {
    alert("Afternoon, grab your lunch");
}
if(hour>12 && hour<20) {
    alert("We hope you are enjoying")
} 
if(hour>21) {
    alert("Time to sleep!")
}