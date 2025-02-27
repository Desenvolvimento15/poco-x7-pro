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


    // Certifique-se de que o DOM está carregado
    document.addEventListener("DOMContentLoaded", function() {
        const scrollContainer = document.querySelector('.scroll1');
        const scrollItems = document.querySelectorAll('.scrollitem');

        // Calcula a largura total do conteúdo
        const totalWidth = scrollItems.length * 100; // 100% para cada item

        // Configura o ScrollTrigger
        gsap.to(scrollContainer, {
            x: -totalWidth - 70000, // Move o conteúdo para a esquerda
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll_container1",
                start: "top top", // A animação começa quando o topo do contêiner atinge o topo da janela
                end: "+=8000", // Duração da animação (ajuste conforme necessário)
                scrub: true, // Ativa o efeito de parallax
                pin: true, // "Trava" o layout
                anticipatePin: 1, // Melhora a suavidade do pin
                centerMode: true, // Define se os slides ficam centralizados
            }
        });
    });

// Certifique-se de que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scrollbox3'); // Contêiner dos itens
    const scrollItems = document.querySelectorAll('.scroll-item'); // Itens de rolagem

    // Calcula a largura total do conteúdo
    const totalWidth = scrollItems.length * window.innerWidth; // Cada item ocupa 100% da largura da viewport

    // Configura o ScrollTrigger
    gsap.to(scrollContainer, {
        x: -totalWidth + window.innerWidth, // Move o conteúdo para a esquerda
        ease: "none",
        scrollTrigger: {
            trigger:".scrollbox3", // O contêiner que ativa o ScrollTrigger
            start: "top top", // A animação começa quando o topo do contêiner atinge o topo da janela
            end: "+=" + totalWidth, // Duração da animação baseada na largura total
            scrub: true, // Ativa o efeito de parallax
            // Removido o pin para evitar travamento
            // pin: true, // "Trava" o layout
            anticipatePin: 1, // Melhora a suavidade do pin
        }
    });
});