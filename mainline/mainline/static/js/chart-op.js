// Grafico de Ordem de serviços pedentes.
var ctx = document.getElementById('os_pedente').getContext('2d');
var chart = new Chart(ctx, {

    type: 'doughnut',
    data: {
        labels: ['Pedentes', 'Em negociação', 'Execução', 'Aguardando Terceiros', 'Concluída'],
        datasets: [{
            data: [
                30, 
                10, 
                12,
                7,
                20,
            ],
            backgroundColor:[
                '#ff6384',
                '#e3c878',
                '#ed9a73',
                '#e688a1',
                '#d9eeec',
            ],
        }],
    },

    options: {}
});

//Clientes cancelados no decorrer do tempo.
new Chart(document.getElementById("clientes"), {
    type: 'line',
    data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [{ 
          data: [8,5,9,10,4,2,1],
          label: "Cancelados",
          borderColor: "#3e95cd",
          backgroundColor: "#3e95cd",
          fill: false
        }, { 
          data: [12,11,13,16,9,10,15],
          label: "Adquiridos",
          borderColor: "#8e5ea2",
          backgroundColor: "#8e5ea2",
          fill: false
        },
      ]
    },
    options: {}
  });

//Centrais de Alarme
var ctx = document.getElementById('bateria_fraca').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['AMT 2018 EG', 'AMT 4010 Smart', 'Active-20 GPRS', 'Active-20 Ethernet', 'Active-20 Ultra', 'Active-32 DUO'],
        datasets: [{
            data: [12, 10, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
