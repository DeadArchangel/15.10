async function getData() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/todos"
    ];

    try {
        const results = await Promise.all(
            urls.map(async url => {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Ошибка: " + response.status);
                }

                return response.json();
            })
        );

        console.log(results);
    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}

getData();
