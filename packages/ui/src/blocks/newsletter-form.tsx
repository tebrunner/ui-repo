// apps/web/components/newsletter-form.tsx
"use client"

import { useState } from "react"
import { Cluster } from "@repo/ui/layouts"
import { Button } from "@repo/ui/primitives"
import { cn } from "@repo/ui"

interface NewsletterFormProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function NewsletterForm({
  placeholder = "you@example.com",
  buttonText = "Subscribe",
  className
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async () => {
    if (!email) return
    
    setStatus("loading")
    
    try {
      // Your newsletter API call
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
      })
      
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-green-600 dark:text-green-400">
        Thanks! Check your inbox to confirm.
      </p>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Cluster gap="sm" wrap={false}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "flex-1 min-w-0 px-3 py-2 text-sm rounded-md",
            "bg-background border border-input",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring"
          )}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button
          onClick={handleSubmit}
          disabled={status === "loading" || !email}
          size="sm"
        >
          {status === "loading" ? "..." : buttonText}
        </Button>
      </Cluster>
      
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Try again?
        </p>
      )}
    </div>
  )
}
