var campoFiltro = document.querySelector("#filtrar-tabela");   //Seleciona o campo de filtragem
campoFiltro.addEventListener('input', function(){              //Adiciona um escutador de eventos
    var pacientes = document.querySelectorAll(".paciente");    //Seleciona todos elementos do DOM com a classe paciente

    if (this.value.length > 0){                                //lógica para campo vazio, se vazio, volta a mostrar toda lista
        for(var i = 0; i < pacientes.length; i++){             //para cada paciente
            var paciente = pacientes[i];                       //paciente no indice i do array 
            var tdNome = paciente.querySelector(".info-nome"); //seleciona a td nome 
            var nome = tdNome.textContent;                     //pega o conteudo de texto 
            var expressao = new RegExp(this.value, "i");       //cria expressão regular (this se refere ao dono do evento)(i = case insensitive)

            if(!expressao.test(nome)){                         //testa se há algum nome contido na expresão regular 
                paciente.classList.add("invisivel");           //se não, torna o paciente invisivel add class
            }else{
                paciente.classList.remove("invisivel");        //se sim, torna o paciente visivel remove class
            }
            
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
})
