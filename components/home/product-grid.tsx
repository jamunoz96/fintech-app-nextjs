"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import styled from "styled-components";
import { ArrowRight, Percent, Shield, TrendingUp } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
}

const ProductIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--primary);
  color: white;
  margin-bottom: 1rem;
`;

const RiskIndicator = styled.div<{ level: number }>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  .bar-container {
    display: flex;
    width: 100px;
    height: 6px;
    background-color: #e5e7eb;
    border-radius: 3px;
    margin-left: 0.5rem;
    overflow: hidden;
  }

  .bar {
    height: 100%;
    background-color: ${(props) => {
      if (props.level <= 2) return "#10b981";
      if (props.level <= 3) return "#f59e0b";
      return "#ef4444";
    }};
    width: ${(props) => `${props.level * 20}%`};
  }
`;

export function ProductGrid({ products: initialProducts }: ProductGridProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);

  useEffect(() => {
    if (categoryParam) {
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setFilteredProducts(getAllProducts());
    }
  }, [categoryParam]);

  const getProductIcon = (type: string) => {
    const iconsMap: Record<string, JSX.Element> = {
      Cuenta: <Shield className="h-6 w-6" />,
      Inversión: <TrendingUp className="h-6 w-6" />,
    };

    return iconsMap[type] || <Percent className="h-6 w-6" />;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id}>
          <CardContent className="pt-6">
            <ProductIcon>{getProductIcon(product.type)}</ProductIcon>

            <Badge
              variant={product.category === "Tarjetas" ? "warning" : "default"}
            >
              {product.category}
            </Badge>

            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.type}</p>

            {product.interestRate !== undefined && (
              <div className="mt-4">
                <span className="text-2xl font-bold">
                  {product.interestRate}%
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  Interés anual
                </span>
              </div>
            )}

            {product.riskLevel !== undefined && (
              <RiskIndicator level={product.riskLevel}>
                <span className="text-sm">Riesgo:</span>
                <div className="bar-container">
                  <div className="bar"></div>
                </div>
              </RiskIndicator>
            )}

            <p className="mt-4 text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </CardContent>

          <CardFooter>
            <Link href={`/product/${product.id}`} className="w-full">
              <Button className="w-full">
                Ver detalles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
