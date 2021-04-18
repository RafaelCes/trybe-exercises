const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 
'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR',
 'RS', 'SC', 'SE', 'SP', 'TO'];

 function createStates() {
   const select = document.getElementById('estado');
   for (let index = 0; index < states.length; index += 1) {
     let element = document.createElement('option');
     element.value = states[index];
     element.innerText = states[index];
     select.appendChild(element);
   }
 }

 createStates();