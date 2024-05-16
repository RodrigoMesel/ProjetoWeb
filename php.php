<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./Style/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProjetoWeb</title>
</head>
<body style="margin: 0px">
    <div class="container">

        <div class="header">
            <div class="headerButtons">
                <p class="hbutton"> <a href="index.html"> Home </a> </p>
                <p class="hbutton"> <a href="projetos.html" id="proj"> Projetos </a> </p>
                <p class="hbutton"> <a href="contato.html" id="contact"> Contato </a> </p>
                <p class="hbutton"> <a href="php.php" id="php"> PHP </a></p>
            </div>

            <div class="language">
                <button id="port"> pt </button>
                <button id="eng"> en </button>
            </div>
        </div>

        <div class="php-content">
            
            <h3>Brinque com php</h3>

            <form action="php.php" method="POST" >
                <div class="form">
                    <div class="formItem">
                        Nome: <input type="text" name="name" class="input">
                    </div>
                    
                    <div class="formItem">
                        E-mail: <input type="text" name="email" class="input">
                    </div>

                    <div class="formItem">
                        Cartão: <input type="text" name="creditCard" class="input">
                    </div>

                </div>

                <input type="submit" class="submit">
            </form>

            <?php
                $name = isset($_POST["name"]) ? $_POST["name"] : '';
                $email = isset($_POST["email"]) ? $_POST["email"] : '';
                $creditCard = isset($_POST["creditCard"]) ? $_POST["creditCard"] : '';
            ?>

            Bem vindo <?php echo htmlspecialchars($name); ?><br><br>
            Seu email é: <?php echo htmlspecialchars($email); ?><br><br>
            Cartão: <?php echo htmlspecialchars($creditCard); ?>

        </div>

    </div>

    <script src="src/projetos.js"></script>
</body>
</html>


