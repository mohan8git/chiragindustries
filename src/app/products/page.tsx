'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search, X, Check, ArrowRight, Filter } from 'lucide-react'

type Category = 'bakelite' | 'wire' | 'oval' | 'knob' | 'cooker' | 'plastic-wire' | 'flameguard'
type Material = 'bakelite' | 'stainless-steel' | 'plastic'

interface Product {
  id: string
  name: string
  category: Category
  material: Material
  code: string
  description: string
  features: string[]
  badge?: string
}

// Simple product data - just add new products to this array
const products: Product[] = [
  // Bakelite Handles
  { id: 'bh-kadai-1', name: 'Bakelite Kadai Handle - Standard', category: 'bakelite', material: 'bakelite', code: 'BH-KD-001', description: 'Durable bakelite handle designed for kadai cookware. Heat resistant and ergonomic grip.', features: ['Heat Resistant', 'Ergonomic Grip', 'Secure Fit'], badge: 'Best Seller' },
  { id: 'bh-kadai-2', name: 'Bakelite Kadai Handle - Premium', category: 'bakelite', material: 'bakelite', code: 'BH-KD-002', description: 'Premium bakelite handle set for large kadai. Enhanced durability and comfort.', features: ['Premium Quality', 'Large Size', 'Extra Durable'] },
  { id: 'bh-sauce-1', name: 'Bakelite Saucepan Handle - Classic', category: 'bakelite', material: 'bakelite', code: 'BH-SP-001', description: 'Classic bakelite handle for saucepans. Heat resistant up to 150°C.', features: ['Heat Resistant', 'Classic Design', 'Easy Install'], badge: 'Popular' },
  { id: 'bh-sauce-2', name: 'Bakelite Saucepan Handle - Economy', category: 'bakelite', material: 'bakelite', code: 'BH-SP-002', description: 'Cost-effective bakelite handle for budget saucepan lines.', features: ['Economical', 'Reliable', 'Standard Fit'] },
  { id: 'bh-tawa-1', name: 'Bakelite Tawa Handle - Standard', category: 'bakelite', material: 'bakelite', code: 'BH-TW-001', description: 'Standard bakelite handle for tawas. Non-slip grip design.', features: ['Non-Slip', 'Heat Resistant', 'Universal Fit'] },
  { id: 'bh-tawa-2', name: 'Bakelite Tawa Handle - Premium', category: 'bakelite', material: 'bakelite', code: 'BH-TW-002', description: 'Premium quality tawa handle with enhanced heat resistance.', features: ['Premium Build', 'Extra Heat Resistant', 'Stylish'], badge: 'Premium' },

  // Wire Handles
  { id: 'wh-kadai-1', name: 'Wire Handle Kadai - Standard', category: 'wire', material: 'stainless-steel', code: 'WH-KD-001', description: 'Stainless steel wire handle for kadai. Strong and durable construction.', features: ['SS Construction', 'Strong Grip', 'Rust Resistant'] },
  { id: 'wh-kadai-2', name: 'Wire Handle Kadai - Heavy Duty', category: 'wire', material: 'stainless-steel', code: 'WH-KD-002', description: 'Heavy duty wire handle for large kadai cookware.', features: ['Heavy Duty', 'Large Size', 'Professional Grade'], badge: 'Heavy Duty' },
  { id: 'wh-sauce-1', name: 'Wire Handle Saucepan - Standard', category: 'wire', material: 'stainless-steel', code: 'WH-SP-001', description: 'Stainless steel wire handle for saucepans with secure mounting.', features: ['Secure Mount', 'Durable', 'Easy Clean'] },
  { id: 'wh-tawa-1', name: 'Wire Handle Tawa - Standard', category: 'wire', material: 'stainless-steel', code: 'WH-TW-001', description: 'Wire handle designed specifically for tawa cookware.', features: ['Tawa Specific', 'Strong Build', 'Heat Safe'] },
  { id: 'wh-tawa-2', name: 'Wire Handle Tawa - Premium', category: 'wire', material: 'stainless-steel', code: 'WH-TW-002', description: 'Premium wire handle for professional tawa use.', features: ['Professional', 'Extra Strong', 'Long Lasting'], badge: 'Professional' },

  // Oval Handles
  { id: 'oh-kadai-1', name: 'Oval Handle Kadai - Standard', category: 'oval', material: 'bakelite', code: 'OH-KD-001', description: 'Ergonomic oval-shaped handle for kadai. Comfortable grip design.', features: ['Oval Design', 'Ergonomic', 'Comfortable Grip'] },
  { id: 'oh-kadai-2', name: 'Oval Handle Kadai - Deluxe', category: 'oval', material: 'bakelite', code: 'OH-KD-002', description: 'Deluxe oval handle set for premium kadai cookware.', features: ['Deluxe Quality', 'Premium Finish', 'Secure Fit'], badge: 'Deluxe' },
  { id: 'oh-sauce-1', name: 'Oval Handle Saucepan - Standard', category: 'oval', material: 'bakelite', code: 'OH-SP-001', description: 'Oval-shaped handle for saucepans with enhanced grip area.', features: ['Wide Grip', 'Heat Resistant', 'Easy Install'] },
  { id: 'oh-sauce-2', name: 'Oval Handle Saucepan - Premium', category: 'oval', material: 'bakelite', code: 'OH-SP-002', description: 'Premium oval handle for high-end saucepan cookware.', features: ['Premium Quality', 'Stylish Design', 'Durable'] },

  // Knobs
  { id: 'knob-1', name: 'Cookware Knob - Standard', category: 'knob', material: 'bakelite', code: 'KN-001', description: 'Standard bakelite knob for cookware lids. Universal fit design.', features: ['Universal Fit', 'Cool Touch', 'Secure Grip'] },
  { id: 'knob-2', name: 'Cookware Knob - Premium', category: 'knob', material: 'bakelite', code: 'KN-002', description: 'Premium quality knob for high-end cookware lids.', features: ['Premium Quality', 'Stylish', 'Heat Resistant'], badge: 'Premium' },
  { id: 'knob-3', name: 'Kadai Lid Knob', category: 'knob', material: 'bakelite', code: 'KN-003', description: 'Specially designed knob for kadai lids with enhanced grip.', features: ['Kadai Specific', 'Enhanced Grip', 'Durable'] },

  // Cooker Handles
  { id: 'ch-1', name: 'Cooker Handle - Standard', category: 'cooker', material: 'bakelite', code: 'CH-001', description: 'Heavy-duty handle designed for pressure cookers with extra grip.', features: ['Extra Grip', 'Heavy Duty', 'High Heat Resistant'], badge: 'Best Seller' },
  { id: 'ch-2', name: 'Cooker Handle - Premium', category: 'cooker', material: 'bakelite', code: 'CH-002', description: 'Premium cooker handle with reinforced construction.', features: ['Reinforced', 'Premium Build', 'Maximum Safety'], badge: 'Premium' },
  { id: 'ch-3', name: 'Cooker Handle - Economy', category: 'cooker', material: 'bakelite', code: 'CH-003', description: 'Cost-effective cooker handle for budget pressure cookers.', features: ['Economical', 'Reliable', 'Standard Fit'] },

  // Plastic Wire Handles
  { id: 'pwh-1', name: 'Plastic Wire Handle - Standard', category: 'plastic-wire', material: 'plastic', code: 'PWH-001', description: 'Lightweight plastic wire handle for everyday cookware.', features: ['Lightweight', 'Affordable', 'Easy Install'] },
  { id: 'pwh-2', name: 'Plastic Wire Handle - Heavy Duty', category: 'plastic-wire', material: 'plastic', code: 'PWH-002', description: 'Reinforced plastic wire handle for heavy-use cookware.', features: ['Reinforced', 'Heavy Use', 'Durable'], badge: 'Heavy Duty' },
  { id: 'pwh-3', name: 'Plastic Wire Handle - Economy', category: 'plastic-wire', material: 'plastic', code: 'PWH-003', description: 'Budget-friendly plastic wire handle option.', features: ['Budget Friendly', 'Basic', 'Quick Fit'] },

  // Flame Guard
  { id: 'fg-1', name: 'Flame Guard - Standard', category: 'flameguard', material: 'stainless-steel', code: 'FG-001', description: 'Stainless steel flame guard for pressure cookers. Multiple sizes available.', features: ['SS Construction', 'Heat Distribution', 'Multi-Size'], badge: 'Safety' },
  { id: 'fg-2', name: 'Flame Guard - Universal', category: 'flameguard', material: 'stainless-steel', code: 'FG-002', description: 'Universal fit flame guard compatible with most pressure cooker brands.', features: ['Universal Fit', 'Durable', 'Easy Clean'] },
  { id: 'fg-3', name: 'Flame Guard - Premium', category: 'flameguard', material: 'stainless-steel', code: 'FG-003', description: 'Premium quality flame guard with enhanced heat protection.', features: ['Premium Quality', 'Enhanced Protection', 'Long Lasting'], badge: 'Premium' },
]

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'bakelite', label: 'Bakelite Handle' },
  { id: 'wire', label: 'Wire Handle' },
  { id: 'oval', label: 'Oval Handle' },
  { id: 'knob', label: 'Knob' },
  { id: 'cooker', label: 'Cooker Handle' },
  { id: 'plastic-wire', label: 'Plastic Wire' },
  { id: 'flameguard', label: 'Flame Guard' },
]

