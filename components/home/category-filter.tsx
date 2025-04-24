"use client";

import { useState } from "react";
import styled from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

const FilterContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  ${(props) =>
    props.$active
      ? `
    background-color: var(--primary);
    color: white;
  `
      : `
    background-color: var(--muted);
    color: var(--muted-foreground);
    
    &:hover {
      background-color: var(--border);
    }
  `}

  & + & {
    margin-left: 0.5rem;
  }
`;

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryParam
  );

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <FilterContainer>
      <FilterButton
        $active={activeCategory === null}
        onClick={() => handleCategoryClick(null)}
        aria-label="Mostrar todos los productos"
      >
        Todos
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category}
          $active={activeCategory === category}
          onClick={() => handleCategoryClick(category)}
          aria-label={`Filtrar por ${category}`}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}
