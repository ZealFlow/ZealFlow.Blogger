<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <div id="app">
        <button class="btn-open">click me!</button>

        <div class="form hide">
            <div class="form__login">
                <p class="form__login--logo">
                    <i class="fa-regular fa-gem"></i>
                    Squirrel Blog
                </p>

                <h2 class="form__login--title">Log in</h2>
                <p class="form__login--p">Continute your design journey with Clarity</p>

                <div class="form__login--input">
                    <p>Email address</p>
                    <div class="form__login--input-email"><input type="email" id="email"></div>
                </div>

                <div class="form__login--input">
                    <p>Password</p>
                    <div class="form__login--input-password">
                        <input type="password" id="password">
                        <div class="form__login--eye"><i class="fa-regular fa-eye-slash"></i></div>
                    </div>
                    <span>Forgot password</span>
                </div>

                <div class="form__login--check">
                    <input type="checkbox" id="checkbox"/>
                    <label for="checkbox">Remember me for 30 days</label>
                </div>

                <button class="btn-login">Log in</button>

                <div class="form__login--help">
                    <p>Don't have a Clarity account? <a href="./register.html">Register now</a></p>
                </div>
            </div>
        </div>
    </div>

    <script src="./main.js"></script>
</body>
</html>