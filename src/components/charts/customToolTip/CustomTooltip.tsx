import CustomTooltipStyles from './CustomTooltip.module.css';

interface CustomTooltipProps  {
  active?: boolean;
  payload?: { payload: { product: string; label: string }; value: number }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
 
  if (active && payload && payload.length) {
    return (
      <div className={CustomTooltipStyles.tooltip}>
        <p className='text-sm font-medium'>{`Name: ${payload[0].payload.product}`}</p>
        <p className='text-sm'>{`Duration: ${payload[0].payload.label}`}</p>
        <p className='text-sm'>{`Quantity: ${payload[0].value} `}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
