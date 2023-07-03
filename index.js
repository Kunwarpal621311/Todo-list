const input = document.getElementById("input-text");
const list_con = document.getElementById("list-con");

// localStorage.setItem("data","")


function add(){
    if(input.value==""){
        alert("Enter somthing");

        }
    else{          
        let list = document.createElement("li");
             list.innerHTML=input.value;
             let span = document.createElement("span");
             span.innerHTML = "\u00d7";
             list.appendChild(span);
            

             list_con.appendChild(list);
    }
    input.value="";
    savedata(); 
}

list_con.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "green";
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
},false);


function savedata(){
    localStorage.setItem("data", list_con.innerHTML);
}

function showdata(){
    list_con.innerHTML = localStorage.getItem("data");
}

list_con.addEventListener("dblclick",(e)=>{
    if(e.target.tagName === "LI"){
    list.innerHTML="";
    let input = document.createElement("input");
    list.appendChild(input);
    }
});
showdata();