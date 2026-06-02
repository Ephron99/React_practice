import ScanningHeader from '../ScanningHeader';
import VisitorRegistration from '../VisitorRegistration';
import DocumentCapture from '../DocumentCapture';
import RecentTapsTable from '../RecentTapsTable';

export default function ScanningPage({ onAddRecord, records }) {
  return (
    <>
      <ScanningHeader />
      <section className="scanning-core">
        <VisitorRegistration onAddRecord={onAddRecord} />
        <DocumentCapture />
      </section>
      <RecentTapsTable records={records} />
    </>
  );
}