import {Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import fetch from 'node-fetch';
interface item {
      sku: number;
      name: string;
    }
async function run() {
  const query = new URLSearchParams({
    page_size: '10',
    page: '1'
  }).toString();

  const resp = await fetch(
    `https://api.shipstation.com/v2/products?${query}`,
    {
      method: 'GET',
      headers: {
        'api-key': 'w0UcesbyZXyJfYlb5ifxfA/pdYTkei2OgbSdRXgwgsk'
      }
    }
  );

  const data = await resp.text();
  return data || ""
}
const SamplePage = async () => {
  let data = await run();
  if (!data) {
    data = "";
  }
  let jData = JSON.parse(data).products
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Inventory">
        <Typography>Use this page to both view your current inventory with us as well as to upload any products that you plan on shipping with us!</Typography>

      </DashboardCard>
      <DashboardCard title="Add a Product!">
        <Typography>Add a product to your available list</Typography>
        
      </DashboardCard>
      <DashboardCard title="View your Products!">
        <Typography>Your current inventory with us! Total Products: {JSON.parse(data).total}</Typography>
        <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    SKU
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Product Name  
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Product Picture
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jData.map((item) => (
                            <TableRow key={item.sku}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {item.sku}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                        {JSON.stringify(item.name) !== JSON.stringify(item.sku)? <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>{item.name}</Typography>: 
                                      <Typography color="textSecondary" variant="subtitle2" fontWeight={400}></Typography>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
      </DashboardCard>  
    </PageContainer>
  );
};

export default SamplePage;

