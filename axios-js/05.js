const axios = require("axios");

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/invalid"
];

Promise.allSettled(urls.map(url => axios.get(url)))
    .then(results => {
        results.forEach((result, index) => {
            console.log(
                index + 1,
                result.status,
                result.status === "fulfilled"
                    ? result.value.data
                    : result.reason.message
            );
        });
    });
