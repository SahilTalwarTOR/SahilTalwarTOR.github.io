 console.log("Working v3");
var hover = false;
document.addEventListener("DOMContentLoaded", () => {
    console.log("Printed");
    document.getElementById("letterS").addEventListener("mouseover", (event) => {
        hover = true;
        console.log("Went over");
        setTimeout(() => {
            
        }, 500);
        console.log("after 0.5s")
       document.getElementById("letterS").tooltip(true)


    });
    document.getElementById("letterS").addEventListener("mouseout", (event) => {
        hover = false;
        console.log("hover is false");
    })
    
});