const materials = [
  { id: 'bakelite', label: 'Bakelite' },
  { id: 'stainless-steel', label: 'Stainless Steel' },
  { id: 'plastic', label: 'Plastic' },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState('')
  const [codeQuery, setCodeQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && categories.find(c => c.id === categoryParam)) {
      setSelectedCategories([categoryParam])
    }
  }, [searchParams])

  const updateURL = (newCategories: string[]) => {
    const params = new URLSearchParams()
    if (newCategories.length === 1 && newCategories[0] !== 'all') {
      params.set('category', newCategories[0])
    }
    const newUrl = newCategories.length === 1 && newCategories[0] !== 'all'
      ? `/products?${params.toString()}`
      : '/products'
    router.push(newUrl, { scroll: false })
  }

  const toggleCategory = (categoryId: string) => {
    let newCategories: string[]
    if (categoryId === 'all') {
      newCategories = []
    } else {
      newCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter(c => c !== categoryId)
        : [...selectedCategories, categoryId]
    }
    setSelectedCategories(newCategories)
    updateURL(newCategories)
  }

  const toggleMaterial = (materialId: string) => {
    setSelectedMaterials(prev =>
      prev.includes(materialId)
        ? prev.filter(m => m !== materialId)
        : [...prev, materialId]
    )
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setCodeQuery('')
    setSelectedCategories([])
    setSelectedMaterials([])
    router.push('/products', { scroll: false })
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCode = codeQuery === '' || product.code.toLowerCase().includes(codeQuery.toLowerCase())
      return matchesCategory && matchesMaterial && matchesSearch && matchesCode
    })
  }, [selectedCategories, selectedMaterials, searchQuery, codeQuery])

  const activeFiltersCount = selectedCategories.length + selectedMaterials.length + (searchQuery ? 1 : 0) + (codeQuery ? 1 : 0)

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Hero Header */}
      <section className="bg-white border-b border-forest-100">
        <div className="section-container py-6 lg:py-10">
          <h1 className="text-h1 mb-2">Our Products</h1>
          <p className="text-charcoal/70 max-w-2xl">
            Explore our complete range of premium cookware handles and accessories.
          </p>
        </div>
      </section>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden sticky top-0 z-40 bg-cream-100/95 backdrop-blur-md border-b border-forest-100">
        <div className="section-container py-3">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-forest-200 rounded-xl text-sm font-medium text-charcoal w-full justify-center"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="px-2 py-0.5 bg-darkgreen text-white text-xs rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileFilterOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-cream-100 shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-heading font-semibold text-darkgreen">Filters</h2>
                <button onClick={() => setMobileFilterOpen(false)} className="p-2 hover:bg-forest-50 rounded-lg"><X className="h-5 w-5" /></button>
              </div>
              {/* Mobile Filter Content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-darkgreen mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
                    <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-white border border-forest-200 rounded-lg text-sm focus:outline-none focus:border-forest-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-darkgreen mb-2">Categories</label>
                  <div className="space-y-1">
                    {categories.map((cat) => {
                      const isSelected = cat.id === 'all' ? selectedCategories.length === 0 : selectedCategories.includes(cat.id)
                      return (
                        <button key={cat.id} onClick={() => toggleCategory(cat.id)} className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm ${isSelected ? 'bg-forest-100 text-darkgreen font-medium' : 'text-charcoal/70'}`}>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-darkgreen border-darkgreen' : 'border-forest-300'}`}>
                            {isSelected && <Check className="h-2.5 w-2.5 text-white" />}
                          </div>
                          {cat.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-darkgreen mb-2">Material</label>
                  <div className="space-y-1">
                    {materials.map((mat) => {
                      const isSelected = selectedMaterials.includes(mat.id)
                      return (
                        <button key={mat.id} onClick={() => toggleMaterial(mat.id)} className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm ${isSelected ? 'bg-forest-100 text-darkgreen font-medium' : 'text-charcoal/70'}`}>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-darkgreen border-darkgreen' : 'border-forest-300'}`}>
                            {isSelected && <Check className="h-2.5 w-2.5 text-white" />}
                          </div>
                          {mat.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-darkgreen mb-2">Product Code</label>
                  <input type="text" placeholder="Search by code..." value={codeQuery} onChange={(e) => setCodeQuery(e.target.value)} className="w-full px-3 py-2 bg-white border border-forest-200 rounded-lg text-sm focus:outline-none focus:border-forest-400" />
                </div>
                {activeFiltersCount > 0 && (
                  <button onClick={clearAllFilters} className="w-full py-2 text-sm font-medium text-forest-700 border border-forest-200 rounded-lg hover:bg-forest-50">
                    Clear All ({activeFiltersCount})
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="section-container py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-20 bg-white rounded-xl p-4 shadow-card">
              <h2 className="text-sm font-heading font-semibold text-darkgreen mb-4">Filters</h2>
              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 mb-1.5">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-charcoal/40" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-cream-50 border border-forest-200 rounded-lg text-sm focus:outline-none focus:border-forest-400 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 mb-1.5">Categories</label>
                  <div className="space-y-0.5">
                    {categories.map((cat) => {
                      const isSelected = cat.id === 'all' ? selectedCategories.length === 0 : selectedCategories.includes(cat.id)
                      return (
                        <button
                          key={cat.id}
                          onClick={() => toggleCategory(cat.id)}
                          className={`flex items-center gap-2 w-full px-2 py-1 rounded text-xs transition-colors ${isSelected ? 'bg-forest-100 text-darkgreen font-medium' : 'text-charcoal/70 hover:bg-forest-50'}`}
                        >
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-darkgreen border-darkgreen' : 'border-forest-300'}`}>
                            {isSelected && <Check className="h-2 w-2 text-white" />}
                          </div>
                          <span className="truncate">{cat.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 mb-1.5">Material</label>
                  <div className="space-y-0.5">
                    {materials.map((mat) => {
                      const isSelected = selectedMaterials.includes(mat.id)
                      return (
                        <button
                          key={mat.id}
                          onClick={() => toggleMaterial(mat.id)}
                          className={`flex items-center gap-2 w-full px-2 py-1 rounded text-xs transition-colors ${isSelected ? 'bg-forest-100 text-darkgreen font-medium' : 'text-charcoal/70 hover:bg-forest-50'}`}
                        >
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-darkgreen border-darkgreen' : 'border-forest-300'}`}>
                            {isSelected && <Check className="h-2 w-2 text-white" />}
                          </div>
                          {mat.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Code */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 mb-1.5">Product Code</label>
                  <input
                    type="text"
                    placeholder="e.g. BH-KD-001"
                    value={codeQuery}
                    onChange={(e) => setCodeQuery(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-cream-50 border border-forest-200 rounded-lg text-sm focus:outline-none focus:border-forest-400 focus:bg-white"
                  />
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <button onClick={clearAllFilters} className="w-full py-1.5 text-xs font-medium text-forest-700 border border-forest-200 rounded-lg hover:bg-forest-50">
                    Clear All ({activeFiltersCount})
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Right Content - Products */}
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <p className="text-sm text-charcoal/60">
                Showing <span className="font-medium text-darkgreen">{filteredProducts.length}</span> of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-charcoal/60 mb-3">No products found matching your criteria.</p>
                <button onClick={clearAllFilters} className="btn-outline text-sm">Clear all filters</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative aspect-square bg-forest-50 overflow-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CDN_URL}/ci-logo-2.png`}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className="badge badge-green text-xs">{product.badge}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-darkgreen text-sm mb-1 group-hover:text-forest-700 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-charcoal/60 mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-0.5 rounded">{product.code}</span>
                        <span className="text-xs text-charcoal/50 capitalize">{product.material.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-forest-50">
                <Image src={`${process.env.NEXT_PUBLIC_CDN_URL}/ci-logo-2.png`} alt={selectedProduct.name} fill className="object-contain p-10" />
              </div>
              <div className="p-5 lg:p-6 flex flex-col overflow-y-auto max-h-[90vh] md:max-h-none">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {selectedProduct.badge && <span className="badge badge-green text-xs mb-1">{selectedProduct.badge}</span>}
                    <h2 className="text-lg font-heading font-semibold text-darkgreen">{selectedProduct.name}</h2>
                  </div>
                  <button onClick={() => setSelectedProduct(null)} className="p-1.5 rounded-full hover:bg-forest-50 text-charcoal/60"><X className="h-5 w-5" /></button>
                </div>
                <p className="text-sm text-charcoal/70 mb-4">{selectedProduct.description}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-darkgreen uppercase tracking-wider mb-2">Features</h4>
                  <div className="space-y-1">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-charcoal/70">
                        <div className="w-4 h-4 rounded-full bg-forest-100 flex items-center justify-center"><Check className="h-2.5 w-2.5 text-forest-700" /></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4 p-3 bg-cream-100 rounded-lg">
                  <h4 className="text-xs font-semibold text-darkgreen uppercase tracking-wider mb-2">Details</h4>
                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    <div><dt className="text-charcoal/50 text-xs">Code</dt><dd className="text-darkgreen font-medium">{selectedProduct.code}</dd></div>
                    <div><dt className="text-charcoal/50 text-xs">Material</dt><dd className="text-darkgreen font-medium capitalize">{selectedProduct.material.replace('-', ' ')}</dd></div>
                    <div><dt className="text-charcoal/50 text-xs">Category</dt><dd className="text-darkgreen font-medium">{categories.find(c => c.id === selectedProduct.category)?.label}</dd></div>
                  </dl>
                </div>
                <div className="mt-auto pt-3 border-t border-forest-100">
                  <p className="text-xs text-charcoal/60 mb-3">Contact us for bulk pricing and availability.</p>
                  <a href="/contact" className="btn-primary w-full text-sm">Request Quote <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream-100 flex items-center justify-center"><div className="w-8 h-8 border-2 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <ProductsContent />
    </Suspense>
  )
}
