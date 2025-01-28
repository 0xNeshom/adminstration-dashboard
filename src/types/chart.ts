import { Torientation } from './orientation';
import { TchartType } from './chartType';
import { Position } from './position';
import { Size } from './size';
import { ChartFields } from './chartFields';
import { ChartSettings } from './chartSetting';
export interface Chart {
  id: string;
  type: TchartType;
  orientation: Torientation;
  position: Position;
  size?: Size;
  fields: ChartFields;
  settings: ChartSettings;
  data?: Array<{ [key: string]: string | number }>;
}
