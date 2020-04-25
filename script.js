var txtnum = document.getElementById('txtnum')
var selnum = document.getElementById('selnum')
var res = document.getElementById('res')
var numeros = []

/*function adicionar(){
    if(txtnum.value.length == 0 || Number(txtnum.value) < 1 || Number(txtnum.value) > 100){
        window.alert('Introduza um número no intervalo de 1 a 100')
    }else{

        num = Number(txtnum.value)
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        selnum.appendChild(item)
        res.innerHTML = ''
    }
}*/

function isNumero(n){
    if(n.length == 0 || Number(n) < 1 || Number(n) > 100){
        return false
    }else{
        return true
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(txtnum.value) && !inLista(txtnum.value, numeros)){
        let num = Number(txtnum.value)
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        selnum.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    if(numeros.length != 0){
        
        var maior = 0
        var menor = numeros[0]
        var soma = 0
        for(let i in numeros){
            if(numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
            soma += numeros[i]
        }
        res.innerHTML = `Ao todo, temos ${numeros.length} números. <br> <br>`
        res.innerHTML += `O maior valor informado foi ${maior}. <br><br>`
        res.innerHTML += `O menor valor informado foi ${menor}. <br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br><br>`
        res.innerHTML += `A média dos valores adicionados é ${soma/numeros.length}.`

    }else{
        document.alert('Nenhum número foi adicionado')
    }
}
