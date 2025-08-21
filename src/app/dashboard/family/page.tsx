import MemberManager from "@/components/family/member-manager";
import ExpenseSplitting from "@/components/family/expense-splitting";
import SharedGoals from "@/components/family/shared-goals";

export default function FamilyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">The Inner Circle</h1>
        <p className="text-muted-foreground">Manage your shared wealth and collaborate on financial goals as a team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
            <MemberManager />
            <SharedGoals />
        </div>
        <div>
            <ExpenseSplitting />
        </div>
      </div>
    </div>
  );
}
