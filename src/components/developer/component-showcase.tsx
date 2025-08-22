
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"
import { Badge } from "../ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ComponentShowcase = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Component Showcase</CardTitle>
        <CardDescription>A visual library of all available UI components.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <h3 className="font-semibold">Inputs & Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled Input</Label>
                <Input id="disabled-input" placeholder="Disabled" disabled />
            </div>
          </div>
        </div>
        
        {/* Textarea */}
        <div className="space-y-4">
          <h3 className="font-semibold">Textarea</h3>
          <Textarea placeholder="Type your message here." />
        </div>

        {/* Selection Controls */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selection Controls</h3>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </div>
        </div>
        
        {/* Select Dropdown */}
        <div className="space-y-4">
          <h3 className="font-semibold">Select</h3>
           <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectContent>
            </Select>
        </div>

        {/* Slider */}
        <div className="space-y-4">
          <h3 className="font-semibold">Slider</h3>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>

        {/* Alert */}
        <div className="space-y-4">
            <h3 className="font-semibold">Alerts</h3>
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
        </div>

        {/* Badge & Tooltip */}
        <div className="space-y-4">
            <h3 className="font-semibold">Badge & Tooltip</h3>
             <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Badge>Hover me</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>This is a tooltip!</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
export default ComponentShowcase
