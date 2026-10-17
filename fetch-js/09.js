async function checkConnection() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Ошибка сервера: " + response.status);
        }

        console.log(await response.json());
    } catch (error) {
        console.log("Нет соединения или произошла сетевая ошибка:", error.message);
    }
}

checkConnection();
