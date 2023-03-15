document.getElementById("buttonValidate").addEventListener(
    "click",
    (checkIfNumber = () => {
        const inputValue = document.getElementById("password").value;
    if (isNaN(inputValue) || inputValue.trim()) {
        document.getElementById("password").className = "form-input-wrong";
        document.getElementById("notification").innerHTML = "It's not a number!";
        document.getElementById("notification").className = "notification-wrong!";
    } else {
        document.getElementById("password").className = "form-input-correct";
        document.getElementById("notification").innerHTML = "It's not number!";
        document.getElementById("notification").className = "notification-correct!";  
    }
})
);







// document.getElementById("buttonValidate").addEventListener(
//     "click",
//     (checkIfNumber = () => {
//         const inputValue = document.getElementById("formInput").value;
//         if (isNaN(inputValue) || inputValue.trim()) {
//             document.getElementById("formInput").className = "form-input-wrong!";
//             document.getElementById("notification").innerHTML = "It's not a number";
//             document.getElementById("notification").className = "notification-wrong!";
//         } else {
//             document.getElementById("formInput").className = "form-input-correct!";
//             document.getElementById("notification").innerHTML = "It's not number";
//             document.getElementById("notification").className = "notification-correct!";
//         }
//     })
// );