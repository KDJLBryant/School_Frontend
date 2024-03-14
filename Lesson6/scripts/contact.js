const defaultMsg = "Enter message here:"

const setDefaultMsgToHtml = () => {
    document.getElementById("msg").value = defaultMsg;    
} 

const sumbitReport = () => {
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let msgInput = document.getElementById('msg').value;

    if (nameInput.trim() === "") {
        alert("Enter your name!")
    } else if (emailInput.trim() === "") {
        alert("Enter your email!")
    } else if (msgInput.trim() === "" || msgInput === defaultMsg) {
        alert("Enter a message!")
    } else {
        alert("Report Sumbitted!")
    }
}

setDefaultMsgToHtml();