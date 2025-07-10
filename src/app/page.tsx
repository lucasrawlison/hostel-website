"use client";
import {
  Search,
  MapPin,
  Star,
  Heart,
  Users,
  Wifi,
  Car,
  Coffee,
  Shield,
  Award,
  Phone,
  LoaderCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import hero from "@/imgs/pbHero1.jpeg";
import hero2 from "@/imgs/pbHero2.jpeg";
import igrejaBananeiras from "@/imgs/igrejaBananeiras.jpg";
import formatarEmReal from "@/app/utils/formatarEmReal";
import CasaBananeiras1 from "@/imgs/properties/1/casa-bananeiras.jpg";

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
import React, { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export default function Component() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  interface Amenity {
    id: number;
    name: string; // Nome do ícone ou recurso
    icon: string; // Caminho ou nome do ícone
    properties?: Property[]; // Propriedades associadas a este recurso
  }

  interface Property {
    id: number;
    title: string;
    image: string;
    locationMin: string;
    price: number;
    rating: number;
    reviewsQtd: number;
    guests: number;
    bedrooms: number;
    bathrooms: number;
    amenities: Amenity[];
  }

  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [isLoadingFeaturedProperties, setIsLoadingFeaturedProperties] =
    useState(true);

  const getFeaturedProperties = async () => {
    setIsLoadingFeaturedProperties(true);
    try {
      const response = await axios.get("/api/getFeaturedProperties");
      if (response.status === 200) {
        const data = response.data.featuredProperties;

        setFeaturedProperties(data);
        setIsLoadingFeaturedProperties(false);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error fetching featured properties:", error.message);
      }
      setIsLoadingFeaturedProperties(false);
    }
  };

  useEffect(() => {
    getFeaturedProperties();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-orange-400 text-white h-[600px]">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="absolute inset-0"
        >
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
                src={igrejaBananeiras}
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
          <div className=" backdrop-blur-xs shadow-2xl sm:rounded-2xl sm:backdrop-blur-none sm:bg-white outline-blue-100/50 outline-1 scale-75 translate-y-28 sm:translate-0 sm:scale-100  p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium sm:text-black text-white mb-2">
                  Destino
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-white sm:text-black" />
                  <Input
                    disabled
                    placeholder="Paraíba, Paraíba"
                    className=" placeholder:text-white pl-10 h-12 text-white sm:placeholder:text-black border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>

              <div className="">
                <label className="block text-sm font-medium text-white mb-2 sm:text-black">
                  Hóspedes
                </label>
                <Select>
                  <SelectTrigger className="w-full sm: text-white sm:text-black border-gray-200 focus:border-orange-400 focus:ring-orange-400">
                    <Users className="w-5 h-5 text-white mr-2 sm:text-black" />
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
                <Search className="w-5 h-5 mr-2 " />
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

          {isLoadingFeaturedProperties ? (
            <div className="min-w-full min-h-[489px] flex justify-center items-center">
              <LoaderCircle size={25} className=" text-gray-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProperties.length > 0 &&
                featuredProperties.map((property) => (
                  <Link key={property.id} href={"/property/" + property.id}>
                    <Card className="hover:cursor-pointer group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 overflow-hidden">
                      <div className="relative">
                        <Image
                          src={CasaBananeiras1}
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
                              ({property.reviewsQtd} avaliações)
                            </span>
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {property.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 flex items-center">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">
                            {property.locationMin}
                          </span>
                        </p>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 space-x-3 sm:space-x-4">
                          <span>{property.guests} hóspedes</span>
                          <span>{property.bedrooms} quartos</span>
                          <span>{property.bathrooms} banheiros</span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                          {property.amenities
                            .slice(0, 2)
                            .map((amenity, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                              >
                                {amenity.name}
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
                              {formatarEmReal(property.price)}
                            </span>
                            <span className="text-sm sm:text-base text-gray-500">
                              /noite
                            </span>
                          </div>

                          <Button className=" hover:cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm sm:text-base px-3 sm:px-4">
                            Ver Detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          )}

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/properties">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-200 text-orange-600 hover:bg-orange-50 w-full sm:w-auto hover:cursor-pointer"
              >
                Ver Todas as Propriedades
              </Button>
            </Link>
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
    </div>
  );
}
