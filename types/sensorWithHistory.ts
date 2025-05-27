import { Sensor } from "./sensor";
import { SensorHistoryEntry } from "./sensorHistoryEntry";

export interface SensorWithHistory {
  sensor: Sensor;
  history: SensorHistoryEntry[];
}
