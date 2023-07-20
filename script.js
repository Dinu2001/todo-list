var bottomSide = document.querySelector(".bottom-side");
var submit = document.querySelector(".submit");
submit.addEventListener("click",function(){
    var input = document.getElementById("text-todo").value;
    if(input ==""){
        alert("Enter valid To-Do");
    }else{
        var div = document.createElement("div");
        div.classList.add("todos");
        bottomSide.appendChild(div);
        var para = document.createElement("p");
        para.classList.add("text");
        div.appendChild(para);
        var span = document.createElement("span");
        span.classList.add("delete");
        para.innerHTML = input;
        div.appendChild(span);
        
    }

    document.getElementById("text-todo").value = "";
});

bottomSide.addEventListener("click",function(e){
    if(e.target.classList.contains('text')){
        e.target.parentElement.classList.toggle("clicked");
        var deleteBtn = document.querySelector(".delete");
        deleteBtn.addEventListener("click",function(e){
            e.target.parentElement.remove();
        });
        
    }
})