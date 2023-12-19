import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { CampaignProvider } from './state/Context';
import CampaignPage from './views/CampaignPage';
import TargetGroupPage from './views/TargetGroupPage';
import AdPage from './views/AdPage';
import PreviewPage from './views/PreviewPage';
import ConfirmationPage from './views/ConfirmationPage';
import Header from './components/navbars/Header';
import VerticalNavbar from './components/navbars/VerticalNavbar';
import Footer from './components/navbars/Footer';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 22% auto;
`;

const Content = styled.div`
  padding-top: 17%;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const App = () => {
  const [activePage, setActivePage] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);


  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        <Layout>
          <div>
            <VerticalNavbar activePage={activePage}/>
          </div>
          <Content>
            <Routes>
              <Route path="/" element={<CampaignPage />} />
              <Route path="/TargetGroupPage" element={<TargetGroupPage />} />
              <Route path="/AdPage" element={<AdPage />} />
              <Route path="/PreviewPage" element={<PreviewPage />} />
              <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
            </Routes>
          </Content>
        </Layout>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <CampaignProvider>
      <App />
    </CampaignProvider>
  </BrowserRouter>
);

reportWebVitals();
