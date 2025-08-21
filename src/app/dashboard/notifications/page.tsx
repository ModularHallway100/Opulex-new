import DueDateAlerts from "@/components/notifications/due-date-alerts";
import SpendingWarnings from "@/components/notifications/spending-warnings";
import AiPoweredAlerts from "@/components/notifications/ai-powered-alerts";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">The Herald's Post</h1>
        <p className="text-muted-foreground">Stay on top of your finances with timely updates.</p>
      </div>

      <DueDateAlerts />
      <SpendingWarnings />
      <AiPoweredAlerts />
      
    </div>
  );
}
