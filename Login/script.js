function Login(){
    var name = $('#user').val();
    var password = $('#password').val()
    var entryDate = new Date();
    var dt = formatarData(entryDate);

    if(name && password && name === "admin" && password ==="admin"){
        const user = {
            name,
            dt,
            id: Math.floor(Math.random() * 100000)
        }

        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "../Store";
    }
    else{
        document.getElementById("container").style.display = "none";
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.border = "2px solid brown";
        document.getElementById("password").style.border = "2px solid brown";
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("user").style.border = "2px solid brown";
    document.getElementById("password").style.border = "2px solid brown";
}

function formatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}