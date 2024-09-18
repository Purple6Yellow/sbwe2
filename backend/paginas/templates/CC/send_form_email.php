<!--BASIS met geen foto -->
<!DOCTYPE html>
<html lang="nl">

    <head>
        <title> Stichting Behoud Waardevol Erfgoed</title>
        <meta charset = "utf-8">

        <!-- PHP code??? --> 
        <meta http-equiv=""  content=""> 

        {% load static %}
        <!-- Style CSS--> 
        <link rel="stylesheet" type="text/css" href="{% static 'css/basewebLaptop.css' %}">

        <!-- MediaQuery . viewport  (browser weet nu op welke breedte het moet worden afgebeeld)-->
        <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    </head>

  <body>
      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verkrijg de gegevens van het formulier
        $naam = $_POST['naam'];
        $email = $_POST['email'];
        $bericht = $_POST['bericht'];

        // E-mailontvanger
        $ontvanger_email = "stichtingbwe@gmail.com";

        // Onderwerp en bericht voor de e-mail
        $onderwerp = "Nieuw formulier ingediend";
        $bericht_body = "Naam: $naam\n";
        $bericht_body .= "E-mail: $email\n";
        $bericht_body .= "Bericht:\n$bericht";

        // E-mail headers
        $headers = "From: $naam <$email>";

        // E-mail verzenden
        mail($ontvanger_email, $onderwerp, $bericht_body, $headers);

        // Doorverwijzen naar een bedankpagina
        header('Location: bedankpagina.html');
      }
      ?>
    </body>
  </html>


  <form method ="get" enctype="multipart/form-data" action="mailto:stichtingbwe@gmail.com">
            <form action="send_form_email.php" method="post">
                <label for="naam">Naam:</label><br>
                <input type="text" id="naam" name="naam"><br>
                <label for="email">E-mail:</label><br>
                <input type="email" id="email" name="email"><br>
                <label for="bericht">Bericht:</label><br>
                <textarea id="bericht" name="bericht"></textarea><br><br>
                <input type="submit" value="Verzenden">
            </form>
            </form>
  </div>
