<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST['name'];
$mobile = $_POST['mobile'];
$rasi = $_POST['rasi'];
$natchathiram = $_POST['natchathiram'];

$conn = new mysqli("localhost", "root", "", "future-prediction");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check duplicate mobile number
$check = $conn->prepare("SELECT id FROM users WHERE mobile = ?");
$check->bind_param("s", $mobile);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "<script>alert('இந்த மொபைல் எண் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது.'); window.location.href='index.html';</script>";
    $check->close();
    $conn->close();
    exit();
}
$check->close();

echo "<script>localStorage.setItem('username', " . json_encode($name) . ");</script>";

$stmt = $conn->prepare("INSERT INTO users (name, mobile, rasi, natchathiram) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $mobile, $rasi, $natchathiram);
$stmt->execute();
$stmt->close();
$conn->close();

echo "<script>window.location.href = 'predict.html';</script>";
?>
