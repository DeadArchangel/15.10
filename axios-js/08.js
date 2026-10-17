const axios = require("axios");

const URL = "https://jsonplaceholder.typicode.com/todos";

async function getTasks() {
    const response = await axios.get(URL, { params: { _limit: 5 } });
    return response.data;
}

async function createTask(title) {
    const response = await axios.post(URL, {
        title, completed: false, userId: 1
    });
    return response.data;
}

async function updateTask(id, title) {
    const response = await axios.patch(URL + "/" + id, { title });
    return response.data;
}

async function deleteTask(id) {
    await axios.delete(URL + "/" + id);
    return "Задача удалена";
}

async function main() {
    try {
        console.log("Список:", await getTasks());
        console.log("Создание:", await createTask("Изучить JS"));
        console.log("Изменение:", await updateTask(1, "Изучить Axios"));
        console.log(await deleteTask(1));
    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}

main();
