import { Box, Chip, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { createClient } from '@/utils/supabase/client';
import { green, red } from '@mui/material/colors';



async function Posts() {
  const supabase = createClient();
  const data = await supabase.from('billing').select("transactionID, billingstart, billingend, charged, status");
  return data || [];
}



const SamplePage = async () => {
  let data = (await Posts()).data;
  if (!data) {
    data = [];
  }

  return (
    <PageContainer title="Invoices" description="this is Sample page">
      <DashboardCard title="Invoices">
        <Typography>If there are any questions regarding invoices, please contact support.</Typography>
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
                                    Transaction ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Billing Period
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Amount Charged
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Payment Status
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (
                            <TableRow key={data.transactionID}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {data.transactionID}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {data.billingstart}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {data.billingend}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        ${data.charged}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                                                    <Chip
                                                                    
                                                                        sx={{
                                                                            px: "4px",
                                                                            backgroundColor: data.status === "paid" ? green[700]:red[600],
                                                                            color: "#fff",
                                                                        }}
                                                                        size="small"
                                                                        label={data.status}
                                                                    ></Chip>
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

