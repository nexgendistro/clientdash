import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://ssapi.shipstation.com/orders/listbytag?orderStatus=orderStatus&tagId=tagId&page=page&pageSize=pageSize',
  'headers': {
    'Host': 'ssapi.shipstation.com',
    'Authorization': '__YOUR_AUTH_HERE__'
  }
};

request(options, function (error: string | undefined, response: { body: any; }) { 
  if (error) throw new Error(error);
  console.log(response.body);
});


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Cancelled Orders">
        <Typography>All Canceled Orders</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

