import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

const bills = [
  { name: "Electric", due: "June 10, 2025", amount: 85, reminder: true, dueIn: 3 },
  { name: "Water", due: "June 15, 2025", amount: 45, reminder: false },
  { name: "Internet", due: "June 22, 2025", amount: 60, reminder: false },
  { name: "Car Payment", due: "July 01, 2025", amount: 450, reminder: false },
]

const UpcomingBills = () => {
  return (
    <Card className="bg-background/40 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Upcoming Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {bills.map((bill) => (
            <li key={bill.name} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{bill.name}</p>
                <p className="text-xs text-muted-foreground">{bill.due}</p>
              </div>
              <div className="flex items-center gap-3">
                {bill.reminder && (
                  <div className="flex items-center gap-1 text-primary text-xs">
                    <Bell className="h-3 w-3" />
                    Due in {bill.dueIn} days
                  </div>
                )}
                <p className="font-mono text-sm">${bill.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default UpcomingBills
