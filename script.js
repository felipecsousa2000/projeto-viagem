
// Liga a biblioteca AOS (Animate On Scroll)
// duration: duração da animação em milissegundos
// 800 milissegundos = 0,8 segundo
// once: true = a animação acontece apenas uma vez
AOS.init({ duration: 800, once: true });


// Procura no HTML o elemento que possui id="menu"
// e guarda esse elemento dentro da constante "menu"
const menu = document.getElementById("menu");


// Fica observando quando o usuário rola a página
// O evento "scroll" acontece sempre que a página é rolada
window.addEventListener("scroll", function () {

    // Verifica se a página foi rolada mais de 50 pixels
    if (window.scrollY > 50) {

        // Adiciona a classe CSS "menu-rolou" ao menu
        // Essa classe pode alterar a aparência do menu
        menu.classList.add("menu-rolou");

    } else {

        // Se a página não estiver mais de 50 pixels rolada,
        // remove a classe "menu-rolou"
        menu.classList.remove("menu-rolou");
    }

});


// Procura no HTML o elemento que possui id="enviar"
// e guarda o botão dentro da constante "botao"
const botao = document.getElementById("enviar");


// Procura no HTML o campo que possui id="email"
// e guarda esse campo dentro da constante "campo"
const campo = document.getElementById("email");


// Procura no HTML o elemento que possui id="mensagem"
// Esse elemento será usado para mostrar uma mensagem ao usuário
const mensagem = document.getElementById("mensagem");


// Fica esperando o usuário clicar no botão
// Quando o clique acontecer, a função será executada
botao.addEventListener("click", function () {

    // Pega o texto digitado no campo de e-mail usando ".value"
    // Depois verifica se esse texto possui o caractere "@"
    if (campo.value.includes("@")) {

        // Se tiver "@", altera o texto da mensagem
        // para informar que o cadastro foi realizado
        mensagem.textContent = "Obrigado! Você vai receber nossas ofertas.";

    } else {

        // Se não tiver "@", mostra uma mensagem de erro
        mensagem.textContent = "E-mail inválido: faltou o @.";
    }

});

