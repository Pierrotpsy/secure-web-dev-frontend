<script>
    /** @type {import('./$types').ActionData} */
</script>
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<div id="form-wrap">
    <h2>Login</h2>
    <form id="form" method="POST">
        <fieldset>
            <input type="text" id="username" name="username" placeholder="Username" required><i class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="password" id="password" name="password" placeholder="Password" required><i class="validation"><span></span><span></span></i>
        </fieldset>
        <button type="submit" id="login" value="Login">Login</button>
    </form>
    <div id="create-account-wrap">
        <a href="/register">Create an account</a>
    </div>
</div>
</body>