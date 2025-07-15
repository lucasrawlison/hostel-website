"use client"

import { useEffect, useState } from "react"
import {
  Search,
  MapPin,
  Star,
  Heart,
  Filter,
  Grid3X3,
  List,
  SlidersHorizontal,
  X,
  ChevronDown,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Waves,
  Coffee,
  Shield,
  Home,
  Building,
  LoaderCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Property } from "@/app/types/property";
// import placeholder from "@/imgs/placeholder.svg"
import axios, { isAxiosError } from "axios"


export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list" >("grid")
  const [priceRange, setPriceRange] = useState([50, 500])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoadingProperties, setIsLoadingProperties] = useState(false)

  const getAllProperties = async () => {
    setIsLoadingProperties(true)
    try {
      const response = await axios.get("/api/getAllProperties")
      if(response.status === 200){
        const data = response.data.properties;
        setProperties(data)
        setIsLoadingProperties(false)
      }
    } catch (error) {

      setIsLoadingProperties(false)
      if(isAxiosError(error)){
        console.error("Erro ao buscar propriedades:", error.response?.data || error.message)
      }
    }
  }



  useEffect(()=>{
    console.log("Propriedades carregadas:", isLoadingProperties)
  },[isLoadingProperties])
  useEffect(()=>{
    getAllProperties();
  },[])

  const amenitiesList = [
    { id: "wifi", name: "WiFi", icon: Wifi },
    { id: "parking", name: "Estacionamento", icon: Car },
    { id: "pool", name: "Piscina", icon: Waves },
    { id: "kitchen", name: "Cozinha", icon: Coffee },
    { id: "ac", name: "Ar Condicionado", icon: Waves },
    { id: "security", name: "Segurança 24h", icon: Shield },
  ]

  const propertyTypes = [
    { id: "apartment", name: "Apartamento", icon: Building },
    { id: "house", name: "Casa", icon: Home },
    { id: "loft", name: "Loft", icon: Building },
    { id: "studio", name: "Studio", icon: Building },
    { id: "penthouse", name: "Cobertura", icon: Building },
  ]

  const neighborhoods = [
    "Tambaú",
    "Cabo Branco",
    "Manaíra",
    "Bessa",
    "Altiplano",
    "Centro Histórico",
    "Miramar",
    "Bancários",
  ]

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId) ? prev.filter((id) => id !== amenityId) : [...prev, amenityId],
    )
  }

  const togglePropertyType = (typeId: string) => {
    setSelectedPropertyTypes((prev) => (prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId]))
  }

  const FilterContent = () => (
    <div className="space-y-6 overflow-y-auto">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Faixa de preço</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="mb-4" />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}+</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Property Type */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Tipo de propriedade</h3>
        <div className="space-y-3">
          {propertyTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-3">
              <Checkbox
                id={type.id}
                checked={selectedPropertyTypes.includes(type.id)}
                onCheckedChange={() => togglePropertyType(type.id)}
              />
              <type.icon className="w-4 h-4 text-gray-500" />
              <label htmlFor={type.id} className="text-sm text-gray-700 cursor-pointer">
                {type.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Comodidades</h3>
        <div className="space-y-3">
          {amenitiesList.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-3">
              <Checkbox
                id={amenity.id}
                checked={selectedAmenities.includes(amenity.id)}
                onCheckedChange={() => toggleAmenity(amenity.id)}
              />
              <amenity.icon className="w-4 h-4 text-gray-500" />
              <label htmlFor={amenity.id} className="text-sm text-gray-700 cursor-pointer">
                {amenity.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Neighborhoods */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-semibold text-gray-900">Bairros</h3>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="space-y-3">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="flex items-center space-x-3">
                <Checkbox id={neighborhood} />
                <label htmlFor={neighborhood} className="text-sm text-gray-700 cursor-pointer">
                  {neighborhood}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      {/* Instant Book */}
      <div>
        <div className="flex items-center space-x-3">
          <Checkbox id="instant-book" />
          <label htmlFor="instant-book" className="text-sm text-gray-700 cursor-pointer">
            Reserva instantânea
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-1">Propriedades que você pode reservar sem aguardar aprovação</p>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        Limpar filtros
      </Button>
    </div>
  )

  const PropertyCard = ({ property, isListView = false }: { property: Property; isListView?: boolean }) => (
   <Link href={`/property/${property.id}`} className="no-underline">
    <Card
      
      className={`group hover:shadow-xl hover:cursor-pointer transition-all duration-300 border-orange-100 hover:border-orange-200 overflow-hidden ${isListView ? "flex flex-row" : ""}`}
    >
      <div className={`relative ${isListView ? "w-80 flex-shrink-0" : ""}`}>
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={400}
          height={300}
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            isListView ? "w-full h-full" : "w-full h-48"
          }`}
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 w-8 h-8 p-0"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {/* {property.instantBook && (
          <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-xs">Reserva Instantânea</Badge>
        )} */}
      </div>
      <CardContent className={`${isListView ? "flex-1 flex flex-col justify-between" : ""} p-4 sm:p-6`}>
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">{property.rating}</span>
              <span className="text-xs sm:text-sm text-gray-500">({property.reviewsQtd} avaliações)</span>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
            {property.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 flex items-center">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            {/* <span className="truncate">{property.location}</span> */}
          </p>
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 space-x-3 sm:space-x-4">
            <span className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {property.guests}
            </span>
            <span className="flex items-center">
              <Bed className="w-3 h-3 mr-1" />
              {property.bedrooms}
            </span>
            <span className="flex items-center">
              <Bath className="w-3 h-3 mr-1" />
              {property.bathrooms}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity , index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                {amenity.name}
              </Badge>
            ))}
            {property.amenities.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                +{property.amenities.length - 3} mais
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">R$ {property.price}</span>
            <span className="text-sm sm:text-base text-gray-500">/noite</span>
          </div>
            <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm sm:text-base px-3 sm:px-4">
              Ver Detalhes
            </Button>
        </div>
      </CardContent>
    </Card>
   </Link>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Buscar por localização, propriedade ou anfitrião..."
                className="pl-10 h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="rating">Melhor avaliação</SelectItem>
                  <SelectItem value="newest">Mais recente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80">
            <div className="">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Filtros
                  </h2>
                  <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                </div>
                <FilterContent />
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters & View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                {/* Mobile Filters */}
                <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden bg-transparent"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 p-0">
                    <SheetHeader className="p-6 pb-0">
                      <SheetTitle className="flex items-center justify-between">
                        Filtros
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsFiltersOpen(false)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="p-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
                  <span className="text-sm text-gray-600">
                    {properties.length} propriedades encontradas
                  </span>
                  <div
                    onClick={() => getAllProperties()}
                    className="hover:cursor-pointer flex flex-row gap-1 items-center justify-center"
                  >
                    <span className="text-sm text-gray-600">recarregar</span>
                    <Loader2 className="w-2.5 h-2.5 translate-y-0.5 " />
                  </div>
              </div>

              {/* View Mode Controls */}
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Properties Grid/List */}

            <div
              className={
                viewMode === "grid"
                  ? "relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 min-h-screen"
                  : "space-y-6"
              }
            >
              {/* Loading State */}
              {isLoadingProperties && (
                <div className="absolute flex items-center justify-center bg-white/85 w-full h-full">
                  <LoaderCircle className="w-8 h-8 text-black animate-spin" />
                </div>
              )}
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isListView={viewMode === "list"}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button
                variant="default"
                className="bg-orange-500 hover:bg-orange-600"
              >
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Próximo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
