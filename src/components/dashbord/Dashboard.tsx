import { useEffect } from 'react';
import './Dashboard.css';
import ProposalCard from './Proposals/Proposals';
import NewsComponent from './News/NewsComponent';
import ContactsComponent from './Contacts/ContactsComponent';
import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';
import { useDispatch } from 'react-redux';
import {
  fetchNews,
  fetchContacts,
  fetchProjects,
  fetchProposals,
  fetchReports,
} from '../../store/actions/Dashboard';

import logo from '../../assets/logo.png';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const news = fetchNews();
    dispatch(news);
    const contacts = fetchContacts();
    dispatch(contacts);
    const projects = fetchProjects();
    dispatch(projects);
    const proposals = fetchProposals();
    dispatch(proposals);
    const reports = fetchReports();
    dispatch(reports);
  }, [dispatch]);

  return (
    <div className="dash-container">
      <div className="banner">
        <img src={logo} alt="logo" className="logo-pic" />
      </div>
      <div className="content">
        <div className="left-part">
          <div className="first-row">
            <NewsComponent />
            <ProposalCard />
            <ContactsComponent />
          </div>
          <div className="last-row">
            <ProjectTab />
            <LiveProposals />
          </div>
        </div>
        <div className="report-tab-container">
          <ReportTab />
        </div>
      </div>
    </div>
  );
}
