let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn =  document.createElement('button');
    delBtn.innerText = "\u00d7";
    // delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";

    // item.appendChild(span);
    console.log(inp.value);
    inp.value = "";
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    } 
})
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        let par = this.parentElement;
        par.remove();
    })
}
