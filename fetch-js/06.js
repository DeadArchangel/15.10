async function getUsers(url, ms) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error("Ошибка: " + response.status);
        }

        console.log(await response.json());
    } catch (error) {
        console.log(
            error.name === "AbortError" ? "Время ожидания истекло" : error.message
        );
    } finally {
        clearTimeout(timer);
    }
}

getUsers("https://jsonplaceholder.typicode.com/users", 3000);
