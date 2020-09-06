<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
require 'data1.php';

$request = $_GET['request'] ?? null;

if($request) {
  $jsonfile = file_get_contents("restaurant.json");
  $data = json_decode($jsonfile, true)['menu_items'];
  try {
    $restaurantData = new RestaurantData($data);
  } catch (Exception $th) {
      echo json_encode([$th->getMessage()]);
      return;
  }
}

switch($request) {
  case 'res_list': 
    echo $restaurantData->getReslist();
    break;
  
  case 'restaurant_data': 
    $id = $_GET['id'] ?? null;
    echo $restaurantData->getRestaurantdata($id);
    break;

  default: 
    echo json_encode(["Invalid!"]);
    break;
}

?>