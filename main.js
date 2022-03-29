let soma = 0
          

    function verificar(velocidade) {
        let elementoVelocidade = document.getElementById("txtVelocidade").value
    pontos = Math.floor((elementoVelocidade - 70) / 5)
        if (pontos < 0) {
            if(soma >= 0 && soma < 1) { resultado.innerHTML = "Motorista habilitado."
            } else if(soma > 0 && soma < 21) {
            resultado.innerHTML = `Multa de ${pontos} pontos, habilitação com ${soma} pontos`
            } else { resultado.innerHTML = `Carteira suspensa ${pontos}, motorista com ${soma} na habilitação.`
            }
        } else {
            soma += pontos
            if(soma >= 0 && soma < 1) { resultado.innerHTML = "Motorista habilitado."
            } else if(soma > 0 && soma < 21) {
            resultado.innerHTML = `Multa de ${pontos} pontos, habilitação com ${soma} pontos.`
            } else { resultado.innerHTML = `Multa de ${pontos} pontos, HABILITAÇÃO SUSPENSA, motorista com ${soma} na habilitação.`
            }
        }
          document.getElementById("txtVelocidade").value = ""
    }
