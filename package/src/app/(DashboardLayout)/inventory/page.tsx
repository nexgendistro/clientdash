'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Inventory">
        <Typography>Use this page to both view your current inventory with us as well as to upload any products that you plan on shipping with us!</Typography>

      </DashboardCard>
      <DashboardCard title="Add a Product!">
        <Typography>Add a product to your available list</Typography>
        
      </DashboardCard>
      <DashboardCard title="View your Products!">
        <Typography>Your current inventory with us!</Typography>
        
      </DashboardCard>  
    </PageContainer>
  );
};

export default SamplePage;

