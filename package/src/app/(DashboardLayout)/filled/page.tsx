import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = async () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Orders Filled">
        <Typography></Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

