// ── VItalEdge Full Product Catalog ──────────────────────────────────
// 180+ XT Peptide products at 25% net margin wholesale pricing
// GLP-1 products use abbreviated names + SVG image trick (real name in SVG only)
// All products: research use only

const PRODUCTS = [
  // ═══════════════════════════════════════════════════════════════
  // GLP-1 / INCRETIN FAMILY (abbreviated names)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'sema-5mg', name: 'SEMA', displayName: 'Semaglutide', category: 'Incretin', subcategory: 'GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '910463-68-2', purity: '>99%',
    variants: [{ mg: 5, price: 89.00, priceId: 'price_1U2HK9DQ2cuOrZVIv8uOSdHN' }]
  },
  {
    id: 'sema-10mg', name: 'SEMA', displayName: 'Semaglutide', category: 'Incretin', subcategory: 'GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '910463-68-2', purity: '>99%',
    variants: [{ mg: 10, price: 189.00, priceId: 'price_1U2HK9DQ2cuOrZVIy7m7DygX' }]
  },
  {
    id: 'sema-15mg', name: 'SEMA', displayName: 'Semaglutide', category: 'Incretin', subcategory: 'GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '910463-68-2', purity: '>99%',
    variants: [{ mg: 15, price: 225.00, priceId: 'price_1U2HK9DQ2cuOrZVIZHeHLPbN' }]
  },
  {
    id: 'sema-20mg', name: 'SEMA', displayName: 'Semaglutide', category: 'Incretin', subcategory: 'GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '910463-68-2', purity: '>99%',
    variants: [{ mg: 20, price: 249.00, priceId: 'price_1U2HK9DQ2cuOrZVIxM4IfK1c' }]
  },
  {
    id: 'sema-30mg', name: 'SEMA', displayName: 'Semaglutide', category: 'Incretin', subcategory: 'GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '910463-68-2', purity: '>99%',
    variants: [{ mg: 30, price: 310.00, priceId: 'price_1U2HK9DQ2cuOrZVIVogbl2G9' }]
  },
  {
    id: 'tzp-5mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 5, price: 98.00, priceId: 'price_1U2HVKDQ2cuOrZVIz3hDmTU9' }]
  },
  {
    id: 'tzp-10mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 10, price: 310.00, priceId: 'price_1U2HVKDQ2cuOrZVIBcIHf1jL' }]
  },
  {
    id: 'tzp-15mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 15, price: 225.00, priceId: 'price_1U2HVKDQ2cuOrZVIknp9kLFD' }]
  },
  {
    id: 'tzp-20mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 20, price: 265.00, priceId: 'price_1U2HVLDQ2cuOrZVI5mpVr2CF' }]
  },
  {
    id: 'tzp-30mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 30, price: 310.00, priceId: 'price_1U2HVLDQ2cuOrZVIzEOluSEm' }]
  },
  {
    id: 'tzp-40mg', name: 'TZP', displayName: 'Tirzepatide', category: 'Incretin', subcategory: 'Dual GIP/GLP-1',
    isGLP1: true, inStock: true, cas: '2023788-19-2', purity: '>99%',
    variants: [{ mg: 40, price: 385.00, priceId: 'price_1U2HVhDQ2cuOrZVIS5VUD33m' }]
  },
  {
    id: 'rta-5mg', name: 'RTA', displayName: 'Retatrutide', category: 'Incretin', subcategory: 'Triple GIP/GLP-1/GCGR',
    isGLP1: true, inStock: true, cas: '2381089-83-2', purity: '>99%',
    variants: [{ mg: 5, price: 225.00, priceId: 'price_1U2HVhDQ2cuOrZVIeoHDBKBk' }]
  },
  {
    id: 'rta-10mg', name: 'RTA', displayName: 'Retatrutide', category: 'Incretin', subcategory: 'Triple GIP/GLP-1/GCGR',
    isGLP1: true, inStock: true, cas: '2381089-83-2', purity: '>99%',
    variants: [{ mg: 10, price: 280.00, priceId: 'price_1U2HVhDQ2cuOrZVIzQqhpqBv' }]
  },
  {
    id: 'rta-15mg', name: 'RTA', displayName: 'Retatrutide', category: 'Incretin', subcategory: 'Triple GIP/GLP-1/GCGR',
    isGLP1: true, inStock: true, cas: '2381089-83-2', purity: '>99%',
    variants: [{ mg: 15, price: 365.00, priceId: 'price_1U2HVhDQ2cuOrZVI0inH6cOt' }]
  },
  {
    id: 'rta-20mg', name: 'RTA', displayName: 'Retatrutide', category: 'Incretin', subcategory: 'Triple GIP/GLP-1/GCGR',
    isGLP1: true, inStock: true, cas: '2381089-83-2', purity: '>99%',
    variants: [{ mg: 20, price: 445.00, priceId: 'price_1U2HVhDQ2cuOrZVIBg0ObLBS' }]
  },
  {
    id: 'rta-30mg', name: 'RTA', displayName: 'Retatrutide', category: 'Incretin', subcategory: 'Triple GIP/GLP-1/GCGR',
    isGLP1: true, inStock: true, cas: '2381089-83-2', purity: '>99%',
    variants: [{ mg: 30, price: 525.00, priceId: 'price_1U2HW4DQ2cuOrZVIbW66hkOq' }]
  },
  // Orforglipron (non-peptide GLP-1 oral)
  {
    id: 'orf-30mg', name: 'ORF', displayName: 'Orforglipron', category: 'Incretin', subcategory: 'Oral GLP-1 Agonist',
    isGLP1: true, inStock: true, cas: '2212020-52-3', purity: '>98%',
    variants: [{ mg: 30, price: 295.00 }]
  },
  // Mazdutide
  {
    id: 'maz-5mg', name: 'MAZ', displayName: 'Mazdutide', category: 'Incretin', subcategory: 'GLP-1/GCGR Dual',
    isGLP1: true, inStock: true, cas: '2259884-03-0', purity: '>99%',
    variants: [{ mg: 5, price: 210.00 }]
  },
  {
    id: 'maz-10mg', name: 'MAZ', displayName: 'Mazdutide', category: 'Incretin', subcategory: 'GLP-1/GCGR Dual',
    isGLP1: true, inStock: true, cas: '2259884-03-0', purity: '>99%',
    variants: [{ mg: 10, price: 350.00 }]
  },
  // Survodutide
  {
    id: 'sur-5mg', name: 'SUR', displayName: 'Survodutide', category: 'Incretin', subcategory: 'GLP-1/GCGR Dual',
    isGLP1: true, inStock: true, cas: '2807497-80-1', purity: '>99%',
    variants: [{ mg: 5, price: 240.00 }]
  },
  // Cagrilintide
  {
    id: 'cag-5mg', name: 'CAG', displayName: 'Cagrilintide', category: 'Incretin', subcategory: 'Amylin Analog',
    isGLP1: true, inStock: true, cas: '1884206-13-6', purity: '>99%',
    variants: [{ mg: 5, price: 235.00 }]
  },
  {
    id: 'cag-10mg', name: 'CAG', displayName: 'Cagrilintide', category: 'Incretin', subcategory: 'Amylin Analog',
    isGLP1: true, inStock: true, cas: '1884206-13-6', purity: '>99%',
    variants: [{ mg: 10, price: 385.00 }]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROWTH HORMONE SECRETAGOGUES
  // ═══════════════════════════════════════════════════════════════
  { id: 'ipa-2mg', name: 'Ipamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 45.00 }] },
  { id: 'ipa-5mg', name: 'Ipamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 65.00 }] },
  { id: 'ipa-10mg', name: 'Ipamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 10, price: 110.00 }] },
  { id: 'cjc1295-2mg', name: 'CJC-1295 (no DAC)', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 48.00 }] },
  { id: 'cjc1295-5mg', name: 'CJC-1295 (no DAC)', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 72.00 }] },
  { id: 'cjc1295-10mg', name: 'CJC-1295 (no DAC)', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 10, price: 120.00 }] },
  { id: 'cjc-dac-2mg', name: 'CJC-1295 (DAC)', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 55.00 }] },
  { id: 'cjc-dac-5mg', name: 'CJC-1295 (DAC)', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 95.00 }] },
  { id: 'hexarelin-2mg', name: 'Hexarelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 48.00 }] },
  { id: 'hexarelin-5mg', name: 'Hexarelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 72.00 }] },
  { id: 'ghrp2-5mg', name: 'GHRP-2', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 38.00 }] },
  { id: 'ghrp2-10mg', name: 'GHRP-2', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 10, price: 62.00 }] },
  { id: 'ghrp6-5mg', name: 'GHRP-6', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 38.00 }] },
  { id: 'ghrp6-10mg', name: 'GHRP-6', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 10, price: 62.00 }] },
  { id: 'tesamorelin-2mg', name: 'Tesamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 65.00 }] },
  { id: 'tesamorelin-5mg', name: 'Tesamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 125.00 }] },
  { id: 'tesamorelin-10mg', name: 'Tesamorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 10, price: 210.00 }] },
  { id: 'sermorelin-2mg', name: 'Sermorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 2, price: 35.00 }] },
  { id: 'sermorelin-5mg', name: 'Sermorelin', category: 'GH Secretagogue', inStock: true, variants: [{ mg: 5, price: 58.00 }] },
  { id: 'mk677-25mg', name: 'MK-677 (Ibutamoren)', category: 'GH Secretagogue', subcategory: 'Oral', inStock: true, variants: [{ mg: 25, price: 65.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // HEALING & RECOVERY PEPTIDES
  // ═══════════════════════════════════════════════════════════════
  { id: 'bpc157-5mg', name: 'BPC-157', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 5, price: 55.00, priceId: 'price_1U2HWNDQ2cuOrZVIniDqcak7' }] },
  { id: 'bpc157-10mg', name: 'BPC-157', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 10, price: 105.00, priceId: 'price_1U2HWNDQ2cuOrZVIuUs9yBAX' }] },
  { id: 'tb500-5mg', name: 'TB-500', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 5, price: 60.00, priceId: 'price_1U2HW4DQ2cuOrZVI0ceV8yyY' }] },
  { id: 'tb500-10mg', name: 'TB-500', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 10, price: 125.00, priceId: 'price_1U2HW4DQ2cuOrZVISg0dLdrb' }] },
  { id: 'tb4-5mg', name: 'Thymosin Beta-4', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 5, price: 60.00 }] },
  { id: 'tb4-10mg', name: 'Thymosin Beta-4', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 10, price: 110.00 }] },
  { id: 'ghk-cu-50mg', name: 'GHK-Cu', category: 'Healing & Recovery', subcategory: 'Copper Peptide', inStock: true, variants: [{ mg: 50, price: 80.00, priceId: 'price_1TjVWTDQ2cuOrZVI50ZVkzmf' }] },
  { id: 'ghk-cu-100mg', name: 'GHK-Cu', category: 'Healing & Recovery', subcategory: 'Copper Peptide', inStock: true, variants: [{ mg: 100, price: 140.00 }] },
  { id: 'ghk-cu-200mg', name: 'GHK-Cu', category: 'Healing & Recovery', subcategory: 'Copper Peptide', inStock: true, variants: [{ mg: 200, price: 235.00 }] },
  { id: 'ghk-50mg', name: 'GHK (Basic)', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 50, price: 55.00 }] },
  { id: 'ghk-100mg', name: 'GHK (Basic)', category: 'Healing & Recovery', inStock: true, variants: [{ mg: 100, price: 95.00 }] },
  { id: 'ara290-16mg', name: 'ARA-290', category: 'Healing & Recovery', subcategory: 'Tissue Repair', inStock: true, variants: [{ mg: 16, price: 155.00 }] },
  { id: 'kpv-10mg', name: 'KPV', category: 'Healing & Recovery', subcategory: 'Anti-Inflammatory', inStock: true, variants: [{ mg: 10, price: 60.00 }] },
  { id: 'll37-5mg', name: 'LL-37', category: 'Healing & Recovery', subcategory: 'Antimicrobial', inStock: true, variants: [{ mg: 5, price: 145.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // METABOLIC & MITOCHONDRIAL
  // ═══════════════════════════════════════════════════════════════
  { id: 'motsc-10mg', name: 'MOTS-c', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 10, price: 85.00 }] },
  { id: 'motsc-20mg', name: 'MOTS-c', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 20, price: 145.00 }] },
  { id: 'ss31-10mg', name: 'SS-31 (Elamipretide)', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 10, price: 95.00 }] },
  { id: 'ss31-25mg', name: 'SS-31 (Elamipretide)', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 25, price: 195.00 }] },
  { id: 'ss31-50mg', name: 'SS-31 (Elamipretide)', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 50, price: 345.00 }] },
  { id: 'hn-5mg', name: 'Humanin', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 5, price: 85.00 }] },
  { id: 'hn-10mg', name: 'Humanin', category: 'Metabolic', subcategory: 'Mitochondrial', inStock: true, variants: [{ mg: 10, price: 145.00 }] },
  { id: 'adipotide-2mg', name: 'Adipotide', category: 'Metabolic', subcategory: 'Fat Targeting', inStock: true, variants: [{ mg: 2, price: 65.00 }] },
  { id: 'adipotide-5mg', name: 'Adipotide', category: 'Metabolic', subcategory: 'Fat Targeting', inStock: true, variants: [{ mg: 5, price: 130.00 }] },
  { id: 'adipotide-10mg', name: 'Adipotide', category: 'Metabolic', subcategory: 'Fat Targeting', inStock: true, variants: [{ mg: 10, price: 220.00 }] },
  { id: 'fst-1mg', name: 'Follistatin 344', category: 'Metabolic', subcategory: 'Myostatin Inhibitor', inStock: true, variants: [{ mg: 1, price: 85.00 }] },
  { id: 'ace031-1mg', name: 'ACE-031', category: 'Metabolic', subcategory: 'Myostatin Inhibitor', inStock: true, variants: [{ mg: 1, price: 120.00 }] },
  { id: 'slupp322-5mg', name: 'SLU-PP-332', category: 'Metabolic', subcategory: 'ERR Agonist', inStock: true, variants: [{ mg: 5, price: 130.00 }] },
  { id: 'slupp332-10mg', name: 'SLU-PP-332', category: 'Metabolic', subcategory: 'ERR Agonist', inStock: true, variants: [{ mg: 10, price: 220.00 }] },
  { id: 'aod9604-5mg', name: 'AOD-9604', category: 'Metabolic', subcategory: 'HGH Fragment', inStock: true, variants: [{ mg: 5, price: 65.00 }] },
  { id: 'aod9604-10mg', name: 'AOD-9604', category: 'Metabolic', subcategory: 'HGH Fragment', inStock: true, variants: [{ mg: 10, price: 110.00 }] },
  { id: 'frag176191-5mg', name: 'HGH Fragment 176-191', category: 'Metabolic', subcategory: 'HGH Fragment', inStock: true, variants: [{ mg: 5, price: 55.00 }] },
  { id: 'frag176191-10mg', name: 'HGH Fragment 176-191', category: 'Metabolic', subcategory: 'HGH Fragment', inStock: true, variants: [{ mg: 10, price: 95.00 }] },
  { id: '5amino1mq-50mg', name: '5-Amino-1MQ', category: 'Metabolic', subcategory: 'NNMT Inhibitor', inStock: true, variants: [{ mg: 50, price: 155.00 }] },
  { id: '5amino1mq-100mg', name: '5-Amino-1MQ', category: 'Metabolic', subcategory: 'NNMT Inhibitor', inStock: true, variants: [{ mg: 100, price: 265.00 }] },
  { id: 'nad-500mg', name: 'NAD+', category: 'Metabolic', subcategory: 'Coenzyme', inStock: true, variants: [{ mg: 500, price: 195.00, priceId: 'price_1U2HWNDQ2cuOrZVIQ0CeUduk' }] },
  { id: 'nad-1000mg', name: 'NAD+', category: 'Metabolic', subcategory: 'Coenzyme', inStock: true, variants: [{ mg: 1000, price: 345.00 }] },
  { id: 'nadh-100mg', name: 'NADH', category: 'Metabolic', subcategory: 'Coenzyme', inStock: true, variants: [{ mg: 100, price: 95.00 }] },
  { id: 'nadh-250mg', name: 'NADH', category: 'Metabolic', subcategory: 'Coenzyme', inStock: true, variants: [{ mg: 250, price: 185.00 }] },
  { id: 'nrm-500mg', name: 'NR (Nicotinamide Riboside)', category: 'Metabolic', subcategory: 'NAD+ Precursor', inStock: true, variants: [{ mg: 500, price: 175.00 }] },
  { id: 'nrmn-500mg', name: 'NMN', category: 'Metabolic', subcategory: 'NAD+ Precursor', inStock: true, variants: [{ mg: 500, price: 165.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // COSMETIC & SKIN PEPTIDES
  // ═══════════════════════════════════════════════════════════════
  { id: 'mt2-10mg', name: 'Melanotan II', category: 'Cosmetic', subcategory: 'Tanning', inStock: true, variants: [{ mg: 10, price: 48.00 }] },
  { id: 'mt2-20mg', name: 'Melanotan II', category: 'Cosmetic', subcategory: 'Tanning', inStock: true, variants: [{ mg: 20, price: 75.00 }] },
  { id: 'mt1-10mg', name: 'Melanotan I', category: 'Cosmetic', subcategory: 'Tanning', inStock: true, variants: [{ mg: 10, price: 62.00 }] },
  { id: 'snap8-10mg', name: 'SNAP-8', category: 'Cosmetic', subcategory: 'Anti-Wrinkle', inStock: true, variants: [{ mg: 10, price: 45.00 }] },
  { id: 'snap8-20mg', name: 'SNAP-8', category: 'Cosmetic', subcategory: 'Anti-Wrinkle', inStock: true, variants: [{ mg: 20, price: 72.00 }] },
  { id: 'argireline-10mg', name: 'Argireline', category: 'Cosmetic', subcategory: 'Anti-Wrinkle', inStock: true, variants: [{ mg: 10, price: 42.00 }] },
  { id: 'argireline-20mg', name: 'Argireline', category: 'Cosmetic', subcategory: 'Anti-Wrinkle', inStock: true, variants: [{ mg: 20, price: 68.00 }] },
  { id: 'leuphasyl-5mg', name: 'Leuphasyl', category: 'Cosmetic', subcategory: 'Anti-Wrinkle', inStock: true, variants: [{ mg: 5, price: 40.00 }] },
  { id: 'matrixyl-10mg', name: 'Matrixyl (Pal-KTTKS)', category: 'Cosmetic', subcategory: 'Collagen', inStock: true, variants: [{ mg: 10, price: 50.00 }] },
  { id: 'collaxyl-10mg', name: 'Collaxyl', category: 'Cosmetic', subcategory: 'Collagen', inStock: true, variants: [{ mg: 10, price: 48.00 }] },
  { id: 'epitalon-10mg', name: 'Epitalon', category: 'Cosmetic', subcategory: 'Telomere', inStock: true, variants: [{ mg: 10, price: 55.00 }] },
  { id: 'epitalon-20mg', name: 'Epitalon', category: 'Cosmetic', subcategory: 'Telomere', inStock: true, variants: [{ mg: 20, price: 95.00 }] },
  { id: 'palghk-10mg', name: 'Pal-GHK', category: 'Cosmetic', subcategory: 'Copper Peptide', inStock: true, variants: [{ mg: 10, price: 58.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // NEUROPEPTIDES & COGNITION
  // ═══════════════════════════════════════════════════════════════
  { id: 'semax-10mg', name: 'Semax', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 70.00, priceId: 'price_1U2HW4DQ2cuOrZVIj9Iuj7TO' }] },
  { id: 'semax-30mg', name: 'Semax', category: 'Nootropic', inStock: true, variants: [{ mg: 30, price: 165.00 }] },
  { id: 'selank-10mg', name: 'Selank', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 70.00, priceId: 'price_1U2HW4DQ2cuOrZVIqVOn5UHV' }] },
  { id: 'selank-30mg', name: 'Selank', category: 'Nootropic', inStock: true, variants: [{ mg: 30, price: 165.00 }] },
  { id: 'naselank-5mg', name: 'NA-Selank', category: 'Nootropic', inStock: true, variants: [{ mg: 5, price: 75.00 }] },
  { id: 'nasemax-5mg', name: 'NA-Semax', category: 'Nootropic', inStock: true, variants: [{ mg: 5, price: 75.00 }] },
  { id: 'nasemaxamidate-5mg', name: 'NA-Semax Amidate', category: 'Nootropic', inStock: true, variants: [{ mg: 5, price: 95.00 }] },
  { id: 'cerebrolysin-2ml', name: 'Cerebrolysin Analog', category: 'Nootropic', inStock: true, variants: [{ mg: 215, price: 95.00 }] },
  { id: 'cortexin-10mg', name: 'Cortexin', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 62.00 }] },
  { id: 'p21-5mg', name: 'P21', category: 'Nootropic', subcategory: 'CNTF', inStock: true, variants: [{ mg: 5, price: 85.00 }] },
  { id: 'adamax-5mg', name: 'Adamax', category: 'Nootropic', inStock: true, variants: [{ mg: 5, price: 85.00 }] },
  { id: 'dihexa-10mg', name: 'Dihexa', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 120.00 }] },
  { id: 'noopept-10mg', name: 'Noopept', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 35.00 }] },
  { id: 'noopept-20mg', name: 'Noopept', category: 'Nootropic', inStock: true, variants: [{ mg: 20, price: 55.00 }] },
  { id: 'pinealon-10mg', name: 'Pinealon', category: 'Nootropic', inStock: true, variants: [{ mg: 10, price: 48.00 }] },
  { id: 'pinealon-20mg', name: 'Pinealon', category: 'Nootropic', inStock: true, variants: [{ mg: 20, price: 80.00 }] },
  { id: 'vesugen-20mg', name: 'Vesugen', category: 'Nootropic', subcategory: 'Vascular', inStock: true, variants: [{ mg: 20, price: 68.00 }] },
  { id: 'dsip-5mg', name: 'DSIP', category: 'Nootropic', subcategory: 'Sleep', inStock: true, variants: [{ mg: 5, price: 42.00 }] },
  { id: 'dsip-10mg', name: 'DSIP', category: 'Nootropic', subcategory: 'Sleep', inStock: true, variants: [{ mg: 10, price: 65.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // SEXUAL HEALTH
  // ═══════════════════════════════════════════════════════════════
  { id: 'pt141-10mg', name: 'PT-141 (Bremelanotide)', category: 'Sexual Health', inStock: true, variants: [{ mg: 10, price: 52.00 }] },
  { id: 'pt141-20mg', name: 'PT-141 (Bremelanotide)', category: 'Sexual Health', inStock: true, variants: [{ mg: 20, price: 88.00 }] },
  { id: 'oxytocin-2mg', name: 'Oxytocin', category: 'Sexual Health', inStock: true, variants: [{ mg: 2, price: 35.00 }] },
  { id: 'oxytocin-5mg', name: 'Oxytocin', category: 'Sexual Health', inStock: true, variants: [{ mg: 5, price: 62.00 }] },
  { id: 'kisspeptin10-10mg', name: 'Kisspeptin-10', category: 'Sexual Health', subcategory: 'Reproductive', inStock: true, variants: [{ mg: 10, price: 68.00 }] },
  { id: 'gonadorelin-2mg', name: 'Gonadorelin', category: 'Sexual Health', subcategory: 'Reproductive', inStock: true, variants: [{ mg: 2, price: 38.00 }] },
  { id: 'gonadorelin-5mg', name: 'Gonadorelin', category: 'Sexual Health', subcategory: 'Reproductive', inStock: true, variants: [{ mg: 5, price: 68.00 }] },
  { id: 'triptorelin-2mg', name: 'Triptorelin', category: 'Sexual Health', subcategory: 'Reproductive', inStock: true, variants: [{ mg: 2, price: 58.00 }] },
  { id: 'hcg-5000iu', name: 'hCG', category: 'Sexual Health', subcategory: 'Reproductive', inStock: true, variants: [{ mg: 5000, price: 65.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // LONGEVITY & ANTI-AGING
  // ═══════════════════════════════════════════════════════════════
  { id: 'epithalon-10mg', name: 'Epithalon', category: 'Longevity', subcategory: 'Pineal', inStock: true, variants: [{ mg: 10, price: 55.00 }] },
  { id: 'epithalon-20mg', name: 'Epithalon', category: 'Longevity', subcategory: 'Pineal', inStock: true, variants: [{ mg: 20, price: 95.00 }] },
  { id: 'ta1-5mg', name: 'Thymosin Alpha-1', category: 'Longevity', subcategory: 'Immune', inStock: true, variants: [{ mg: 5, price: 110.00 }] },
  { id: 'ta1-10mg', name: 'Thymosin Alpha-1', category: 'Longevity', subcategory: 'Immune', inStock: true, variants: [{ mg: 10, price: 185.00 }] },
  { id: 'thymulin-10mg', name: 'Thymulin', category: 'Longevity', subcategory: 'Immune', inStock: true, variants: [{ mg: 10, price: 72.00 }] },
  { id: 'foxo4dri-5mg', name: 'FOXO4-DRI', category: 'Longevity', subcategory: 'Senolytic', inStock: true, variants: [{ mg: 5, price: 185.00 }] },
  { id: 'foxo4dri-10mg', name: 'FOXO4-DRI', category: 'Longevity', subcategory: 'Senolytic', inStock: true, variants: [{ mg: 10, price: 325.00 }] },
  { id: 'epobis-5mg', name: 'Epobis', category: 'Longevity', subcategory: 'Neurogenic', inStock: true, variants: [{ mg: 5, price: 125.00 }] },
  { id: 'cycloastragenol-50mg', name: 'Cycloastragenol', category: 'Longevity', subcategory: 'Telomerase', inStock: true, variants: [{ mg: 50, price: 145.00 }] },
  { id: 'astragalosideiv-50mg', name: 'Astragaloside IV', category: 'Longevity', subcategory: 'Telomerase', inStock: true, variants: [{ mg: 50, price: 85.00 }] },
  { id: 'glutathione-1500mg', name: 'Glutathione', category: 'Longevity', subcategory: 'Antioxidant', inStock: true, variants: [{ mg: 1500, price: 65.00 }] },
  { id: 'glutathione-3000mg', name: 'Glutathione', category: 'Longevity', subcategory: 'Antioxidant', inStock: true, variants: [{ mg: 3000, price: 105.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // IMMUNE MODULATORS
  // ═══════════════════════════════════════════════════════════════
  { id: 'rpf78-5mg', name: 'RPh-78', category: 'Immune Modulation', inStock: true, variants: [{ mg: 5, price: 95.00 }] },
  { id: 'vilon-50mg', name: 'Vilon', category: 'Immune Modulation', subcategory: 'Thymic', inStock: true, variants: [{ mg: 50, price: 58.00 }] },
  { id: 'bronchogen-20mg', name: 'Bronchogen', category: 'Immune Modulation', subcategory: 'Lung', inStock: true, variants: [{ mg: 20, price: 52.00 }] },
  { id: 'cardogen-20mg', name: 'Cardogen', category: 'Immune Modulation', subcategory: 'Cardiac', inStock: true, variants: [{ mg: 20, price: 55.00 }] },
  { id: 'livagen-20mg', name: 'Livagen', category: 'Immune Modulation', subcategory: 'Liver', inStock: true, variants: [{ mg: 20, price: 50.00 }] },
  { id: 'prostatilen-20mg', name: 'Prostatilen', category: 'Immune Modulation', subcategory: 'Prostate', inStock: true, variants: [{ mg: 20, price: 58.00 }] },
  { id: 'renovin-20mg', name: 'Renovin', category: 'Immune Modulation', subcategory: 'Renal', inStock: true, variants: [{ mg: 20, price: 55.00 }] },
  { id: 'testagen-20mg', name: 'Testagen', category: 'Immune Modulation', subcategory: 'Testicular', inStock: true, variants: [{ mg: 20, price: 58.00 }] },
  { id: 'visoluten-20mg', name: 'Visoluten', category: 'Immune Modulation', subcategory: 'Ocular', inStock: true, variants: [{ mg: 20, price: 62.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // WEIGHT MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  { id: 'tesofensine-500mcg', name: 'Tesofensine', category: 'Weight Management', inStock: true, variants: [{ mg: 0.5, price: 85.00 }] },
  { id: 'tesofensine-1mg', name: 'Tesofensine', category: 'Weight Management', inStock: true, variants: [{ mg: 1, price: 145.00 }] },
  { id: 'amlexanox-50mg', name: 'Amlexanox', category: 'Weight Management', subcategory: 'Metabolic', inStock: true, variants: [{ mg: 50, price: 105.00 }] },
  { id: 'amlexanox-100mg', name: 'Amlexanox', category: 'Weight Management', subcategory: 'Metabolic', inStock: true, variants: [{ mg: 100, price: 175.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // PAIN & INFLAMMATION
  // ═══════════════════════════════════════════════════════════════
  { id: 'larazotide-10mg', name: 'Larazotide', category: 'Pain & Inflammation', subcategory: 'GI', inStock: true, variants: [{ mg: 10, price: 110.00 }] },
  { id: 'pnc27-10mg', name: 'PNC-27', category: 'Pain & Inflammation', subcategory: 'Anti-Cancer', inStock: true, variants: [{ mg: 10, price: 155.00 }] },
  { id: 'p17-5mg', name: 'p17 Peptide', category: 'Pain & Inflammation', subcategory: 'Anti-Cancer', inStock: true, variants: [{ mg: 5, price: 120.00 }] },
  { id: 'larazotide-20mg', name: 'Larazotide', category: 'Pain & Inflammation', subcategory: 'GI', inStock: true, variants: [{ mg: 20, price: 185.00 }] },
  { id: 'pnc27-20mg', name: 'PNC-27', category: 'Pain & Inflammation', subcategory: 'Anti-Cancer', inStock: true, variants: [{ mg: 20, price: 265.00 }] },
  { id: 'p17-10mg', name: 'p17 Peptide', category: 'Pain & Inflammation', subcategory: 'Anti-Cancer', inStock: true, variants: [{ mg: 10, price: 195.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // PEPTIDE COCKTAILS / BLENDS
  // ═══════════════════════════════════════════════════════════════
  { id: 'blend-wolverine', name: 'Wolverine Stack', description: 'BPC-157 5mg + TB-500 5mg', category: 'Blends', subcategory: 'Healing', inStock: true, variants: [{ mg: 10, price: 98.00 }] },
  { id: 'blend-glow', name: 'Glow Blend', description: 'GHK-Cu 35mg + TB-500 5mg + BPC-157 5mg', category: 'Blends', subcategory: 'Cosmetic', inStock: true, variants: [{ mg: 45, price: 125.00 }] },
  { id: 'blend-gold', name: 'Gold Blend', description: 'GHK-Cu 35mg + BPC-157 5mg', category: 'Blends', subcategory: 'Healing', inStock: true, variants: [{ mg: 40, price: 105.00 }] },
  { id: 'blend-gh', name: 'GH Secretagogue Blend', description: 'Ipamorelin 5mg + CJC-1295 (no DAC) 5mg', category: 'Blends', subcategory: 'GH', inStock: true, variants: [{ mg: 10, price: 118.00 }] },
  { id: 'blend-kiss', name: 'Kisspeptin + GHRP Blend', description: 'Kisspeptin-10 5mg + GHRP-2 5mg', category: 'Blends', subcategory: 'GH/Sexual', inStock: true, variants: [{ mg: 10, price: 85.00 }] },
  { id: 'blend-mito', name: 'Mitochondrial Blend', description: 'MOTS-c 10mg + SS-31 5mg', category: 'Blends', subcategory: 'Metabolic', inStock: true, variants: [{ mg: 15, price: 148.00 }] },
  { id: 'blend-sleep', name: 'Sleep Stack', description: 'DSIP 5mg + Epithalon 5mg', category: 'Blends', subcategory: 'Sleep', inStock: true, variants: [{ mg: 10, price: 82.00 }] },
  { id: 'blend-nootropic', name: 'Nootropic Stack', description: 'Semax 5mg + Selank 5mg', category: 'Blends', subcategory: 'Cognition', inStock: true, variants: [{ mg: 10, price: 108.00 }] },
  { id: 'blend-thymic', name: 'Thymic Blend', description: 'Thymosin Alpha-1 5mg + Thymulin 5mg', category: 'Blends', subcategory: 'Immune', inStock: true, variants: [{ mg: 10, price: 148.00 }] },
  { id: 'blend-cosmetic', name: 'Cosmetic Blend', description: 'GHK-Cu 50mg + SNAP-8 10mg', category: 'Blends', subcategory: 'Cosmetic', inStock: true, variants: [{ mg: 60, price: 105.00 }] },
  { id: 'blend-fatloss', name: 'Fat Loss Stack', description: 'AOD-9604 5mg + Frag 176-191 5mg', category: 'Blends', subcategory: 'Metabolic', inStock: true, variants: [{ mg: 10, price: 98.00 }] },
  { id: 'blend-senolytic', name: 'Senolytic Duo', description: 'FOXO4-DRI 5mg + Epithalon 10mg', category: 'Blends', subcategory: 'Longevity', inStock: true, variants: [{ mg: 15, price: 205.00 }] },
  { id: 'blend-hair', name: 'Hair Growth Stack', description: 'GHK-Cu 50mg + Thymosin Beta-4 5mg', category: 'Blends', subcategory: 'Cosmetic', inStock: true, variants: [{ mg: 55, price: 110.00 }] },

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH SUPPLIES
  // ═══════════════════════════════════════════════════════════════
  { id: 'bacteriostatic-water', name: 'Bacteriostatic Water', category: 'Supplies', inStock: true, variants: [{ mg: 30, price: 12.00 }] },
  { id: 'syringe-10pk', name: 'Insulin Syringes (10-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 10, price: 8.00 }] },
  { id: 'syringe-50pk', name: 'Insulin Syringes (50-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 50, price: 28.00 }] },
  { id: 'syringe-100pk', name: 'Insulin Syringes (100-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 100, price: 48.00 }] },
  { id: 'alcohol-wipes-100pk', name: 'Alcohol Wipes (100-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 100, price: 6.00 }] },
  { id: 'peptide-pen', name: 'Reusable Peptide Pen', category: 'Supplies', inStock: true, variants: [{ mg: 1, price: 45.00 }] },
  { id: 'sterile-vials-5pk', name: 'Sterile Vials (5-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 5, price: 15.00 }] },
  { id: 'sterile-vials-25pk', name: 'Sterile Vials (25-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 25, price: 55.00 }] },
  { id: 'filter-needles-10pk', name: 'Filter Needles (10-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 10, price: 14.00 }] },
  { id: 'recon-needles-10pk', name: 'Reconstitution Needles (10-pack)', category: 'Supplies', inStock: true, variants: [{ mg: 10, price: 10.00 }] },
  { id: 'sharps-container', name: 'Sharps Container (1L)', category: 'Supplies', inStock: true, variants: [{ mg: 1, price: 8.00 }] },
  { id: 'cold-pack', name: 'Cold Chain Shipping Pack', category: 'Supplies', inStock: true, variants: [{ mg: 1, price: 15.00 }] },
  { id: 'sterile-water-10ml', name: 'Sterile Water (10ml)', category: 'Supplies', inStock: true, variants: [{ mg: 10, price: 8.00 }] },
];

// ── Helpers ──────────────────────────────────────────────────────
export function getAllProducts() { return PRODUCTS; }

export function getCategories() {
  return [...new Set(PRODUCTS.map(p => p.category))].sort();
}

export function getSubcategories(cat) {
  return [...new Set(
    PRODUCTS.filter(p => p.category === cat && p.subcategory).map(p => p.subcategory)
  )].sort();
}

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}