import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("px-4", "py-2", "bg-red-500")
    expect(result).toBe("px-4 py-2 bg-red-500")
  })

  it("handles conditional classes when true", () => {
    const isActive = true as boolean
    const result = cn("base", isActive && "active", !isActive && "inactive")
    expect(result).toBe("base active")
  })

  it("handles conditional classes when false", () => {
    const isActive = false as boolean
    const result = cn("base", isActive && "active", !isActive && "inactive")
    expect(result).toBe("base inactive")
  })

  it("handles conflicting tailwind classes properly", () => {
    const result = cn("p-4", "p-2")
    expect(result).toBe("p-2")
  })

  it("returns empty string when no inputs", () => {
    const result = cn()
    expect(result).toBe("")
  })
})
