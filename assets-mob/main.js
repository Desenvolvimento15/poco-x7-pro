$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 2,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true, 
      autoplaySpeed: 5000, 
      dots: false, 
      arrows: false,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
      variableWidth: true// Evita que os slides tenham larguras variáveis
    });
  });

  $(document).ready(function(){
    $('.slider-2').slick({
      slidesToShow: 2,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplaySpeed: 5000,
      autoplay: true, 
      dots: false, 
      arrows: false,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
      variableWidth: true// Evita que os slides tenham larguras variáveis
    });
  });

