import ProfileSettings from "@/components/settings/profile-settings";
import SecuritySettings from "@/components/settings/security-settings";
import PreferenceSettings from "@/components/settings/preferences-settings";
import DataPrivacySettings from "@/components/settings/data-privacy-settings";
import Achievements from "@/components/settings/achievements";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">The Vault Core</h1>
        <p className="text-muted-foreground">Customize your Opulex experience and view your accomplishments.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <ProfileSettings />
            <SecuritySettings />
            <Achievements />
        </div>
        <div className="space-y-8">
            <PreferenceSettings />
            <DataPrivacySettings />
        </div>
      </div>
    </div>
  );
}
