function calcular() {
    if (somar.checked === true)
        res.value = parseFloat(v1.value) + parseFloat(v2.value);
    
    else if (subtrair.checked === true)
        res.value = parseFloat(v1.value) - parseFloat(v2.value);

    else if (multiplicar.checked === true)
        res.value = parseFloat(v1.value) * parseFloat(v2.value);

    else {
        if (parseFloat(v2.value) === 0)
            res.value = 'Erro!';

        else
            res.value = parseFloat(v1.value) / parseFloat(v2.value);
    }
}