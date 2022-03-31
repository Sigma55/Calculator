const btn_nb = document.querySelectorAll(".btn");
const result = document.getElementById("result")


btn_nb.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.id == "clear"){
            remove_text()
        }
        else if(e.target.id == "equal"){
            result.textContent = eval(result.textContent)
        }
        else{
            result.textContent += e.target.id
        }
        

    });

});







function remove_text(){
    result.textContent = ""
}