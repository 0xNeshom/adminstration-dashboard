import { ChartData, TimeRange, Unit } from '../types/chartTypes';

export const processChartData = (data: ChartData, timeRange: TimeRange, unit: Unit): { label: string; value: number; product: string }[] => {
  const convertUnit = (value: number): number => {
    switch (unit) {
      case 'gram':
        return value * 1000;
      case 'ton':
        return value / 1000;
      default:
        return value;
    }
  };

  const groupedData: { [key: string]: number } = {};
  data.forEach((item) => {
    const date = new Date(item.date);
    let key = '';
    switch (timeRange) {
      case 'daily':
        key = date.toISOString().split('T')[0];
        break;
      case 'monthly':
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        break;
      case 'yearly':
        key = date.getFullYear().toString();
        break;
    }
    if (!groupedData[key]) {
      groupedData[key] = 0;
    }
    groupedData[key] += convertUnit(item.quantity);
  });

  return Object.entries(groupedData).map(([label, value]) => ({
    label,
    value: Number(value.toFixed(2)),
    product: data.length > 0 ? data[0].product : '',
  }));
};