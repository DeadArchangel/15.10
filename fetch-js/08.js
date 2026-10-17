const URL = "https://jsonplaceholder.typicode.com/todos";

async function getTasks() {
    const response = await fetch(URL + "?_limit=5");
    if (!response.ok) throw new Error("Ошибка получения задач");
    return response.json();
}

async function createTask(title) {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false, userId: 1 })
    });

    if (!response.ok) throw new Error("Ошибка создания");
    return response.json();
}

async function updateTask(id, title) {
    const response = await fetch(URL + "/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    if (!response.ok) throw new Error("Ошибка изменения");
    return response.json();
}

async function deleteTask(id) {
    const response = await fetch(URL + "/" + id, {
        method: "DELETE"
    });

    if (!response.ok) throw new Error("Ошибка удаления");
    return "Задача удалена";
}

async function main() {
    try {
        console.log("Список:", await getTasks());
        console.log("Создание:", await createTask("Изучить JS"));
        console.log("Изменение:", await updateTask(1, "Изучить Fetch"));
        console.log(await deleteTask(1));
    } catch (error) {
        console.log(error.message);
    }
}

main();
