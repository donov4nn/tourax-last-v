<script>
    import {fade} from 'svelte/transition'
    let username, password

    async function handleSubmit() {
        console.log("login & pass : ", username, password)
        // const resp = await fetch('https://localhost:4000/api/user/auth', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type' : 'application/json'
        //     },
        //     body : JSON.stringify({username,password})
        // })

        // const tokens = await resp.json()
        // localStorage.setItem("accessToken", JSON.stringify(tokens.AccessToken))
        // localStorage.setItem("refreshToken", JSON.stringify(tokens.RefreshToken))
    }
</script>

<form on:submit|preventDefault={handleSubmit} in:fade>
    <div>
        <label for="username">Identifiant</label>
        <input placeholder="Identifiant" id="username" type="text" bind:value={username}>
    </div>
    <div>
        <label for="password">Mot de passe</label>
        <input placeholder="Mot de passe" id="password" type="password" bind:value={password}>
    </div>
    <button type="submit">Connexion</button>
</form>