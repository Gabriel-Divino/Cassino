// Captura de erros globais

console.log('estou aqui')

window.onerror = function (message, source, lineno, colno, error) {
    console.log('Erro capturado: ', message);
    console.log('Fonte: ', source);
    console.log('Linha: ', lineno);
    console.log('Coluna: ', colno);
    console.log('Erro: ', error);
  
    if (message.includes('Access to XMLHttpRequest')) {
      alert(`Erro de CORS detectado em ${source} na linha ${lineno}, coluna ${colno}: ${message}`);
    }
  };
  
  // Captura de erros em eventos
  window.addEventListener('error', function (event) {
    console.log('Erro de evento capturado: ', event.message);
    console.log('Fonte: ', event.filename);
    console.log('Linha: ', event.lineno);
    console.log('Coluna: ', event.colno);
    console.log('Erro: ', event.error);
  
    if (event.message.includes('Access to XMLHttpRequest')) {
      alert(`Erro de CORS detectado em ${event.filename} na linha ${event.lineno}, coluna ${event.colno}: ${event.message}`);
    }
  });
  
  // Captura de rejeições não tratadas (promessas)
  window.addEventListener('unhandledrejection', function (event) {
    console.log('Rejeição não tratada capturada: ', event.reason);
    // Aqui você pode adicionar lógica para tratar rejeições não tratadas
  });
  