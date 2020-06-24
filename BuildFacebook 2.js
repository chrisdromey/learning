//create the data//

var database = [
    {
        username: "Lucy",
        password: "IloveJS",
    },
    {
        username: "Carmen",
        password: "neighbour",
    },
    {
        username: "Ingrid",
        password: "neigh",
    }
];

var newsFeed = [
    {
        username: "Vee",
        timeline: "I love Lucy",
    },
    {
        username: "Count Duckula",
        timeline: "Quack",
    } 
];

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);  
    } else {
        alert("Sorry wrong username and password");
    }
}

userNamePrompt = prompt("What is your username?");
passwordPrompt = prompt("What is your password?");

//now we must call the function - the parameters must match the arguments that the signIn function is wanting//
signIn(userNamePrompt, passwordPrompt);
