"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const FooterWrapper = styled.footer`
  background-color: var(--muted);
  border-top: 1px solid var(--border);
  padding: 3rem 0;
  margin-top: 3rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: var(--muted-foreground);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary);
  }
`;

const FooterText = styled.p`
  color: var(--muted-foreground);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: var(--background);
  color: var(--foreground);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 0.875rem;
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <Logo />
            <FooterText className="mt-4 mb-4">
              Soluciones financieras digitales diseñadas para ayudarte a
              alcanzar tus metas y simplificar tu vida financiera.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Productos</FooterHeading>
            <FooterLink href="#">Cuentas</FooterLink>
            <FooterLink href="#">Inversiones</FooterLink>
            <FooterLink href="#">Tarjetas</FooterLink>
            <FooterLink href="#">Préstamos</FooterLink>
            <FooterLink href="#">Seguros</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Compañía</FooterHeading>
            <FooterLink href="#">Sobre nosotros</FooterLink>
            <FooterLink href="#">Carreras</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Prensa</FooterLink>
            <FooterLink href="#">Responsabilidad social</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Contacto</FooterHeading>
            <FooterText>
              <Phone size={16} />
              +34 900 123 456
            </FooterText>
            <FooterText>
              <Mail size={16} />
              info@fintechpro.com
            </FooterText>
            <FooterText>
              <MapPin size={16} />
              Calle Financiera 123, Madrid
            </FooterText>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          © {currentYear} FinTech Pro. Todos los derechos reservados.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
}
