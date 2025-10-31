import { Sensor } from "./sensor";
import { SensorHistoryEntry } from "./sensorHistoryEntry";

export interface SensorWithHistory extends Sensor {
  historic: SensorHistoryEntry[];
}
