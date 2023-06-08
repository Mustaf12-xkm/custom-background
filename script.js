const boxes = document.querySelectorAll(".box");
const mainBox = document.querySelector(".main-box");
const horizontolboxes = document.querySelector(".Dugsiiye");
const input = document.querySelector(".inputfont");
const radius = document.querySelector(".radius");
const fontWeight = document.querySelector(".fontWeight");
const option = document.getElementById("font-family");



boxes.forEach(function (box) {
    box.addEventListener("click", function () {
   changeColor(box);

   });
 });



const changeColor=(color)=>{
    const boxColor=getComputedStyle(color).backgroundColor;
    mainBox.style.backgroundColor = boxColor;
}
input.addEventListener("input", ()=>{
let font=input.value;
horizontolboxes.style.fontSize = font+"px";
horizontolboxes.style.color = font;

});


radius.addEventListener("input", ()=>{
let borderradius=radius.value;
console.log(borderradius)
mainBox.style.borderRadius = borderradius+'px';


});
fontWeight.addEventListener("input", ()=>{
let fontW=fontWeight.value;

horizontolboxes.style.fontWeight = fontW;


});
// option.forEach(function(opt){
  
// });




option.addEventListener("change", (e)=>{
   let family = e.target.value
    horizontolboxes.style.fontFamily = family;

})



