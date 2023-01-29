
        function calcular(){
            if (op.value === '+')
                res.value = parseFloat(v1.value) + parseFloat(v2.value);
            
            else if (op.value === '-')
                res.value = parseFloat(v1.value) - parseFloat(v2.value);

            else if (op.value === '*')
                res.value = parseFloat(v1.value) * parseFloat(v2.value);

            else if (op.value === '/') {
                if (parseFloat(v2.value) === 0)
                    res.value = 'Erro!';
                else
                    res.value = parseFloat(v1.value) / parseFloat(v2.value);
            }
            else
                alert('Escolha a operação desejada!');
        }
 