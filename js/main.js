function consultaCep() {

  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/"
  $(".barra").show();
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);

      $("#logra").html(response.logradouro)
      $("#bairro").html(response.bairro)
      $("#loca").html(response.localidade)
      $("#uf").html(response.uf)
      $("#titulo_cep").html("CEP: " + response.cep)
      $(".cep").show();
      $(".barra").hide();

    }
  })
}

$(function () {
  $(".cep").hide();
  $(".barra").hide();
});