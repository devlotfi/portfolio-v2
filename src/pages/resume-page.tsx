import { PDFViewer } from "@react-pdf/renderer";
import Resume from "../components/resume";

export default function ResumePage() {
  return (
    <div className="flex flex-1 flex-col p-[1rem] lg:pl-[7rem]">
      <PDFViewer className="flex flex-1 rounded-xl border border-divider">
        <Resume></Resume>
      </PDFViewer>
    </div>
  );
}
