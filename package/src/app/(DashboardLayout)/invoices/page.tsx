import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

import { createClient } from '@/utils/supabase/client';
const SamplePage = () => {
    const client = createClient();
    
  return (
    <PageContainer title="Invoices" description="this is Sample page">
      <DashboardCard title="Invoices">
        <Typography>If there are any questions regarding invoices, please contact support.</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

