var restaurantdata = [];
var rescipes = {};

$(document).ready(function () {

  $.get("http://displeased-lumber.000webhostapp.com/cont.php?req=res_list", function (data) {
    restaurantdata = data;
    restaurantdata.forEach((item, index) => {
      $("#menudrop").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#menudrop").change((e) => {
    const selected = restaurantdata[e.target.value];

    $.get(`http://displeased-lumber.000webhostapp.com/controller.php?req=res_data&id=${selected.id}`, function (data) {

      rescipes = data;
      $('#dataholder').html(
        `<p> ID - ${rescipes.id} </p>
        <p> Short Name - ${rescipes.short_name} </p>
        <p> Name - ${rescipes.name} </p>
        <p> Description - ${rescipes.description} </p>
        <p> Price small - ${rescipes.price_small} </p>
        <p> Price Large - ${rescipes.price_large} </p>
        <p> Small Portion Name - ${rescipes.small_portion_name} </p>
        <p> Large Portion_Name - ${rescipes.large_portion_name} </p>
        `
      )
    })
  })
}); 