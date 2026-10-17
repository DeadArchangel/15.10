const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/invalid"
];

Promise.allSettled(
    urls.map(async url => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ошибка: " + response.status);
        }

        return response.json();
    })
).then(results => {
    results.forEach((result, index) => {
        console.log(index + 1, result.status, result.status === "fulfilled"
            ? result.value
            : result.reason.message);
    });
});
