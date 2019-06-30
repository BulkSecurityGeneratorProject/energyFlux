export const chartConfig: any = {
  dataLabel: 'Sales',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } }
  },
  lineColors: [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ],
  legend: false,
  type: 'line'
};
