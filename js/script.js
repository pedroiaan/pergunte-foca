function escolherOpcao() {
        var escolha = Math.floor(Math.random() * 10);
        if (escolha % 2) {
            alert("A foca escolheu " + document.querySelector(".input1").value);
        } 
        else {
            alert("A foca escolheu " + document.querySelector(".input2").value);
        }
    }