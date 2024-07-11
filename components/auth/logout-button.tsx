"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export function LogoutButton({ children }: LogoutButtonProps) {
  function handleClick() {
    logout();
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}
