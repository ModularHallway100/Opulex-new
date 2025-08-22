
import ComponentShowcase from "@/components/developer/component-showcase";
import FlowTester from "@/components/developer/flow-tester";

export default function DeveloperPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Developer Zone</h1>
        <p className="text-muted-foreground">Tools and utilities for building and testing Opulex.</p>
      </div>

      <FlowTester />
      <ComponentShowcase />
    </div>
  );
}
