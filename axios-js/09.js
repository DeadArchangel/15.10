const axios = require("axios");

async function checkConnection() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    } catch (error) {
        if (!error.response) {
            console.log("Нет соединения или сервер недоступен");
        } else {
            console.log("Ошибка сервера:", error.response.status);
        }
    }
}

checkConnection();
