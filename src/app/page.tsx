"use client";
import {
  Search,
  MapPin,
  Star,
  Heart,
  Calendar,
  Users,
  Wifi,
  Car,
  Waves,
  Coffee,
  Shield,
  Award,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CasaBananeiras1 from "@/imgs/properties/1/casa-bananeiras.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay"

import hero from "@/imgs/pbHero1.jpeg";
import hero2 from "@/imgs/pbHero2.jpeg";
import igrejaBananeiras from "@/imgs/igrejaBananeiras.jpg";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export default function Component() {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  
  const featuredProperties = [
    {
      id: 1,
      title: "Casa com primeiro andar - Bananeiras",
      location: "Bananeiras, Paraíba",
      price: "R$ 180",
      rating: 4.8,
      reviews: 124,
      image: CasaBananeiras1,
      amenities: ["Wifi", "Ar Condicionado", "Vista para o Mar", "Piscina"],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Header */}

      {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-orange-400 text-white h-[600px]">
        <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0">
          <CarouselContent className="h-full inset-0">
            <CarouselItem className="relative h-[600px]">
              <Image
                src={hero}
                alt="Paraíba Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover opacity-50"
                priority
              />
            </CarouselItem>
            <CarouselItem className="relative h-[600px]">
              <Image
                src={hero2}
                alt="Paraíba Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover opacity-50"
                priority
              />
            </CarouselItem>
            <CarouselItem className="relative h-[600px]">
              <Image
                src={igrejaBananeiras}
                alt="Paraíba Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover opacity-50"
                priority
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Descubra a Paraíba
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
              Encontre o aluguel perfeito na cidade onde o sol nasce primeiro.
              Praias paradisíacas, cultura rica e hospitalidade única te
              esperam.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="sm:col-span-2 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Paraíba, Paraíba"
                    className="pl-10 h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-1 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in / Check-out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Selecionar datas"
                    className="pl-10 h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-1 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hóspedes
                </label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <SelectValue placeholder="2 hóspedes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hóspede</SelectItem>
                    <SelectItem value="2">2 hóspedes</SelectItem>
                    <SelectItem value="3">3 hóspedes</SelectItem>
                    <SelectItem value="4">4 hóspedes</SelectItem>
                    <SelectItem value="5">5+ hóspedes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <Button className="w-full h-12 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold text-base sm:text-lg">
                <Search className="w-5 h-5 mr-2" />
                Buscar Propriedades
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 sm:py-12 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Reserva Segura
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Pagamento protegido e cancelamento flexível
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Propriedades verificadas e avaliadas por hóspedes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Suporte 24/7
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Atendimento disponível a qualquer hora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Propriedades em Destaque
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Descubra os melhores aluguéis na Paraíba, desde apartamentos com
              vista para o mar até casas aconchegantes no centro histórico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} href={"/property/" + property.id}>
                <Card className="hover:cursor-pointer group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 w-8 h-8 p-0"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 text-xs">
                      Destaque
                    </Badge>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">
                          {property.rating}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          ({property.reviews} avaliações)
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {property.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 space-x-3 sm:space-x-4">
                      <span>{property.guests} hóspedes</span>
                      <span>{property.bedrooms} quartos</span>
                      <span>{property.bathrooms} banheiros</span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {property.amenities.slice(0, 2).map((amenity, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-600"
                        >
                          +{property.amenities.length - 2} mais
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">
                          {property.price}
                        </span>
                        <span className="text-sm sm:text-base text-gray-500">
                          /noite
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm sm:text-base px-3 sm:px-4">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-orange-200 text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
            >
              Ver Todas as Propriedades
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher A definir?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Somos especialistas na Paraíba e oferecemos a melhor experiência
              para sua estadia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Localização Privilegiada
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Propriedades nas melhores regiões de Paraíba
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wifi className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Comodidades Modernas
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                WiFi, ar-condicionado e tudo que você precisa
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Estacionamento Seguro
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Vagas garantidas para sua tranquilidade
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Experiência Local
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Dicas exclusivas dos melhores lugares da cidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">A definir</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Sua melhor opção para aluguéis na Paraíba. Descubra a cidade
                onde o sol nasce primeiro.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Mail className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Phone className="w-5 h-5" />
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
    </div>
  );
}
