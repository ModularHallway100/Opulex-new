
import ComponentShowcase from "@/components/developer/component-showcase";
import FlowTester from "@/components/developer/flow-tester";
import DataSeeder from "@/components/developer/data-seeder";

export default function DeveloperPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Developer Zone</h1>
        <p className="text-muted-foreground">Tools and utilities for building and testing Opulex.</p>
      </div>

      <DataSeeder />
      <FlowTester />
      <ComponentShowcase />
    </div>
  );
}
