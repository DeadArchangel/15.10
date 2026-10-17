const axios = require("axios");

async function getData() {
    try {
        const results = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/todos")
        ]);

        results.forEach(result => console.log(result.data));
    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}

getData();
