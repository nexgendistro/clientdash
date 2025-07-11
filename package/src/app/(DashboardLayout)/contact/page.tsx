'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Contact Us">
        <Typography>Have any questions or concerns? Please use the form below and we will try to get back within 24-48 hours.</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

