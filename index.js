const name= document.getElementById("name");

const tagsContainer= document.querySelector(".tags"); 

const addname=() => {

    if(name.value===""){
        return null;
    }
    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");
    tag.innerText=`Hey!! ${name.value} this side.`;

    tagsContainer.append(tag);
};