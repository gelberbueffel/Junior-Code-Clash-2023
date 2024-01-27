<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(200);
        echo "Thank you for applying to the newsletter! We will send you an update, when someone posted a new article.";
        file_put_contents("newsletter.txt", $email . PHP_EOL, FILE_APPEND);
    } else {
        http_response_code(400);
        echo "Your email address could not be found. Please look at it again.";
        file_put_contents("newsletter.txt", "A wrong email was the input." . PHP_EOL, FILE_APPEND);
    }
} else {
    http_response_code(405);
    echo "Your registration has failed because of an unknown reason.";
    file_put_contents("newsletter.txt", "Some kind of error occured?" . PHP_EOL, FILE_APPEND);
}
?>
