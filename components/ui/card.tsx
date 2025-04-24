"use client";

import type React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export function Card({ children, className = "" }: CardProps) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <StyledCardContent className={className}>{children}</StyledCardContent>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCardFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  background-color: var(--muted);
  margin-top: auto;
`;

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <StyledCardFooter className={className}>{children}</StyledCardFooter>;
}
