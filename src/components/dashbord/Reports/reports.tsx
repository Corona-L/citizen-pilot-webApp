import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import './reports.css';
import Report from './Report/Report';

const ReportTab = () => {
  const allReports = useSelector((state: RootState) => {
    /* @ts-ignore */
    return state.realReports.state;
  });

  return (
    <div className="Report-tab">
      <div className="Report-tab-header-text-containter">
        <p className="Report-tab-header-text">Reports</p>
      </div>
      <div>
        {allReports ? (
          allReports.map((report: any) => (
            <Report report={report} />
          ))
        ) : (
          <div />
        )}


      </div>
    </div>
  );
};

export default ReportTab;
