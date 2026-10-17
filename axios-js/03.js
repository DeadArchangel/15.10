const axios = require("axios");

async function createUser() {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            { name: "Alex", email: "alex@example.com" }
        );

        console.log(response.data);
    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}

createUser();
