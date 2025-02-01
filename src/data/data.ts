export const datasets = {
  scan: [
    { name: 'Scan 1', pv: 2400, uv: 3000 },
    { name: 'Scan 1', pv: 100, uv: 450 },
    { name: 'Scan 1', pv: 500, uv: 600 },
    { name: 'Scan 2', pv: 1398, uv: 3000 },
    { name: 'Scan 2', pv: 1200, uv: 2500 },
    { name: 'Scan 2', pv: 800, uv: 1500 },
    { name: 'Scan 3', pv: 9800, uv: 3000 },
    { name: 'Scan 3', pv: 7500, uv: 2000 },
    { name: 'Scan 3', pv: 6000, uv: 1000 },
  ],
  vulnerability: [
    { name: 'Vulnerability 1', pv: 4000, uv: 3000 },
    { name: 'Vulnerability 1', pv: 3500, uv: 2800 },
    { name: 'Vulnerability 1', pv: 3000, uv: 2500 },
    { name: 'Vulnerability 2', pv: 3000, uv: 3000 },
    { name: 'Vulnerability 2', pv: 2500, uv: 2700 },
    { name: 'Vulnerability 2', pv: 2000, uv: 2400 },
    { name: 'Vulnerability 3', pv: 2000, uv: 3000 },
    { name: 'Vulnerability 3', pv: 1500, uv: 2800 },
    { name: 'Vulnerability 3', pv: 1000, uv: 2600 },
  ],
  deviceOverview: [
    { name: 'Device 1', pv: 5000, uv: 3000 },
    { name: 'Device 1', pv: 4500, uv: 2800 },
    { name: 'Device 1', pv: 4000, uv: 2500 },
    { name: 'Device 2', pv: 6000, uv: 3000 },
    { name: 'Device 2', pv: 5500, uv: 2700 },
    { name: 'Device 2', pv: 5000, uv: 2400 },
    { name: 'Device 3', pv: 7000, uv: 3000 },
    { name: 'Device 3', pv: 6500, uv: 2800 },
    { name: 'Device 3', pv: 6000, uv: 2600 },
  ],
  deviceCritical: [
    { name: 'Critical 1', pv: 1000, uv: 3000 },
    { name: 'Critical 1', pv: 900, uv: 2800 },
    { name: 'Critical 1', pv: 800, uv: 2500 },
    { name: 'Critical 2', pv: 2000, uv: 3000 },
    { name: 'Critical 2', pv: 1800, uv: 2700 },
    { name: 'Critical 2', pv: 1600, uv: 2400 },
    { name: 'Critical 3', pv: 3000, uv: 3000 },
    { name: 'Critical 3', pv: 2800, uv: 2800 },
    { name: 'Critical 3', pv: 2600, uv: 2600 },
  ],
};

const flattenedData = Object.values(datasets).flat();

export default flattenedData;
