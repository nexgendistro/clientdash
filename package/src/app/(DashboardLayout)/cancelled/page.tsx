import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import fetch from 'node-fetch';

``
// API credentials
const apiKey = process.env.SHIPSTATION_API_KEY_V1;
const apiSecret = process.envSHIPSTATION_API_SECRET_V1;

// Step 1: Combine key and secret with colon
const combined = `${apiKey}:${apiSecret}`;

// Step 2: Base64 encode the combined string
// btoa() works in most browsers (only for ASCII-safe strings)
const encoded = btoa(combined);

// Step 3: Construct the Authorization header
const authHeader = `Basic ${encoded}`;

console.log('Authorization Header:', authHeader);


async function run() {
  const query = new URLSearchParams({
    shipment_status: 'pending',
    batch_id: 'se-28529731',
    pickup_id: 'pik_3YcKU5zdtJuCqoeNwyqqbW',
    created_at_start: '2019-08-24T14:15:22Z',
    created_at_end: '2019-08-24T14:15:22Z',
    modified_at_start: '2019-08-24T14:15:22Z',
    modified_at_end: '2019-08-24T14:15:22Z',
    page: '1',
    page_size: '25',
    sales_order_id: 'string',
    sort_dir: 'desc',
    shipment_number: 'string',
    ship_to_name: 'string',
    item_keyword: 'string',
    payment_date_start: '2019-08-24T14:15:22Z',
    payment_date_end: '2019-08-24T14:15:22Z',
    store_id: 'se-28529731',
    external_shipment_id: 'string',
    sort_by: 'modified_at'
  }).toString();

  const resp = await fetch(
    `https://docs.shipstation.com/_mock/openapi/v2/shipments?${query}`,
    {
      method: 'GET',
      headers: {
        'api-key': 'authHeader'
      }
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Cancelled Orders">
        <Typography>All Cancelled Orders</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

