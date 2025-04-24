import { CategoryFilter } from "@/components/home/category-filter";
import { ProductGrid } from "@/components/home/product-grid";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { getAllProducts } from "@/lib/data";

export default function Home() {
  const allProducts = getAllProducts();
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];
  return (
    <>
      <Header />
      <main>
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <Heading as="h1" className="mb-2">
              Soluciones financieras para tu futuro
            </Heading>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Descubre nuestros productos financieros diseñados para impulsar tu
              crecimiento económico con seguridad y transparencia.
            </p>
          </div>

          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <Heading as="h2" className="mb-6 font-bold tracking-tight">
                Nuestros Productos
              </Heading>
              <CategoryFilter categories={categories} />
              <ProductGrid products={allProducts} />
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
