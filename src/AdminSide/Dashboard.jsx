import React, { useEffect, useRef } from 'react';

const Dashboard = () => {
  const predictionRef = useRef();

  const Dashboard_DATA = [
    {
      views: {
        totalviews: 155,
      },
      Revenue: {
        totalrevenue: 2156,
        monthly: [1200, 1700, 2200, 1850, 2400, 2600, 3000, 2800, 3200, 3500, 4000, 3700],
        xvalue: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ],
      },
      PendingOrder: {
        value: 7,
      },
      Banner_user: {
        value: 12,
      },
      rating: 4.5,
    },
  ];

  useEffect(() => {
    if (!predictionRef.current) return;

    const ctx = predictionRef.current.getContext('2d');

    // eslint-disable-next-line no-undef
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Dashboard_DATA[0].Revenue.xvalue,
        datasets: [
          {
            label: 'Monthly Revenue ($)',
            data: Dashboard_DATA[0].Revenue.monthly,
            borderColor: '#a855f7',
            backgroundColor: 'rgba(168,85,247,0.25)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#c084fc',
            pointRadius: 5,
            pointHoverRadius: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { color: '#c084fc', font: { size: 13 } },
            grid: { color: 'rgba(255,255,255,0.1)' },
          },
          y: {
            ticks: { color: '#c084fc', font: { size: 13 } },
            grid: { color: 'rgba(255,255,255,0.1)' },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [Dashboard_DATA]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0f031b] via-[#1a0433] to-[#2a0658] text-white flex flex-col items-center py-12 px-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
        Admin Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl text-white">
        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
          <h2 className="text-4xl font-bold mb-2">${Dashboard_DATA[0].Revenue.totalrevenue}</h2>
          <p className="text-gray-400">Revenue</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
          <h2 className="text-4xl font-bold mb-2 flex items-center">
            <i className="fa-regular fa-eye pr-3"></i>
            {Dashboard_DATA[0].views.totalviews}
          </h2>
          <p className="text-gray-400">New Users</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
          <h2 className="text-4xl font-bold mb-2 flex items-center">
            <i className="fa-solid fa-hourglass-half mr-3"></i>
            {Dashboard_DATA[0].PendingOrder.value}
          </h2>
          <p className="text-gray-400">Pending Orders</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
          <h2 className="text-4xl font-bold mb-2 flex items-center">
            <i className="fa-solid fa-ban mr-3"></i>
            {Dashboard_DATA[0].Banner_user.value}
          </h2>
          <p className="text-gray-400">Banned Users</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <h2 className="text-4xl font-bold mb-2 flex items-center">
            {Dashboard_DATA[0].rating}
            <i className="fa-regular fa-star text-3xl ml-2 text-yellow-400"></i>
          </h2>
          <p className="text-gray-400">Rating</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full max-w-6xl mt-14 bg-white/5 backdrop-blur-md border border-purple-700/40 rounded-2xl p-10 shadow-[0_0_25px_rgba(168,85,247,0.2)] overflow-hidden mb-11">
        <h2 className="text-2xl font-semibold text-purple-300 text-center mb-6">
          Yearly Revenue 
        </h2>

        <div className="h-96 flex items-center justify-center w-full">
          <canvas ref={predictionRef} className="w-full h-full"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
