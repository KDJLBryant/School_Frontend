const harry = {
    name: "Harry potter",
    hair: "black"
};
const hermoine = {
    name: "Hermoine Granger",
    hair: "brown"
};
const ron = {
    name: "ronald weasley",
    hair: "red"
};

const array = [harry, hermoine, ron]

let list = document.getElementById("list")

array.forEach(item => {
    let listItem = document.createElement("li")
    listItem.textContent = item.name
    listItem.style.color = item.hair

    list.appendChild(listItem)
});