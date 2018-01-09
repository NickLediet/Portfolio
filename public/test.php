

<?php
  if(isset($_GET["someValue"])) {
    echo json_encode([
      "name" => "steve",
      "age" => 201
    ]);
  }

