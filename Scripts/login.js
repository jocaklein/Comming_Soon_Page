const btn = document.querySelector("#submit");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");

btn.addEventListener("click", PostButton);

function PostButton() {
    console.log("Name:", fullname.value,"\n", email.value);

    if(fullname.value == "" || email.value == ""){
        alert("There are empty fields");
    }

    else if(fullname.value != "" && email.value != ""){
        alert("Thanks for the subscription "+ fullname.value + "!");
    }
};