async function createUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Alex",
            email: "alex@example.com"
        })
    });

    console.log(await response.json());
}

createUser().catch(console.error);
