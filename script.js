// Adicionando evento de "load" para todo o código (executar o código quando o HTML for lido):
window.addEventListener("load", () => {

    // Guardando o 'button' pelo id:
    const botao = document.getElementById('botao');

    // Adicionando evento de "click" para todo o código (executar o código quando o botão for clicado):
    botao.addEventListener("click", () => {
        
        // Tempo em segundos:
        let sec = 300;

        // Guardando a 'div' pelo id:
        const countDiv = document.getElementById('timer');

        // Função para verificar o tempo:
        const secPass = () => {

            // Formtando o timer para o formato MM:SS se os minutos e segundos forem menor que 10 (02:05 - Dois minutos e cinco segundos):
            let min = Math.floor(sec/60);
            let secRestantes = sec % 60;
            
            if(secRestantes < 10){
                secRestantes = "0" + secRestantes;
            }
            if(min < 10){
                min = "0" + min;
            }

            countDiv.innerHTML = min + ":" + secRestantes;

            // Diminuindo o tempo em segundos e exibindo uma string ao zerar o timer:
            if(sec > 0){
                sec = sec - 1;
            }
            else{
                countDiv.innerHTML = "Acabou!";
            }
        }

        // Determinando intervalo em milissegundos para a função secPass():
        const countDown = setInterval(() => secPass(), 1000);
    });
});