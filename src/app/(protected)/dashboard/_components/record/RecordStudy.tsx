import { Title } from "../common/Title";
import { RecordChart } from "./RecordChart";

export function RecordStudy() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <Title>공부 기록</Title>
      </div>

      <RecordChart />
    </section>
  );
}
