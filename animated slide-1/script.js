

let Image = ['pic (1).jpg','pic (2).jpg','pic (3).jpg',];
let index = 0;

let img = document.getElementById("img");

// setInterval(change,2000);
// function change(){
//     index++;
    
//     if(index >= Image.length){
//         index = 0;
//         img.src = Image[index];
//     }
//     else{
//         img.src = Image[index];
//     }
// }

//ES-6
setInterval(() => {
    index++;
    
    if(index >= Image.length){
        index = 0;
        img.src = Image[index];
    }
    else{
        img.src = Image[index];
    }
},2000);
