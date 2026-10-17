async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Ошибка: " + response.status);
        }

        console.log(await response.json());
    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}

getUsers();
