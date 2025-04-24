"use client";

import type React from "react";
import styled from "styled-components";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

// Creamos componentes específicos para cada nivel de encabezado en lugar de usar createElement
const H1 = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const H2 = styled.h2`
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const H4 = styled.h4`
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const H5 = styled.h5`
  font-weight: 700;
  line-height: 1.2;
  font-size: 1rem;
`;

const H6 = styled.h6`
  font-weight: 700;
  line-height: 1.2;
  font-size: 0.875rem;
`;

export function Heading({ as, children, className = "" }: HeadingProps) {
  // Renderizamos el componente específico según el nivel de encabezado
  const HeadingMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };

  const Component = HeadingMap[as] || H1;
  return <Component className={className}>{children}</Component>;
}
