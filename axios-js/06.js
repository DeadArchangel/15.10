const axios = require("axios");

async function getUsers(url, ms) {
    try {
        const response = await axios.get(url, { timeout: ms });
        console.log(response.data);
    } catch (error) {
        console.log(
            error.code === "ECONNABORTED"
                ? "Время ожидания истекло"
                : error.message
        );
    }
}

getUsers("https://jsonplaceholder.typicode.com/users", 3000);
