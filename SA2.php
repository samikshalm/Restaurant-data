<?php

class RestaurantData {

  private $restaurantList;

  function __construct(array $restaurantList) {
    $this->restaurantList = $restaurantList;
    if(sizeof($restaurantList) > 0) {
      $this->restaurantList = $restaurantList;
    } else {
      throw new Exception("No Restaurant ");
    }
  }

  public function getRestaurantlist() {
    $rescipeList = [];

    foreach($this->restaurantList as $rescipes) {
      $rescipesList[] = array(
        "id" => $rescipes['id'],
        "name" => $rescipes['name']
      );
    }

    return json_encode($rescipesList);
  }

  public function getResdata($id) {
    $response = ["Invalid Id"];

    if($id) {
      foreach($this->restaurantList as $rescipes) {
        if ($id == $rescipes['id']) {
          $response = $rescipes;
          break;
        }
      }
    }

    return json_encode($response);
  }
}