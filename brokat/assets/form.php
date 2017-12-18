<?php
// Überprüft ob der User das Formular abgeschickt hat
        if (isset($_POST["submitwrite"])) {
        // Öfnnet die Datei in den Schreibmodus
            $handle = fopen("ausgabe.txt","a+");
        // Wenn erfolgreich dann
            if ($handle) {
        // Schreibt die Daten des Formulars in die Textdatei
                    fwrite($handle,$_POST["event"] . " - " . $_POST["vorname"] . " - " . $_POST["nachname"] . " - " . $_POST["strasse"] . " - " . $_POST["plz"] . " - " . $_POST["ort"] . " - " . $_POST["email"] . " - " . date("Y-m-d") . PHP_EOL);

        // schließt die Datei wieder
                    fclose($handle);
        // Danke-Seite mit Link zur Ausgabedatei
                    echo 'Vielen Dank. Die Ausgabedatei finden Sie unter <a href="/assets/ausgabe.txt" target="_blank">/assets/ausgabe.txt</a>';
            }
        }
?>
