import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Instagram, Mail, Phone, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import logo from "@/imgs/logo.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sol e Mar - Aluguéis na Paraíba",
  description: "Sua melhor opção para aluguéis na Paraíba. Descubra a cidade onde o sol nasce primeiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow-sm border-b border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4 sm:space-x-8">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={logo}
                    alt="Paraíba Hero Image"
                    className=" size-9"
                  />

                  <span className="text-lg sm:text-xl font-bold text-amber-500">
                    Sol 
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                     e
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-cyan-700">
                    Mar
                  </span>
                </Link>
                <nav className="hidden lg:flex space-x-6">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Propriedades
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Experiências
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Contato
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* <Button variant="ghost" className="hidden sm:flex text-gray-700 hover:text-orange-600 text-sm">
                Anuncie sua propriedade
              </Button> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-200 hover:bg-orange-50"
                    >
                      <User className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Entrar</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <User className="w-4 h-4 mr-2" />
                      Fazer Login
                    </DropdownMenuItem>
                    <DropdownMenuItem>Criar Conta</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Minhas Reservas</DropdownMenuItem>
                    <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="sm:hidden">
                      Anuncie sua propriedade
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={logo}
                    alt="Paraíba Hero Image"
                    className=" size-9"
                  />

                  <span className="text-lg sm:text-xl font-bold text-amber-500">
                    Sol 
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white">
                     e
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-cyan-700">
                    Mar
                  </span>
                </Link>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Sua melhor opção para aluguéis na Paraíba. Descubra a cidade
                  onde o sol nasce primeiro.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:cursor-pointer text-gray-400 hover:text-black p-2"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:cursor-pointer text-gray-400 hover:text-black p-2"
                  >
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:cursor-pointer text-gray-400 hover:text-black p-2"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Propriedades
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Tambaú
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cabo Branco
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Manaíra
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Bessa
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Centro Histórico
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Suporte
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Central de Ajuda
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cancelamento
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Segurança
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Termos de Uso
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Empresa
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Carreiras
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Imprensa
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Anuncie
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Parceiros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
              <p className="text-sm sm:text-base">
                &copy; 2025 A definir. Todos os direitos reservados.
              </p>
              <p className="text-sm sm:text-base">&copy; Developed by FIGO.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
