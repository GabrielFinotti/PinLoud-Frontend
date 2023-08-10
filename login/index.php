<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.
    3.1/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+
     VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
     crossorigin="anonymous">
     <style>
        body{
            background-color: skyblue;
        }

        .login{
            width: 100%;
            height: 100vh;
            align-items: center;
            justify-content: center;
            display: flex;
        }
     </style>

</head>
<body>
    <div class="container">
        <div class="rom">
            <div class="col-lg-4 offset- lg-4">
                <div class="card">
                <div class="card-body">
                    <h3>Login</h3>
                </div>
                    <div class="card-body">
                <form action="login.php"
                method="POST">
                    <div>
                        <div class="mb-3">
                            <label>E-mail</label>
                            <input type="text"
                            name="usuario"
                            class="form-control">
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                        <label>Senha</label>
                            <input type="Password"
                            name="senha"
                            class="form-control">  
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <button type="submit"
                            class="bt
                            btn-primary">Entrar</button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        </div>
    </div>
</body>
</html>