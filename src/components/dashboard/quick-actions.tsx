import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, ArrowRightLeft, Target, ListCollapse } from "lucide-react"

const actions = [
  { icon: <Plus />, label: "Add Transaction" },
  { icon: <ArrowRightLeft />, label: "Reallocate Funds" },
  { icon: <Target />, label: "Set a Goal" },
  { icon: <ListCollapse />, label: "Manage Subscriptions" },
]

const QuickActions = () => {
  return (
    <Card className="bg-background/40 border-primary/20">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <Button key={action.label} variant="outline" className="flex-col h-24 gap-2">
              {action.icon}
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default QuickActions
