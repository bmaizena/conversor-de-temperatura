function fahrenheitparac(n) {
    c = (n - 32) / 1.8
    return c
}

function celsiusparaf(n) {
    f = n * 1.8 +32
    return f
}

function celsiusparak(n) {
    k = n + 273.15
    return k
}

function kelvinparac(n) {
    c = n - 273.15
    return c
}

function calcular() {
    conv = document.getElementsByName('conv')
    res = document.getElementById('res')
    numero = document.getElementById('num')
    res.innerHTML = ''
    if (numero.value.length == 0) {
        window.alert('Temperatura não informada!') 
    }
    else {  
        if (conv[0].checked) {
            ctof = celsiusparaf(Number(numero.value))
            res.innerHTML += `${ctof}F`
            numero.value = ''
            numero.focus()
        }
        else if (conv[1].checked) {
            ftoc = fahrenheitparac(Number(numero.value))
            res.innerHTML += `${ftoc}°C`
            numero.value = ''
            numero.focus()
        }
        else if (conv[2].checked) {
            ctok = celsiusparak(Number(numero.value))
            res.innerHTML += `${ctok}K`
            numero.value = ''
            numero.focus()
        }
        else if (conv[3].checked) {
            ktoc = kelvinparac(Number(numero.value))
            res.innerHTML += `${ktoc}°C`
            numero.value = ''
            numero.focus()
        }
    }
}
