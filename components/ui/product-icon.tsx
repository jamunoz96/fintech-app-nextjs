"use client";

import { CreditCard, Percent, Shield, TrendingUp } from "lucide-react";
import { JSX } from "react";

export const getProductIcon = (type: string) => {
  const iconsMap: Record<string, JSX.Element> = {
    Cuenta: <Shield className="h-6 w-6" />,
    Inversión: <TrendingUp className="h-6 w-6" />,
    Tarjeta: <CreditCard className="h-6 w-6" />,
  };

  return iconsMap[type] || <Percent className="h-6 w-6" />;
};
