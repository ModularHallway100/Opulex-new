import SubscriptionTracker from '@/components/dashboard/subscription-tracker';

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Subscription Concierge</h1>
        <p className="text-muted-foreground">Manage your recurring subscriptions and find savings.</p>
      </div>

      <SubscriptionTracker />
    </div>
  );
}
