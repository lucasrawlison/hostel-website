"use client"
import {
  ArrowLeft,
  Star,
  Heart,
  Share,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Waves,
  Coffee,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CasaBananeiras1 from "@/imgs/properties/1/casa-bananeiras.jpg";
import CasaBananeiras2 from "@/imgs/properties/1/casa-bananeiras2.jpg";
import CasaBananeiras3 from "@/imgs/properties/1/casa-bananeiras3.jpg";
import CasaBananeiras4 from "@/imgs/properties/1/casa-bananeiras4.jpg";
import CasaBananeiras5 from "@/imgs/properties/1/casa-bananeiras5.jpg";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertyDetails() {
  const MapVis = dynamic(() => import("@/app/utils/map"), { ssr: false });

  const property = {
    id: 1,
    title: "Casa em Bananeiras - PB",
    locationMin: "Centro, Bananeiras, Paraíba",
    price: 180,
    rating: 4.8,
    reviewsQtd: 124,

    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description: `Desfrute de uma estadia inesquecível nesta casa moderna com vista deslumbrante para o centro da cidade. 
    
    Localizado a apenas 50 metros do centro, este espaço oferece o equilíbrio perfeito entre conforto e localização privilegiada. A casa foi recentemente renovada com acabamentos de alta qualidade e decoração contemporânea.
    
    A sala de estar ampla e arejada se conecta perfeitamente com a varanda, onde você pode relaxar enquanto aprecia o pôr do sol sobre a serra. A cozinha totalmente equipada permite que você prepare suas refeições favoritas, e os dois quartos oferecem descanso tranquilo após um dia explorando as belezas de Bananeiras.`,
    amenities: [
      { name: "WiFi gratuito", icon: Wifi, available: true },
      { name: "Ar condicionado", icon: Waves, available: true },
      { name: "Vista para o mar", icon: Waves, available: true },
      { name: "Piscina", icon: Waves, available: true },
      { name: "Estacionamento", icon: Car, available: true },
      { name: "Cozinha completa", icon: Coffee, available: true },
      { name: "TV a cabo", icon: Coffee, available: true },
      { name: "Máquina de lavar", icon: Coffee, available: true },
      { name: "Ferro de passar", icon: Coffee, available: true },
      { name: "Secador de cabelo", icon: Coffee, available: true },
      { name: "Produtos de limpeza", icon: Coffee, available: true },
      { name: "Toalhas e roupas de cama", icon: Coffee, available: true },
    ],
    host: {
      name: "Júnior Soares",
      avatar: "/placeholder.svg?height=100&width=100",
      responseTime: "Responde em 1 hora",
      languages: ["Português", "Inglês", "Espanhol"],
      verified: true,
      joinedDate: "Membro desde 2019",
    },
    location: {
      address: "Bananeiras, Paraíba, Brasil",
      coordinates: { lat: -6.751821, lng:-35.637256},
      nearbyPlaces: [
        { name: "Centro", distance: "50m", type: "Turismo, comércio" },
        { name: "Antiga ferroviária", distance: "1.2km", type: "Turismo" },
        { name: "Área da festa de São João", distance: "3.5km", type: "Festa" },
        { name: "Solânea", distance: "4.2km", type: "Passeio" },
      ],
    },
    rules: [
      "Check-in: 15:00 - 22:00",
      "Check-out: até 11:00",
      "Não é permitido fumar",
      "Não são permitidos animais de estimação",
      "Não é permitido fazer festas ou eventos",
      "Máximo de 4 hóspedes",
    ],

    reviews: [
      {
        id: 1,
        user: "João Santos",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "Dezembro 2023",
        comment:
          "Casa incrível com vista espetacular! Júnior foi excepcional, sempre disponível para ajudar. A localização é perfeita, bem no coração de Bananeiras. Recomendo muito!",
      },
      {
        id: 2,
        user: "Ana Costa",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "Novembro 2023",
        comment:
          "Estadia maravilhosa! A casa é exatamente como nas fotos, tudo muito limpo e bem equipado. Voltaremos com certeza!",
      },
      {
        id: 3,
        user: "Carlos Oliveira",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 4,
        date: "Outubro 2023",
        comment:
          "Ótima localização e casa confortável. Apenas o WiFi poderia ser um pouco mais rápido, mas no geral foi uma experiência muito boa.",
      },
    ],
  };

  const similarProperties = [
    {
      id: 2,
      title: "Loft Moderno - Manaíra",
      location: "Manaíra, João Pessoa",
      price: 150,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Casa de Praia - Cabo Branco",
      location: "Cabo Branco, João Pessoa",
      price: 320,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Studio Aconchegante - Centro",
      location: "Centro Histórico, João Pessoa",
      price: 90,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 hover:text-orange-600">
                  Voltar
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-orange-600"
              >
                <Share className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Compartilhar</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-red-500"
              >
                <Heart className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Salvar</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Property Title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm sm:text-base">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-gray-500">
                  ({property.reviewsQtd} avaliações)
                </span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{property.locationMin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 rounded-2xl overflow-hidden">
            <div className="lg:col-span-2 lg:row-span-2">
              <Image
                src={CasaBananeiras1 || "/placeholder.svg"}
                alt={property.title}
                width={800}
                height={600}
                className="hover:cursor-pointer w-full h-64 sm:h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src={CasaBananeiras2 || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="hover:cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src={CasaBananeiras3 || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="hover:cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src={CasaBananeiras4 || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="hover:cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:block relative">
              <Image
                src={CasaBananeiras5 || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="hover:cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button
                  className="hover:cursor-pointer"
                  variant="secondary"
                  size="sm"
                >
                  Ver todas as fotos
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Casa hospedado por {property.host.name}
                  </h2>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{property.guests} hóspedes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} quartos</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} banheiros</span>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {property.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  O que este lugar oferece
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <amenity.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{amenity.name}</span>
                      {amenity.available && (
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Onde você ficará
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <p className="text-gray-700 mb-2">
                    {property.location.address}
                  </p>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <MapVis
                      latitude={property.location.coordinates.lat}
                      longitude={property.location.coordinates.lng}
                      zoom={16}
                      height={256} // 16rem = 256px para h-64

                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {property.location.nearbyPlaces.map((place, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {place.name}
                        </p>
                        <p className="text-sm text-gray-600">{place.type}</p>
                      </div>
                      <Badge variant="secondary">{place.distance}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>
                    {property.rating} · {property.reviews.length} avaliações
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-6">
                  {property.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                    >
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.user}
                          />
                          <AvatarFallback>
                            {review.user.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900">
                              {review.user}
                            </h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">
                            {review.date}
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6 bg-transparent"
                >
                  Ver todas as {property.reviews.length} avaliações
                </Button>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Regras da casa
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {property.rules.map((rule, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-xl border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        R$ {property.price}
                      </span>
                      <span className="text-gray-500 ml-1">/noite</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{property.rating}</span>
                      <span className="text-gray-500 text-sm">
                        ({property.reviews.length})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {/* <div className="border border-gray-300 rounded-lg p-3">
                        <label className="block text-xs font-medium text-gray-700 mb-1">CHECK-IN</label>
                        <Input placeholder="dd/mm/aaaa" className="border-0 p-0 text-sm" />
                      </div>
                      <div className="border border-gray-300 rounded-lg p-3">
                        <label className="block text-xs font-medium text-gray-700 mb-1">CHECK-OUT</label>
                        <Input placeholder="dd/mm/aaaa" className="border-0 p-0 text-sm" />
                      </div> */}
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        HÓSPEDES
                      </label>
                      <Select>
                        <SelectTrigger className="border-0 p-0 text-sm">
                          <SelectValue placeholder="1 hóspede" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hóspede</SelectItem>
                          <SelectItem value="2">2 hóspedes</SelectItem>
                          <SelectItem value="3">3 hóspedes</SelectItem>
                          <SelectItem value="4">4 hóspedes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className=" hover:cursor-pointer w-full h-12 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold mb-4">
                    Reservar
                  </Button>

                  <p className="text-center text-sm text-gray-500 mb-4">
                    Você ainda não será cobrado
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        R$ {property.price} x 5 noites
                      </span>
                      <span className="text-gray-900">
                        R$ {property.price * 5}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Taxa de limpeza</span>
                      <span className="text-gray-900">R$ 50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Taxa de serviço</span>
                      <span className="text-gray-900">R$ 89</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>R$ {property.price * 5 + 50 + 89}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Host Info */}
              {/* <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={property.host.avatar || "/placeholder.svg"} alt={property.host.name} />
                      <AvatarFallback>{property.host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">Hospedado por {property.host.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{property.host.rating}</span>
                        <span>·</span>
                        <span>{property.host.reviews} avaliações</span>
                        {property.host.verified && (
                          <>
                            <span>·</span>
                            <Shield className="w-3 h-3 text-green-500" />
                            <span>Verificado</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>{property.host.responseTime}</p>
                    <p>{property.host.joinedDate}</p>
                    <p>Idiomas: {property.host.languages.join(", ")}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contatar
                    </Button>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Propriedades similares
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((similar) => (
              <Card
                key={similar.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={similar.image || "/placeholder.svg"}
                    alt={similar.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 w-8 h-8 p-0"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {similar.rating}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                    {similar.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {similar.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        R$ {similar.price}
                      </span>
                      <span className="text-gray-500 text-sm">/noite</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Ver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
