import { transactions } from '@/lib/transactions-data';
import { columns } from '@/components/transactions/columns';
import { DataTable } from '@/components/transactions/data-table';

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-headline text-primary">Your Transactions</h1>
        <p className="text-muted-foreground">A detailed ledger of all your spending and income.</p>
      </div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
}
