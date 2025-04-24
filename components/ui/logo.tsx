"use client";

import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary);
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  color: white;
  border-radius: 8px;
  margin-right: 8px;
`;

export function Logo() {
  return (
    <LogoWrapper>
      <LogoIcon>F</LogoIcon>
      <span>FinTech APP</span>
    </LogoWrapper>
  );
}
