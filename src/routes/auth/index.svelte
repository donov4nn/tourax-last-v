<script>
    let username, password

    async function handleSubmit() {
        const resp = await fetch('https://localhost:4000/api/user/auth', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({username,password})
        })

        const tokens = await resp.json()
        localStorage.setItem("accessToken", JSON.stringify(tokens.AccessToken))
        localStorage.setItem("refreshToken", JSON.stringify(tokens.RefreshToken))
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={username}>
    <input type="text" bind:value={password}>
    <button type="submit">s</button>
</form>