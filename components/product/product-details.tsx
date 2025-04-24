"use client";

import styled from "styled-components";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { getProductIcon } from "../ui/product-icon";
import { Heading } from "../ui/heading";

interface ProductDetailsProps {
  product: Product;
}

const DetailsCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const DetailValue = styled.div`
  font-weight: 500;
  text-align: right;
`;

const ProductIcon = styled.div`
  background-color: var(--primary);
`;

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <DetailsCard>
      <div className="flex items-center mb-6">
        <ProductIcon className="flex items-center justify-center w-12 h-12 rounded-full text-white mr-4">
          {getProductIcon(product.type)}
        </ProductIcon>
        <div>
          <Badge
            variant={product.category === "Tarjetas" ? "warning" : "default"}
          >
            {product.category}
          </Badge>
          <Heading as="h2" className="mt-1">
            {product.type}
          </Heading>
        </div>
      </div>

      <DetailRow>
        <DetailLabel>Tipo de producto</DetailLabel>
        <DetailValue>{product.type}</DetailValue>
      </DetailRow>

      {product.interestRate !== undefined && (
        <DetailRow>
          <DetailLabel>Tasa de interés anual</DetailLabel>
          <DetailValue>{product.interestRate}%</DetailValue>
        </DetailRow>
      )}

      {product.riskLevel !== undefined && (
        <DetailRow>
          <DetailLabel>Nivel de riesgo</DetailLabel>
          <DetailValue>
            {product.riskLevel}/5
            {product.riskLevel <= 2 && " (Bajo)"}
            {product.riskLevel === 3 && " (Medio)"}
            {product.riskLevel > 3 && " (Alto)"}
          </DetailValue>
        </DetailRow>
      )}

      {product.term && (
        <DetailRow>
          <DetailLabel>Plazo</DetailLabel>
          <DetailValue className="flex items-center justify-end">
            <Calendar className="h-4 w-4 mr-1" />
            {product.term}
          </DetailValue>
        </DetailRow>
      )}

      {product.minimumAmount && (
        <DetailRow>
          <DetailLabel>Monto mínimo</DetailLabel>
          <DetailValue>${product.minimumAmount.toLocaleString()}</DetailValue>
        </DetailRow>
      )}

      <DetailRow>
        <DetailLabel>Categoría</DetailLabel>
        <DetailValue>{product.category}</DetailValue>
      </DetailRow>
    </DetailsCard>
  );
}
