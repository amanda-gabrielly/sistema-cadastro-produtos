document.getElementById('codProduto').addEventListener('keypress', function(event) {
    const permitidos = "0123456789.";
    if (!permitidos.includes(event.key)) {
    event.preventDefault();
    alert('❌ Digite apenas números!');
  }
});

document.getElementById('descricaoProduto').addEventListener('keypress', function(event) {
    if (!isNaN(event.key) && event.key !== ' ') {
        event.preventDefault();
        alert('❌ Este campo aceita apenas letras!');
  }
});
