// Funções da Página de Login
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

if (registerBtn && loginBtn) {
  registerBtn.addEventListener('click', () => {
    container.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });
}

// Funções da Página do Aluno
if (document.querySelector('.aluno-section')) {
  // Simulação de dados de eventos e certificados
  const eventos = [
    { nome: "Workshop de Programação", data: "2023-11-15", local: "Auditório Principal" },
    { nome: "Palestra sobre IA", data: "2023-11-20", local: "Sala 101" }
  ];

  const certificados = [
    { evento: "Workshop de Programação", data: "2023-11-15", codigo: "ABC123" }
  ];

  // Função para carregar eventos na página
  function carregarEventos() {
    const eventList = document.querySelector('.event-list');
    eventos.forEach(evento => {
      const eventItem = document.createElement('div');
      eventItem.classList.add('event-item');
      eventItem.innerHTML = `
        <span>${evento.nome} - ${evento.data} - ${evento.local}</span>
        <button class="btn-inscrever">Inscrever-se</button>
      `;
      eventList.appendChild(eventItem);
    });
  }

  // Função para carregar certificados na página
  function carregarCertificados() {
    const certificateList = document.querySelector('.certificate-list');
    certificados.forEach(certificado => {
      const certificateItem = document.createElement('div');
      certificateItem.classList.add('certificate-item');
      certificateItem.innerHTML = `
        <span>${certificado.evento} - ${certificado.data}</span>
        <button class="btn-download">Baixar Certificado</button>
      `;
      certificateList.appendChild(certificateItem);
    });
  }

  // Evento para confirmar presença
  const btnConfirmar = document.querySelector('.btn-confirmar');
  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', () => {
      const codigo = prompt("Digite o código de presença:");
      if (codigo) {
        alert("Presença confirmada com sucesso!");
      }
    });
  }

  // Carregar dados ao abrir a página
  window.onload = () => {
    carregarEventos();
    carregarCertificados();
  };
}

// Funções da Página do Coordenador
if (document.querySelector('.coordenador-section')) {
  // Função para cadastrar evento
  const eventForm = document.querySelector('#event-form');
  if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.querySelector('#event-form input[type="text"]').value;
      const data = document.querySelector('#event-form input[type="date"]').value;
      const local = document.querySelector('#event-form input[type="text"]').value;
      const inicio = document.querySelector('#event-form input[type="time"]').value;
      const fim = document.querySelector('#event-form input[type="time"]').value;

      alert(`Evento "${nome}" cadastrado com sucesso!`);
    });
  }

  // Função para gerar código de presença
  const btnGerarCodigo = document.querySelector('.btn-gerar-codigo');
  if (btnGerarCodigo) {
    btnGerarCodigo.addEventListener('click', () => {
      const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
      alert(`Código de presença gerado: ${codigo}`);
    });
  }
}

// Funções da Página do Diretor
if (document.querySelector('.diretor-section')) {
  // Função para cadastrar coordenador
  const coordenadorForm = document.querySelector('#coordenador-form');
  if (coordenadorForm) {
    coordenadorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.querySelector('#coordenador-form input[type="text"]').value;
      const email = document.querySelector('#coordenador-form input[type="email"]').value;
      const senha = document.querySelector('#coordenador-form input[type="password"]').value;

      alert(`Coordenador "${nome}" cadastrado com sucesso!`);
    });
  }

  // Simulação de lista de coordenadores
  const coordenadores = [
    { nome: "João Silva", email: "joao@example.com" },
    { nome: "Maria Oliveira", email: "maria@example.com" }
  ];

  // Função para carregar coordenadores na página
  function carregarCoordenadores() {
    const coordenadorList = document.querySelector('.coordenador-list');
    coordenadores.forEach(coordenador => {
      const coordenadorItem = document.createElement('div');
      coordenadorItem.classList.add('coordenador-item');
      coordenadorItem.innerHTML = `
        <span>${coordenador.nome} - ${coordenador.email}</span>
        <button class="btn-remover">Remover</button>
      `;
      coordenadorList.appendChild(coordenadorItem);
    });
  }

  // Carregar dados ao abrir a página
  window.onload = () => {
    carregarCoordenadores();
  };
}