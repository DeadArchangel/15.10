async function fetchRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Ошибка: " + response.status);
            }

            return await response.json();
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }

            console.log("Повторная попытка:", i + 2);
        }
    }
}

fetchRetry("https://jsonplaceholder.typicode.com/users")
    .then(console.log)
    .catch(console.error);
