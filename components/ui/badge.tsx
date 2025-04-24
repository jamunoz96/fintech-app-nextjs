"use client";

import type React from "react";
import styled from "styled-components";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "info";
  children: React.ReactNode;
  className?: string;
}

const StyledBadge = styled.span<{ variant: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;

  ${(props) =>
    props.variant === "default" &&
    `
    background-color: var(--muted);
    color: var(--muted-foreground);
  `}

  ${(props) =>
    props.variant === "success" &&
    `
    background-color: #ecfdf5;
    color: #047857;
  `}
  
  ${(props) =>
    props.variant === "warning" &&
    `
    background-color: #fffbeb;
    color: #b45309;
  `}
  
  ${(props) =>
    props.variant === "danger" &&
    `
    background-color: #fef2f2;
    color: #b91c1c;
  `}
  
  ${(props) =>
    props.variant === "info" &&
    `
    background-color: #eff6ff;
    color: #1d4ed8;
  `}
`;

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <StyledBadge variant={variant} className={className}>
      {children}
    </StyledBadge>
  );
}
