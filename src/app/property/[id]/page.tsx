"use client";
import {
  ArrowLeft,
  Star,
  Heart,
  Share,
  MapPin,
  Users,
  Bed,
  Bath,
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
import { use, useEffect, useState } from "react";
import { Property } from "@/app/types/property";
import axios, { isAxiosError } from "axios";
import { useParams } from "next/navigation";
import formatarEmReal from "@/app/utils/formatarEmReal";
import { Input } from "@/components/ui/input";
import Calendar22 from "@/components/datePicker"
import diferencaEmDias from "@/app/utils/diferençaDias";

export default function PropertyDetails() {
  const { id } = useParams();

  const MapVis = dynamic(() => import("@/app/utils/map"), { ssr: false });
  const [property, setProperty] = useState<Property | undefined>(undefined);
  const [isLoagingProperty, setIsLoadingProperty] = useState<boolean>(true);
  const [date1, setDate1] = useState<Date | undefined>(undefined);
  const [date2, setDate2] = useState<Date | undefined>(undefined);
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

  const getPropertyById = async () => {
    setIsLoadingProperty(true);
    try {
      const response = await axios.post("/api/getPropertyById", {
        id,
      });
      if (response.status === 200) {
        const data = response.data.property;
        console.log("resopnse:", response);
        console.log("response:", data);
        setProperty(data);
      }
    } catch (error) {
      setIsLoadingProperty(false);
      if (isAxiosError(error)) {
      }
    }
  };

  useEffect(()=> {
    if (date1 && date2) {
      if (date1 > date2) {
        setDate2(undefined);
      }
    }


  }, [date1, date2]);

  useEffect(() => {
    getPropertyById();
  }, []);


  if (property) {
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
                  <div className={`grid grid-cols-1 ${property.amenities.length === 0 ? ("sm:grid-cols-1") : ("sm:grid-cols-2")} gap-4`}>
                    {property.amenities.length > 0 ? (
                      <>
                        {property.amenities.map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <span className="text-gray-700">
                              {amenity.name}
                            </span>
                            {amenity.available && (
                              <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                            )}
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="w-full flex justify-center">
                        <p>Sem comodidades disponíveis</p>
                      </div>
                    )}
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
                        latitude={property.location.lat}
                        longitude={property.location.lng}
                        zoom={16}
                        height={256} // 16rem = 256px para h-64
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    
                    {property.nearbyPlaces.length > 0 && property.nearbyPlaces.map((place, index) => (
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
                      {property.rating} · {property.reviewsQtd} avaliações
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  {property.reviewsQtd > 0 ? (
                    <>
                      <div className="space-y-6">
                        {/* {property.reviews.map((review) => (
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
                    ))} */}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-6 bg-transparent"
                      >
                        Ver todas as {property.reviewsQtd} avaliações
                      </Button>
                    </>
                  ) : (
                    <div className="w-full flex justify-center">
                      <p>Sem Avaliações</p>
                    </div>
                  )}
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
                    {property.rules.length > 0 ? (
                      <>
                        {property.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{rule}</span>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="w-full flex justify-center">
                        <p>Sem regras específicas, apenas seja bem-vindo.</p>
                      </div>
                    )}
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
                          {formatarEmReal(property.price)}
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
                          <Calendar22 title="Data de ida" date={date1} onChange={setDate1}/>
                        
                          <Calendar22 title="Data da volta" date1={date1} date={date2} onChange={setDate2}/>
                        
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
                    <p className="w-full text-center text-sm text-gray-500 mb-4">

{date1?.toLocaleDateString() + " até " + date2?.toLocaleDateString()}
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          R$ {property.price} x {diferencaEmDias(date1, date2)} noites
                        </span>
                        <span className="text-gray-900">
                          R$ {property.price * diferencaEmDias(date1, date2)}
                        </span>
                      </div>
                      {/* <div className="flex justify-between">
                        <span className="text-gray-700">Taxa de limpeza</span>
                        <span className="text-gray-900">R$ 50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Taxa de serviço</span>
                        <span className="text-gray-900">R$ 89</span>
                      </div> */}
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>R$ {property.price * diferencaEmDias(date1, date2)}</span>
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
  } else {
    return (
      // Loading state
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-orange-500"></div>
          <p className="text-gray-600">Carregando propriedade...</p>
        </div>
      </div>
      // <div className="min-h-screen bg-gray-50">
      //   {/* Header */}
      //   <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
      //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //       <div className="flex justify-between items-center h-16">
      //         <div className="flex items-center space-x-4">
      //           <Link href="/" className="flex items-center space-x-2">
      //             <ArrowLeft className="w-5 h-5 text-gray-600" />
      //             <span className="text-gray-600 hover:text-orange-600">
      //               Voltar
      //             </span>
      //           </Link>
      //         </div>
      //         <div className="flex items-center space-x-2 sm:space-x-4">
      //           <Button
      //             variant="ghost"
      //             size="sm"
      //             className="text-gray-600 hover:text-orange-600"
      //           >
      //             <Share className="w-4 h-4 sm:mr-2" />
      //             <span className="hidden sm:inline">Compartilhar</span>
      //           </Button>
      //           <Button
      //             variant="ghost"
      //             size="sm"
      //             className="text-gray-600 hover:text-red-500"
      //           >
      //             <Heart className="w-4 h-4 sm:mr-2" />
      //             <span className="hidden sm:inline">Salvar</span>
      //           </Button>
      //         </div>
      //       </div>
      //     </div>
      //   </header>
      // </div>
    );
  }
}
