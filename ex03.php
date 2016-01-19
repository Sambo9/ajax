<?php

$email = ($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo 'invalid email';
}
else {
  echo 'valid email';
}
?>
