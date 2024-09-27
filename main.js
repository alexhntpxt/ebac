$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-limpar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();

       // Obtendo o texto da nova tarefa
    const textoDaTarefa = $('#nova-tarefa').val();
    // Criando um novo item da lista com estilo inicial de display: none
    const novoItem = $(`<li style="display: none"></li>`);
    
    // Adicionando o texto da nova tarefa ao novo item da lista
    $(`<div class="nova-tarefa">${textoDaTarefa}</div>`).appendTo(novoItem);
    
    // Adicionando o novo item à lista de tarefas
    $(novoItem).appendTo('ul');
    // Limpando o campo de entrada
    $('#nova-tarefa').val('');
    // Exibindo o novo item com um efeito de fade-in
    $(novoItem).fadeIn(1000);
    })

    /*Quando clicado fica riscado */
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    })

})
