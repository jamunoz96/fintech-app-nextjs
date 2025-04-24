import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ProductDetails } from "@/components/product/product-details";
import { ProductBenefits } from "@/components/product/product-benefits";
import { ProductPerformance } from "@/components/product/product-performance";
import { getProductById } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-8 md:py-12">
            <Link href="/" className="inline-flex items-center mb-6">
              <Button variant="ghost" className="pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Button>
            </Link>

            <Heading as="h1" className="mb-6">
              {product.name}
            </Heading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ProductDetails product={product} />
                <ProductBenefits product={product} />
              </div>
              <div>
                <ProductPerformance product={product} />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
