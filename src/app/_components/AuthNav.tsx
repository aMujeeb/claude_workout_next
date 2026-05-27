'use client'

import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'

export default function AuthNav() {
  return (
    <nav className="fixed top-0 right-0 flex items-center gap-3 p-4 z-50">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button
            id="auth-sign-in-btn"
            className="px-4 py-2 text-sm font-medium rounded-lg border border-foreground/20 bg-background/80 backdrop-blur hover:bg-foreground/10 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            id="auth-sign-up-btn"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity cursor-pointer"
          >
            Sign up
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </nav>
  )
}
