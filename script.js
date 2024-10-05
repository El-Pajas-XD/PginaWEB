document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
});

