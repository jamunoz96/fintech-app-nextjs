"use client";

import styled from "styled-components";
import type { Product } from "@/lib/types";
import { Check } from "lucide-react";
import { Heading } from "../ui/heading";

interface ProductBenefitsProps {
  product: Product;
}

const BenefitsCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const BenefitItem = styled.div`
  display: flex;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BenefitIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ecfdf5;
  color: #047857;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const BenefitText = styled.div`
  font-size: 0.875rem;
`;

export function ProductBenefits({ product }: ProductBenefitsProps) {
  const benefits = product.benefits || [
    "Acceso 24/7 a tu cuenta desde cualquier dispositivo",
    "Atención al cliente personalizada",
    "Sin comisiones ocultas",
    "Proceso 100% digital",
  ];

  return (
    <BenefitsCard>
      <Heading as="h3" className=" mb-4">
        Beneficios
      </Heading>

      {benefits.map((benefit, index) => (
        <BenefitItem key={index}>
          <BenefitIcon>
            <Check className="h-4 w-4" />
          </BenefitIcon>
          <BenefitText>{benefit}</BenefitText>
        </BenefitItem>
      ))}
    </BenefitsCard>
  );
}
