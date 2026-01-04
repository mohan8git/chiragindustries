'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import ProductVideo from '@/components/ProductVideo'
import { Search, SlidersHorizontal, X, Check, Star, ArrowRight } from 'lucide-react'

const VideoFrameGallery = dynamic(() => import('@/components/VideoFrameGallery'), {
  ssr: false,
  loading: () => (
    <div className="aspect-square bg-forest-50 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-forest-200 border-t-forest-600 rounded-full animate-spin" />
    </div>
  ),
})

type Category = 'all' | 'bakelite' | 'wire' | 'oval' | 'knob' | 'cooker' | 'plastic-wire' | 'flameguard'
type Material = 'all' | 'bakelite' | 'stainless-steel' | 'plastic'

interface Product {
  id: string
  name: string
  category: Category
  material: Material
  video: string
  description: string
  features: string[]
  sku: string
  badge?: string
  rating: number
  subtype?: string
}

const products: Product[] = [
  // Bakelite Handles - Kadai
  {
    id: 'bh-kadai-1',
    name: 'Bakelite Kadai Handle - Standard',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-1.mp4',
    description: 'Durable bakelite handle designed for kadai cookware. Heat resistant and ergonomic grip.',
    features: ['Heat Resistant', 'Ergonomic Grip', 'Secure Fit'],
    sku: 'BH-KD-001',
    badge: 'Best Seller',
    rating: 5,
    subtype: 'Kadai',
  },
  {
    id: 'bh-kadai-2',
    name: 'Bakelite Kadai Handle - Premium',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-2.mp4',
    description: 'Premium bakelite handle set for large kadai. Enhanced durability and comfort.',
    features: ['Premium Quality', 'Large Size', 'Extra Durable'],
    sku: 'BH-KD-002',
    rating: 5,
    subtype: 'Kadai',
  },
  // Bakelite Handles - Saucepan
  {
    id: 'bh-sauce-1',
    name: 'Bakelite Saucepan Handle - Classic',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Classic bakelite handle for saucepans. Heat resistant up to 150°C.',
    features: ['Heat Resistant', 'Classic Design', 'Easy Install'],
    sku: 'BH-SP-001',
    badge: 'Popular',
    rating: 5,
    subtype: 'Saucepan',
  },
  {
    id: 'bh-sauce-2',
    name: 'Bakelite Saucepan Handle - Economy',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-1.mp4',
    description: 'Cost-effective bakelite handle for budget saucepan lines.',
    features: ['Economical', 'Reliable', 'Standard Fit'],
    sku: 'BH-SP-002',
    rating: 4,
    subtype: 'Saucepan',
  },
  // Bakelite Handles - Tawa
  {
    id: 'bh-tawa-1',
    name: 'Bakelite Tawa Handle - Standard',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-2.mp4',
    description: 'Standard bakelite handle for tawas. Non-slip grip design.',
    features: ['Non-Slip', 'Heat Resistant', 'Universal Fit'],
    sku: 'BH-TW-001',
    rating: 5,
    subtype: 'Tawa',
  },
  {
    id: 'bh-tawa-2',
    name: 'Bakelite Tawa Handle - Premium',
    category: 'bakelite',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Premium quality tawa handle with enhanced heat resistance.',
    features: ['Premium Build', 'Extra Heat Resistant', 'Stylish'],
    sku: 'BH-TW-002',
    badge: 'Premium',
    rating: 5,
    subtype: 'Tawa',
  },

  // Wire Handles - Kadai
  {
    id: 'wh-kadai-1',
    name: 'Wire Handle Kadai - Standard',
    category: 'wire',
    material: 'stainless-steel',
    video: '/videos/product-video-1.mp4',
    description: 'Stainless steel wire handle for kadai. Strong and durable construction.',
    features: ['SS Construction', 'Strong Grip', 'Rust Resistant'],
    sku: 'WH-KD-001',
    rating: 5,
    subtype: 'Kadai',
  },
  {
    id: 'wh-kadai-2',
    name: 'Wire Handle Kadai - Heavy Duty',
    category: 'wire',
    material: 'stainless-steel',
    video: '/videos/product-video-2.mp4',
    description: 'Heavy duty wire handle for large kadai cookware.',
    features: ['Heavy Duty', 'Large Size', 'Professional Grade'],
    sku: 'WH-KD-002',
    badge: 'Heavy Duty',
    rating: 5,
    subtype: 'Kadai',
  },
  // Wire Handles - Saucepan
  {
    id: 'wh-sauce-1',
    name: 'Wire Handle Saucepan - Standard',
    category: 'wire',
    material: 'stainless-steel',
    video: '/videos/product-video-3.mp4',
    description: 'Stainless steel wire handle for saucepans with secure mounting.',
    features: ['Secure Mount', 'Durable', 'Easy Clean'],
    sku: 'WH-SP-001',
    rating: 4,
    subtype: 'Saucepan',
  },
  // Wire Handles - Tawa
  {
    id: 'wh-tawa-1',
    name: 'Wire Handle Tawa - Standard',
    category: 'wire',
    material: 'stainless-steel',
    video: '/videos/product-video-1.mp4',
    description: 'Wire handle designed specifically for tawa cookware.',
    features: ['Tawa Specific', 'Strong Build', 'Heat Safe'],
    sku: 'WH-TW-001',
    rating: 5,
    subtype: 'Tawa',
  },
  {
    id: 'wh-tawa-2',
    name: 'Wire Handle Tawa - Premium',
    category: 'wire',
    material: 'stainless-steel',
    video: '/videos/product-video-2.mp4',
    description: 'Premium wire handle for professional tawa use.',
    features: ['Professional', 'Extra Strong', 'Long Lasting'],
    sku: 'WH-TW-002',
    badge: 'Professional',
    rating: 5,
    subtype: 'Tawa',
  },

  // Oval Handles - Kadai
  {
    id: 'oh-kadai-1',
    name: 'Oval Handle Kadai - Standard',
    category: 'oval',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Ergonomic oval-shaped handle for kadai. Comfortable grip design.',
    features: ['Oval Design', 'Ergonomic', 'Comfortable Grip'],
    sku: 'OH-KD-001',
    rating: 5,
    subtype: 'Kadai',
  },
  {
    id: 'oh-kadai-2',
    name: 'Oval Handle Kadai - Deluxe',
    category: 'oval',
    material: 'bakelite',
    video: '/videos/product-video-1.mp4',
    description: 'Deluxe oval handle set for premium kadai cookware.',
    features: ['Deluxe Quality', 'Premium Finish', 'Secure Fit'],
    sku: 'OH-KD-002',
    badge: 'Deluxe',
    rating: 5,
    subtype: 'Kadai',
  },
  // Oval Handles - Saucepan
  {
    id: 'oh-sauce-1',
    name: 'Oval Handle Saucepan - Standard',
    category: 'oval',
    material: 'bakelite',
    video: '/videos/product-video-2.mp4',
    description: 'Oval-shaped handle for saucepans with enhanced grip area.',
    features: ['Wide Grip', 'Heat Resistant', 'Easy Install'],
    sku: 'OH-SP-001',
    rating: 4,
    subtype: 'Saucepan',
  },
  {
    id: 'oh-sauce-2',
    name: 'Oval Handle Saucepan - Premium',
    category: 'oval',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Premium oval handle for high-end saucepan cookware.',
    features: ['Premium Quality', 'Stylish Design', 'Durable'],
    sku: 'OH-SP-002',
    rating: 5,
    subtype: 'Saucepan',
  },

  // Knobs
  {
    id: 'knob-1',
    name: 'Cookware Knob - Standard',
    category: 'knob',
    material: 'bakelite',
    video: '/videos/product-video-1.mp4',
    description: 'Standard bakelite knob for cookware lids. Universal fit design.',
    features: ['Universal Fit', 'Cool Touch', 'Secure Grip'],
    sku: 'KN-001',
    rating: 4,
    subtype: 'Lid Knob',
  },
  {
    id: 'knob-2',
    name: 'Cookware Knob - Premium',
    category: 'knob',
    material: 'bakelite',
    video: '/videos/product-video-2.mp4',
    description: 'Premium quality knob for high-end cookware lids.',
    features: ['Premium Quality', 'Stylish', 'Heat Resistant'],
    sku: 'KN-002',
    badge: 'Premium',
    rating: 5,
    subtype: 'Lid Knob',
  },
  {
    id: 'knob-3',
    name: 'Kadai Lid Knob',
    category: 'knob',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Specially designed knob for kadai lids with enhanced grip.',
    features: ['Kadai Specific', 'Enhanced Grip', 'Durable'],
    sku: 'KN-003',
    rating: 5,
    subtype: 'Lid Knob',
  },

  // Cooker Handles
  {
    id: 'ch-1',
    name: 'Cooker Handle - Standard',
    category: 'cooker',
    material: 'bakelite',
    video: '/videos/product-video-1.mp4',
    description: 'Heavy-duty handle designed for pressure cookers with extra grip.',
    features: ['Extra Grip', 'Heavy Duty', 'High Heat Resistant'],
    sku: 'CH-001',
    badge: 'Best Seller',
    rating: 5,
    subtype: 'Pressure Cooker',
  },
  {
    id: 'ch-2',
    name: 'Cooker Handle - Premium',
    category: 'cooker',
    material: 'bakelite',
    video: '/videos/product-video-2.mp4',
    description: 'Premium cooker handle with reinforced construction.',
    features: ['Reinforced', 'Premium Build', 'Maximum Safety'],
    sku: 'CH-002',
    badge: 'Premium',
    rating: 5,
    subtype: 'Pressure Cooker',
  },
  {
    id: 'ch-3',
    name: 'Cooker Handle - Economy',
    category: 'cooker',
    material: 'bakelite',
    video: '/videos/product-video-3.mp4',
    description: 'Cost-effective cooker handle for budget pressure cookers.',
    features: ['Economical', 'Reliable', 'Standard Fit'],
    sku: 'CH-003',
    rating: 4,
    subtype: 'Pressure Cooker',
  },

  // Plastic Wire Handles
  {
    id: 'pwh-1',
    name: 'Plastic Wire Handle - Standard',
    category: 'plastic-wire',
    material: 'plastic',
    video: '/videos/product-video-1.mp4',
    description: 'Lightweight plastic wire handle for everyday cookware.',
    features: ['Lightweight', 'Affordable', 'Easy Install'],
    sku: 'PWH-001',
    rating: 4,
    subtype: 'Universal',
  },
  {
    id: 'pwh-2',
    name: 'Plastic Wire Handle - Heavy Duty',
    category: 'plastic-wire',
    material: 'plastic',
    video: '/videos/product-video-2.mp4',
    description: 'Reinforced plastic wire handle for heavy-use cookware.',
    features: ['Reinforced', 'Heavy Use', 'Durable'],
    sku: 'PWH-002',
    badge: 'Heavy Duty',
    rating: 5,
    subtype: 'Universal',
  },
  {
    id: 'pwh-3',
    name: 'Plastic Wire Handle - Economy',
    category: 'plastic-wire',
    material: 'plastic',
    video: '/videos/product-video-3.mp4',
    description: 'Budget-friendly plastic wire handle option.',
    features: ['Budget Friendly', 'Basic', 'Quick Fit'],
    sku: 'PWH-003',
    rating: 4,
    subtype: 'Universal',
  },

  // Flame Guard Cooker
  {
    id: 'fg-1',
    name: 'Flame Guard - Standard',
    category: 'flameguard',
    material: 'stainless-steel',
    video: '/videos/product-video-1.mp4',
    description: 'Stainless steel flame guard for pressure cookers. Multiple sizes available.',
    features: ['SS Construction', 'Heat Distribution', 'Multi-Size'],
    sku: 'FG-001',
    badge: 'Safety',
    rating: 5,
    subtype: 'Cooker',
  },
  {
    id: 'fg-2',
    name: 'Flame Guard - Universal',
    category: 'flameguard',
    material: 'stainless-steel',
    video: '/videos/product-video-2.mp4',
    description: 'Universal fit flame guard compatible with most pressure cooker brands.',
    features: ['Universal Fit', 'Durable', 'Easy Clean'],
    sku: 'FG-002',
    rating: 5,
    subtype: 'Cooker',
  },
  {
    id: 'fg-3',
    name: 'Flame Guard - Premium',
    category: 'flameguard',
    material: 'stainless-steel',
    video: '/videos/product-video-3.mp4',
    description: 'Premium quality flame guard with enhanced heat protection.',
    features: ['Premium Quality', 'Enhanced Protection', 'Long Lasting'],
    sku: 'FG-003',
    badge: 'Premium',
    rating: 5,
    subtype: 'Cooker',
  },
]

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'bakelite', label: 'Bakelite Handle' },
  { id: 'wire', label: 'Wire Handle' },
  { id: 'oval', label: 'Oval Handle' },
  { id: 'knob', label: 'Knob' },
  { id: 'cooker', label: 'Cooker Handle' },
  { id: 'plastic-wire', label: 'Plastic Wire Handle' },
  { id: 'flameguard', label: 'Flame Guard' },
]

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'bakelite', label: 'Bakelite' },
  { id: 'stainless-steel', label: 'Stainless Steel' },
  { id: 'plastic', label: 'Plastic' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedMaterial, setSelectedMaterial] = useState<Material>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'all' || product.material === selectedMaterial
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesMaterial && matchesSearch
    })
  }, [selectedCategory, selectedMaterial, searchQuery])

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) + (selectedMaterial !== 'all' ? 1 : 0)

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Hero Header */}
      <section className="bg-white border-b border-forest-100">
        <div className="section-container py-12 lg:py-16">
          <h1 className="text-h1 mb-3">Our Products</h1>
          <p className="text-charcoal/70 max-w-2xl">
            Explore our complete range of premium cookware handles and accessories.
            Each product is crafted with care for durability and performance.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-0 bg-cream-100/95 backdrop-blur-md z-40 border-b border-forest-100">
        <div className="section-container py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-11"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category filters - Desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-white rounded-full p-1 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as Category)}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-forest-200 rounded-xl text-sm font-medium text-charcoal"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="px-2 py-0.5 bg-darkgreen text-white text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile filters panel */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-forest-100 space-y-4">
              <div>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-3">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id as Category)}
                      className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-3">
                  Material
                </p>
                <div className="flex flex-wrap gap-2">
                  {materials.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id as Material)}
                      className={`filter-btn ${selectedMaterial === material.id ? 'active' : ''}`}
                    >
                      {material.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Material filter - Desktop */}
          <div className="hidden lg:flex items-center gap-4 mt-3">
            <span className="text-xs text-charcoal/60">Material:</span>
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => setSelectedMaterial(material.id as Material)}
                className={`text-xs font-medium transition-colors ${
                  selectedMaterial === material.id
                    ? 'text-darkgreen'
                    : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                {material.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="section-container py-4">
        <p className="text-sm text-charcoal/60">
          Showing <span className="font-medium text-darkgreen">{filteredProducts.length}</span> of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <section className="pb-20">
        <div className="section-container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl">
              <p className="text-charcoal/60 mb-4">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedMaterial('all')
                  setSearchQuery('')
                }}
                className="btn-outline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Video/Image Container */}
                  <div className="relative aspect-square bg-forest-50 img-hover-zoom">
                    <ProductVideo src={product.video} autoPlay={true} />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-green">{product.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? 'fill-gold-500 text-gold-500'
                              : 'fill-forest-100 text-forest-100'
                          }`}
                        />
                      ))}
                    </div>

                    <h3 className="font-heading font-semibold text-darkgreen mb-1 group-hover:text-forest-700 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-charcoal/60 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded">
                        {product.sku}
                      </span>
                      <span className="text-xs text-charcoal/50 capitalize">
                        {product.material.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Frame Gallery */}
              <VideoFrameGallery
                videoSrc={selectedProduct.video}
                className="aspect-square bg-forest-50"
              />

              {/* Details */}
              <div className="p-6 lg:p-8 flex flex-col overflow-y-auto max-h-[90vh] md:max-h-none">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {selectedProduct.badge && (
                      <span className="badge badge-green mb-2">{selectedProduct.badge}</span>
                    )}
                    <h2 className="text-h3 text-darkgreen">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < selectedProduct.rating
                                ? 'fill-gold-500 text-gold-500'
                                : 'fill-forest-100 text-forest-100'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-charcoal/50">({selectedProduct.rating}.0)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-forest-50 text-charcoal/60 hover:text-charcoal transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-charcoal/70 mb-6">{selectedProduct.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold text-darkgreen uppercase tracking-wider mb-3">
                    Features
                  </h4>
                  <div className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-charcoal/70">
                        <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-forest-700" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-cream-100 rounded-xl">
                  <h4 className="text-sm font-heading font-semibold text-darkgreen uppercase tracking-wider mb-3">
                    Specifications
                  </h4>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-charcoal/50">SKU</dt>
                      <dd className="text-darkgreen font-medium">{selectedProduct.sku}</dd>
                    </div>
                    <div>
                      <dt className="text-charcoal/50">Material</dt>
                      <dd className="text-darkgreen font-medium capitalize">
                        {selectedProduct.material.replace('-', ' ')}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-charcoal/50">Category</dt>
                      <dd className="text-darkgreen font-medium capitalize">
                        {categories.find(c => c.id === selectedProduct.category)?.label || selectedProduct.category}
                      </dd>
                    </div>
                    {selectedProduct.subtype && (
                      <div>
                        <dt className="text-charcoal/50">Type</dt>
                        <dd className="text-darkgreen font-medium">{selectedProduct.subtype}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-charcoal/50">Rating</dt>
                      <dd className="text-darkgreen font-medium">{selectedProduct.rating}.0 / 5.0</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-auto pt-4 border-t border-forest-100">
                  <p className="text-sm text-charcoal/60 mb-4">
                    Interested in this product? Contact us for bulk pricing and availability.
                  </p>
                  <a href="/contact" className="btn-primary w-full">
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
