"use client";

import type React from "react";
import styled from "styled-components";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const StyledButton = styled.button<{ variant: string; size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  font-weight: 500;
  transition: all 0.2s ease;

  ${(props) =>
    props.size === "sm" &&
    `
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
  `}

  ${(props) =>
    props.size === "md" &&
    `
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
  `}
  
  ${(props) =>
    props.size === "lg" &&
    `
    height: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1rem;
  `}
  
  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: var(--primary);
    color: white;
    
    &:hover:not(:disabled) {
      background-color: var(--primary-dark);
    }
  `}
  
  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: var(--secondary);
    color: white;
    
    &:hover:not(:disabled) {
      background-color: var(--secondary-dark);
    }
  `}
  
  ${(props) =>
    props.variant === "outline" &&
    `
    background-color: transparent;
    border: 1px solid var(--border);
    color: var(--foreground);
    
    &:hover:not(:disabled) {
      background-color: var(--muted);
    }
  `}
  
  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: transparent;
    color: var(--foreground);
    
    &:hover:not(:disabled) {
      background-color: var(--muted);
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", ...props },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
