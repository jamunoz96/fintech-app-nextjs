"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Productos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Nosotros
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Blog
            </Link>
            <Button>Contacto</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Inicio
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Productos
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Nosotros
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Blog
              </Link>
              <Button className="w-full">Contacto</Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
