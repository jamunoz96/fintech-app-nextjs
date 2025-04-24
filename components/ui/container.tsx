"use client";

import type React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export function Container({ children, className = "" }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}
