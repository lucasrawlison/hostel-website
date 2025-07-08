"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CalendarProps {
  date: Date | undefined
  onChange: (date: Date | undefined) => void
  title: string
  date1?: Date | undefined
}

export default function Calendar22({ date, onChange, title, date1 }: CalendarProps) {
  const [open, setOpen] = React.useState(false)
  const [dayAfter, setDayAfter] = React.useState<Date | undefined>(undefined)
  // Zera hora/minuto/segundo para considerar apenas a data
  const today = React.useMemo(() => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return t
  }, [])

  React.useEffect(()=> {
    if(date1){
      const dA = new Date(date1)
      dA.setDate(dA.getDate() + 1)
      setDayAfter(dA)
      console.log(dA)
    }
  }, [date1])

  return (
    <div className="flex flex-col gap-3 w-full">
      <Label htmlFor="date" className="px-1">
        {title || "Select Date"}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            // <- aqui habilitamos o disable dos dias antes de hoje
            disabled={dayAfter ? {before: dayAfter} :{ before: today }}
            onSelect={(d) => {
              onChange(d)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
