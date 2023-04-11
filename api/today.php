<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$db = new SQLite3('./scripts/birds.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);
if ($db == False) {
    echo "Database is busy";
    header("refresh: 0;");
}

$statement = $db->prepare('SELECT * FROM detections WHERE Date == DATE(\'now\', \'localtime\')');
if ($statement == False) {
    echo "Database is busy";
    header("refresh: 0;");
}

$result = $statement->execute();

$detections = array();

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $detections[] = $row;
}

echo json_encode($detections);


?>
