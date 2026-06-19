// AuraStep Product Database
// Contains 16 detailed women's shoe products with rich specifications and custom vector SVGs.

const products = [
  // ==================== CATEGORY: CASUAL (休閒鞋) ====================
  {
    id: "casual-1",
    name: "輕盈編織休閒鞋",
    englishName: "Aura Weave Slip-On",
    category: "casual",
    price: 2480,
    image: "assets/images/products/casual_woven.png",
    isSVG: false,
    description: "採用一體成型編織科技，極致輕盈透氣。貼合足弓設計，為您的日常漫步提供全天候的舒適支撐。簡約優雅的外型，不論搭配牛仔褲或休閒裙裝都能展現率性魅力。",
    features: ["一體飛織鞋面，乾爽透氣", "高彈力EVA中底，避震減壓", "人體工學足弓支撐鞋墊", "輕量化防滑橡膠大底"],
    specs: {
      material: "飛織面料 / 環保橡膠",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["燕麥杏", "曜石黑", "櫻花粉"]
    }
  },
  {
    id: "casual-2",
    name: "經典百搭小白鞋",
    englishName: "Classic White Leather",
    category: "casual",
    price: 2880,
    image: "assets/images/products/casual_white.png",
    isSVG: false,
    description: "甄選進口頭層牛皮製成，手感細膩柔軟。經典的簡約廓形搭配精緻的燙金 Logo，細節處彰顯輕奢質感。超軟防磨後跟與增高厚底設計，舒適與修飾比例兼得。",
    features: ["頂級頭層牛皮，極致親膚", "加厚乳膠鞋墊，踩屎感體驗", "防磨腳泡棉後跟設計", "3.5cm 隱形微增高底"],
    specs: {
      material: "天然牛皮 / 耐磨橡膠",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["經典純白", "奶油白", "金標白"]
    }
  },
  {
    id: "casual-3",
    name: "復古厚底老爹鞋",
    englishName: "Retro Platform Dad Shoes",
    category: "casual",
    price: 3280,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-casual-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FCEAE6" />
            <stop offset="100%" stop-color="#E8D7FF" />
          </linearGradient>
          <filter id="shadow-casual-3" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-casual-3)" />
        <g filter="url(#shadow-casual-3)">
          <!-- Chunky Sole -->
          <path d="M30,135 C50,138 90,140 130,135 C150,132 170,126 175,123 C178,128 174,136 168,142 C150,148 110,152 70,150 C45,148 32,143 30,138 Z" fill="#FFFFFF" />
          <path d="M32,125 C60,130 110,130 168,118 C173,122 171,130 162,133 C120,140 70,140 35,134 Z" fill="#E8D7FF" opacity="0.6" />
          <!-- Shoe Body -->
          <path d="M40,125 C35,105 45,78 72,75 C85,73 98,87 110,80 C125,70 148,82 165,118 C140,123 90,126 40,125 Z" fill="#FFFFFF" />
          <path d="M75,77 C82,90 92,95 108,90 C120,86 130,105 142,118 C115,121 90,122 50,123 C48,112 60,100 75,77 Z" fill="#FCEAE6" />
          <!-- Dynamic details -->
          <path d="M50,123 C65,115 80,118 95,112" stroke="#FFB5A7" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="108" cy="80" r="3" fill="#8E9AAF" />
          <circle cx="116" cy="77" r="3" fill="#8E9AAF" />
          <circle cx="124" cy="74" r="3" fill="#8E9AAF" />
          <path d="M108,80 L115,92 M116,77 L123,89 M124,74 L131,86" stroke="#8E9AAF" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "結合復古美學與現代街頭潮流，獨特的波浪厚底設計，視覺上拉長腿部線條。精選多材質拼接鞋面，層次感豐富。加厚緩震中底，久站不累，是您潮流穿搭的必備單品。",
    features: ["5cm 潮流增高厚底，修飾身形", "麂皮與透氣網布拼接，富有層次", "防滑耐磨波浪橡膠外底", "吸濕排汗親膚內裡"],
    specs: {
      material: "牛皮拼網布 / 聚氨酯增高底",
      sizes: ["35", "36", "37", "38", "39"],
      colors: ["復古燕麥", "溫柔粉鹽", "經典黑白"]
    }
  },
  {
    id: "casual-4",
    name: "舒適真皮樂福鞋",
    englishName: "Elegance Leather Loafers",
    category: "casual",
    price: 3080,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-casual-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F3E9DC" />
            <stop offset="100%" stop-color="#C08A58" />
          </linearGradient>
          <filter id="shadow-casual-4" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.18" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-casual-4)" />
        <g filter="url(#shadow-casual-4)">
          <!-- Heel block -->
          <path d="M140,125 L155,125 L155,142 L140,140 Z" fill="#5C3D2E" />
          <!-- Sole -->
          <path d="M40,128 C65,128 110,128 158,125 C162,125 162,129 158,131 C110,135 65,134 40,132 C38,132 38,128 40,128 Z" fill="#5C3D2E" />
          <!-- Loafer Body -->
          <path d="M42,128 C35,115 48,102 70,98 C82,96 110,95 130,95 C145,95 158,102 160,125 C120,127 80,128 42,128 Z" fill="#8B5E3C" />
          <path d="M55,126 C50,115 62,106 80,103 C90,102 122,101 138,101 C148,101 155,108 156,123 Z" fill="#A07855" />
          <!-- Metal Buckle Strap detail -->
          <path d="M92,99 L92,109" stroke="#3E2723" stroke-width="4" stroke-linecap="round" />
          <path d="M108,99 L108,109" stroke="#3E2723" stroke-width="4" stroke-linecap="round" />
          <rect x="90" y="102" width="20" height="4" rx="2" fill="#FFD700" />
          <circle cx="94" cy="104" r="3" fill="none" stroke="#FFD700" stroke-width="1.5" />
          <circle cx="106" cy="104" r="3" fill="none" stroke="#FFD700" stroke-width="1.5" />
        </g>
      </svg>
    `,
    description: "英倫雅痞風的完美詮釋。精選進口軟牛皮，觸感柔軟。精緻的金屬馬銜扣點綴於鞋面，盡顯優雅知性。獨特的折疊後跟設計，可兩穿（單鞋/半拖），隨心切換穿搭場景。",
    features: ["一鞋兩穿，後跟可踩折設計", "經典金屬馬銜扣，復古奢華", "超軟高密度橡膠大底，防滑靜音", "3D立體足弓減壓皮質鞋墊"],
    specs: {
      material: "軟牛皮 / 耐磨防滑橡膠",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["太妃焦糖", "經典深黑", "象牙奶油"]
    }
  },
  {
    id: "casual-5",
    name: "莫卡辛軟底豆豆鞋",
    englishName: "Classic Moccasin Flats",
    category: "casual",
    price: 2280,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-casual-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E2D4C9" />
            <stop offset="100%" stop-color="#A79080" />
          </linearGradient>
          <filter id="shadow-casual-5" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-casual-5)" />
        <g filter="url(#shadow-casual-5)">
          <!-- Sole with rubber dots -->
          <path d="M40,128 C65,130 110,130 158,127 C160,127 160,132 158,132 C110,135 65,135 40,133 C38,133 38,128 40,128 Z" fill="#6D594F" />
          <circle cx="50" cy="133" r="2.5" fill="#4E3D35" />
          <circle cx="70" cy="134" r="2.5" fill="#4E3D35" />
          <circle cx="90" cy="135" r="2.5" fill="#4E3D35" />
          <circle cx="110" cy="135" r="2.5" fill="#4E3D35" />
          <circle cx="130" cy="134" r="2.5" fill="#4E3D35" />
          <circle cx="150" cy="132" r="2.5" fill="#4E3D35" />
          <!-- Shoe Body -->
          <path d="M42,126 C33,115 48,104 70,101 C85,99 115,99 135,99 C150,99 158,106 158,125 C120,128 80,129 42,126 Z" fill="#C5A880" />
          <path d="M55,123 C50,113 62,106 82,104 C95,103 125,103 138,103 C146,103 152,109 153,122 Z" fill="#DCC6A6" />
          <!-- Bowknot and stitching detail -->
          <path d="M90,104 C88,96 112,96 110,104 Z" fill="none" stroke="#6D594F" stroke-width="1.5" />
          <circle cx="100" cy="104" r="3" fill="#6D594F" />
          <path d="M96,104 L92,112 M104,104 L108,112" stroke="#6D594F" stroke-width="1.5" stroke-linecap="round" />
          <path d="M60,108 C80,110 120,110 140,108" stroke="#FFFFFF" stroke-dasharray="3,3" stroke-width="1.5" fill="none" />
        </g>
      </svg>
    `,
    description: "極致舒適的代名詞。精選細膩反絨牛皮，手工縫線縫製，鞋身柔軟可任意折疊。鞋底分佈按摩顆粒（豆豆底），提供舒壓的穿著體驗。無論居家、開車、漫步，皆是您的放鬆首選。",
    features: ["手工白蠟線馬克縫，工藝精細", "精選磨砂翻毛皮，手感細緻", "經典橡膠豆豆按摩大底", "整雙鞋可180度彎折，無感貼合"],
    specs: {
      material: "反絨牛皮 / 豆豆橡膠底",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["暖沙杏", "薄荷綠", "霧霾藍"]
    }
  },

  // ==================== CATEGORY: RUNNING (跑步鞋) ====================
  {
    id: "running-1",
    name: "專業避震慢跑鞋",
    englishName: "Pro Cushion Runner",
    category: "running",
    price: 3680,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-running-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D9F1FF" />
            <stop offset="100%" stop-color="#5599FF" />
          </linearGradient>
          <filter id="shadow-running-1" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-running-1)" />
        <g filter="url(#shadow-running-1)">
          <!-- Thick sports sole with shock absorbing columns -->
          <path d="M30,132 C50,138 90,140 130,135 C150,132 170,126 178,121 C180,126 175,138 168,143 C150,149 110,152 70,150 C45,148 32,141 30,135 Z" fill="#FFFFFF" />
          <!-- Cushion pod details -->
          <circle cx="60" cy="142" r="5" fill="#5599FF" />
          <circle cx="85" cy="143" r="5" fill="#5599FF" />
          <circle cx="110" cy="142" r="5" fill="#5599FF" />
          <circle cx="135" cy="139" r="5" fill="#5599FF" />
          <!-- Sporty Shoe Upper -->
          <path d="M38,128 C32,112 42,85 70,82 C82,80 95,95 110,88 C128,78 152,90 168,122 C140,127 90,129 38,128 Z" fill="#2A2A2A" />
          <!-- Neon accents -->
          <path d="M65,120 Q95,95 120,110" fill="none" stroke="#00FFCC" stroke-width="4" stroke-linecap="round" />
          <path d="M72,123 Q98,103 125,115" fill="none" stroke="#00FFCC" stroke-width="2" stroke-linecap="round" />
          <!-- Laces -->
          <path d="M102,87 L115,92 M108,82 L121,87 M114,77 L127,82" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "為女性慢跑愛好者量身打造。採用中底避震科技，能有效吸收跑步時產生的足部衝擊，保護膝蓋與足關節。工程網眼面料極佳透氣，保持雙足乾爽。人體工學足底流線導向設計，起步更省力。",
    features: ["獨家專利氣動避震中底", "雙層工程網布，排汗抗悶熱", "加高足踝保護護套，防扭傷", "高耐磨碳素橡膠防滑大底"],
    specs: {
      material: "雙層透氣網布 / 高彈聚氨酯 / 耐磨橡膠",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["極光藍", "瑩光粉", "極簡白黑"]
    }
  },
  {
    id: "running-2",
    name: "透氣網面運動鞋",
    englishName: "AirFlow Breathable Sneaker",
    category: "running",
    price: 2680,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-running-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFE6E6" />
            <stop offset="100%" stop-color="#FF6B6B" />
          </linearGradient>
          <filter id="shadow-running-2" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-running-2)" />
        <g filter="url(#shadow-running-2)">
          <!-- Sole -->
          <path d="M30,132 C50,136 90,137 130,133 C150,130 170,124 178,119 C180,123 175,134 168,139 C150,145 110,147 70,145 C45,143 32,137 30,132 Z" fill="#FFFFFF" />
          <path d="M35,126 C60,131 110,129 168,120 C170,122 165,128 158,130 C110,134 60,135 35,130 Z" fill="#FF8E8E" />
          <!-- Shoe Body -->
          <path d="M38,126 C32,110 40,83 68,80 C80,78 95,93 110,86 C128,76 150,88 168,120 C140,124 90,127 38,126 Z" fill="#FFFFFF" />
          <!-- Mesh pattern texture overlays -->
          <circle cx="55" cy="115" r="2" fill="#FF6B6B" />
          <circle cx="62" cy="113" r="2" fill="#FF6B6B" />
          <circle cx="69" cy="111" r="2" fill="#FF6B6B" />
          <circle cx="58" cy="120" r="2" fill="#FF6B6B" />
          <circle cx="65" cy="118" r="2" fill="#FF6B6B" />
          <circle cx="72" cy="116" r="2" fill="#FF6B6B" />
          <!-- Sport Swirl line -->
          <path d="M60,105 C80,95 105,105 125,95" fill="none" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" />
          <path d="M102,84 L114,90 M108,79 L120,85" stroke="#4A4A4A" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "輕量化科技與極致透氣的完美結合。採用大孔單層呼吸網眼布，即使在炎熱夏季高強度運動，亦能保證氣流循環，防止悶熱異味。高彈發泡中底提供輕盈的能量回饋，讓你的每一步都輕快如飛。",
    features: ["單層大孔科技呼吸網眼面料", "超輕超彈PHYLON發泡中底", "熱熔貼合支撐片，防側翻", "後跟反光織帶，夜跑更安全"],
    specs: {
      material: "透氣單網面 / PHYLON中底 / 橡膠貼片",
      sizes: ["35", "36", "37", "38", "39"],
      colors: ["珊瑚粉", "薄荷綠", "星耀黑"]
    }
  },
  {
    id: "running-3",
    name: "輕量化競速跑鞋",
    englishName: "AeroSpeed Carbon Runner",
    category: "running",
    price: 4580,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-running-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E0F7FA" />
            <stop offset="100%" stop-color="#00ACC1" />
          </linearGradient>
          <filter id="shadow-running-3" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-running-3)" />
        <g filter="url(#shadow-running-3)">
          <!-- Dynamic Thin Sole -->
          <path d="M30,132 C50,135 90,135 130,130 C150,127 170,121 178,116 C180,120 176,130 168,135 C150,141 110,142 70,140 C45,138 32,134 30,132 Z" fill="#FFFFFF" />
          <path d="M50,135 L150,126" stroke="#00838F" stroke-width="2" /> <!-- Carbon plate representation -->
          <!-- Shoe Body -->
          <path d="M38,126 C32,110 42,83 68,80 C80,78 95,93 110,86 C128,76 150,88 168,118 C140,122 90,124 38,126 Z" fill="#1565C0" />
          <!-- Aerodynamic Swoop -->
          <path d="M55,122 C75,110 110,112 135,95" fill="none" stroke="#80DEEA" stroke-width="4" stroke-linecap="round" />
          <path d="M102,84 L114,90 M108,79 L120,85" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "為追求速度極限的女性跑者設計。內置全掌型碳纖維板，起步回彈更具爆發力。極簡羽量化鞋身設計，減少每一克不必要的重量負擔。強勁抓地顆粒大底，無懼任何路況，助力您突破個人 PB。",
    features: ["內置全掌推進型碳纖維板", "羽量級超細纖維抗拉扯鞋面", "能量導向科技，高回彈率", "碎釘抓地橡膠，防滑抗磨"],
    specs: {
      material: "抗拉扯透氣織物 / 碳纖維板 / 輕量橡膠",
      sizes: ["36", "37", "38", "39"],
      colors: ["極速藍", "閃電螢光", "白金限定"]
    }
  },
  {
    id: "running-4",
    name: "氣墊支撐健身鞋",
    englishName: "Max Cushion Fitness Trainer",
    category: "running",
    price: 3480,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-running-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F3E5F5" />
            <stop offset="100%" stop-color="#AB47BC" />
          </linearGradient>
          <filter id="shadow-running-4" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-running-4)" />
        <g filter="url(#shadow-running-4)">
          <!-- Sole with visual air bubble window -->
          <path d="M30,132 C50,136 90,137 130,133 C150,130 170,124 178,119 C180,123 175,134 168,139 C150,145 110,147 70,145 C45,143 32,137 30,132 Z" fill="#FFFFFF" />
          <!-- Air bag container window -->
          <rect x="125" y="130" width="30" height="10" rx="3" fill="#E1BEE7" />
          <path d="M128,135 L152,135" stroke="#8E24AA" stroke-width="3" stroke-dasharray="2,2" />
          <!-- Shoe Body -->
          <path d="M38,126 C32,110 40,83 68,80 C80,78 95,93 110,86 C128,76 150,88 168,120 C140,124 90,127 38,126 Z" fill="#4A148C" />
          <!-- Metallic Purple Accent lines -->
          <path d="M60,118 Q85,95 125,110" fill="none" stroke="#E040FB" stroke-width="3.5" stroke-linecap="round" />
          <path d="M102,84 L114,90 M108,79 L120,85" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "專為健身房訓練、有氧舞蹈與日常慢跑設計的多功能鞋。後跟配置可視化環狀氣墊，吸震防衝擊性能出眾。側向支撐架強化中底鎖定，防止橫向位移引起的足部扭傷，適合各種高強度間歇運動。",
    features: ["後跟可視環狀科技避震氣墊", "TPU中橋支撐片，穩定抗扭轉", "高密度透氣編織，貼合包覆", "室內無痕耐磨防滑大底"],
    specs: {
      material: "一體飛織 / 科技氣墊 / 橡膠",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["魅惑紫", "櫻花淡粉", "曜石沉黑"]
    }
  },
  {
    id: "running-5",
    name: "越野防滑跑步鞋",
    englishName: "Terrain-Shield Trail Runner",
    category: "running",
    price: 3980,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-running-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E8F5E9" />
            <stop offset="100%" stop-color="#2E7D32" />
          </linearGradient>
          <filter id="shadow-running-5" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-running-5)" />
        <g filter="url(#shadow-running-5)">
          <!-- Rugged Sole with big lugs -->
          <path d="M30,132 C50,136 90,137 130,133 C150,130 170,124 178,119 C180,123 175,134 168,139 C150,145 110,147 70,145 C45,143 32,137 30,132 Z" fill="#3E2723" />
          <!-- Lug details -->
          <polygon points="40,142 45,146 50,142" fill="#1B5E20" />
          <polygon points="65,144 70,148 75,144" fill="#1B5E20" />
          <polygon points="90,145 95,149 100,145" fill="#1B5E20" />
          <polygon points="115,144 120,148 125,144" fill="#1B5E20" />
          <polygon points="140,142 145,146 150,142" fill="#1B5E20" />
          <!-- Rugged Shoe Upper -->
          <path d="M38,126 C32,110 40,83 68,80 C80,78 95,93 110,86 C128,76 150,88 168,120 C140,124 90,127 38,126 Z" fill="#2E7D32" />
          <path d="M38,126 C35,115 50,105 70,108 C90,110 110,100 135,120 Z" fill="#1B5E20" opacity="0.6" />
          <!-- Reinforced toe cap -->
          <path d="M38,126 C35,118 42,112 48,118 Z" fill="#1B5E20" />
          <!-- Laces -->
          <path d="M102,84 L114,90 M108,79 L120,85" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "大自然探險的極佳防護。專為戶外越野與崎嶇路面設計，鞋面結合科技防水塗層，能防潑水與防泥沙滲入。鞋底特製深槽碎石齒紋橡膠大底，提供強大的多向抓地力，給您滿滿的安全感。",
    features: ["特製深槽碎石防滑大底，抓地力強", "防潑水防砂抗撕裂面料", "防撞橡膠鞋頭護套設計", "高彈避震中底，舒緩崎嶇路面衝擊"],
    specs: {
      material: "防潑水科技織物 / 強抓地橡膠",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["軍野綠", "沉穩灰黑", "熔岩粉橘"]
    }
  },

  // ==================== CATEGORY: OTHERS (其它類：高跟鞋/靴子/涼鞋) ====================
  {
    id: "other-1",
    name: "優雅尖頭細高跟鞋",
    englishName: "Starlight pointed Stilettos",
    category: "others",
    price: 3880,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF5F5" />
            <stop offset="100%" stop-color="#FFB3B3" />
          </linearGradient>
          <filter id="shadow-other-1" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.2" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-1)" />
        <g filter="url(#shadow-other-1)">
          <!-- Elegant High Heel shape -->
          <!-- The Stiletto Heel (10cm) -->
          <path d="M152,80 L152,152 L144,152 L147,85 Z" fill="#990000" />
          <!-- Shoe sole arch -->
          <path d="M42,130 C55,130 80,120 100,90 C118,63 145,60 160,80 C165,86 168,95 168,102 L158,102 C155,92 142,80 128,84 C110,89 95,124 75,135 L75,142 L42,132 Z" fill="#990000" />
          <!-- Shoe Upper Velvet texture -->
          <path d="M42,130 C30,130 35,124 45,120 C60,113 75,120 90,95 C100,82 125,75 138,84 C120,86 100,118 75,128 Z" fill="#D32F2F" />
          <!-- Sparkling Rhinestone Deco -->
          <polygon points="50,118 53,121 50,124 47,121" fill="#FFFFFF" />
          <polygon points="55,115 58,118 55,121 52,118" fill="#FFFFFF" />
        </g>
      </svg>
    `,
    description: "晚宴、婚禮或正式場合的目光焦點。10cm 的極致尖頭細跟設計，拉長雙腿比例，勾勒完美的女性足部線條。精選絲絨質感麂皮鞋面，前掌內置軟墊設計，有效舒緩前掌站立壓力，美麗與舒適兼備。",
    features: ["10cm 細跟設計，勾勒完美足部線條", "極致性感尖頭楦型", "前掌內嵌乳膠軟墊，減震舒壓", "超纖親膚防滑內裡"],
    specs: {
      material: "絲絨麂皮 / 鋼芯高跟 / 耐磨橡膠底",
      sizes: ["34", "35", "36", "37", "38", "39"],
      colors: ["魅惑正紅", "高貴奧利黑", "奢華香檳金"]
    }
  },
  {
    id: "other-2",
    name: "復古粗跟瑪麗珍鞋",
    englishName: "Vintage Mary Jane Shoes",
    category: "others",
    price: 3280,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EBE3D5" />
            <stop offset="100%" stop-color="#B0A695" />
          </linearGradient>
          <filter id="shadow-other-2" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.18" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-2)" />
        <g filter="url(#shadow-other-2)">
          <!-- Chunky Retro Heel -->
          <path d="M132,105 L152,105 L148,144 L132,142 Z" fill="#2E1C0C" />
          <!-- Sole -->
          <path d="M40,128 C65,130 100,125 148,118 C152,118 152,122 148,124 C100,131 65,134 40,131 C38,131 38,128 40,128 Z" fill="#2E1C0C" />
          <!-- Shoe Body (Mary Jane) -->
          <path d="M42,128 C35,115 48,102 70,98 C82,96 110,95 130,95 C142,95 152,100 154,115 C120,119 80,124 42,128 Z" fill="#5C3D2E" />
          <!-- Strap with Buckle -->
          <path d="M92,97 C92,97 90,82 108,82 C120,82 120,95 120,95" fill="none" stroke="#2E1C0C" stroke-width="3" />
          <rect x="105" y="85" width="8" height="6" fill="#D4AF37" rx="1" />
          <!-- Top edge line detail -->
          <path d="M55,124 C50,115 62,105 82,102 C95,100 120,100 135,100" stroke="#8D6E63" stroke-width="1" fill="none" />
        </g>
      </svg>
    `,
    description: "法式復古風格的永恆經典。圓潤的鞋頭包覆舒適不夾腳，搭配可調節搭扣一字帶，散發甜美知性的文藝氣息。5.5cm 的復古粗跟，平穩好走，修飾腿型之餘更確保日常步行的安穩。",
    features: ["5.5cm 復古粗跟，舒適平穩", "優雅圓頭楦型，加寬不擠腳", "經典搭扣一字帶，可調節長度", "加厚乳膠減壓防磨墊"],
    specs: {
      material: "漆皮（牛皮覆膜） / 環保PU底",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["復古漆皮紅", "氣質亮面黑", "優雅杏仁奶"]
    }
  },
  {
    id: "other-3",
    name: "英倫風真皮短靴",
    englishName: "Chelsea Leather Ankle Boots",
    category: "others",
    price: 4280,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EAE3DF" />
            <stop offset="100%" stop-color="#8C7B73" />
          </linearGradient>
          <filter id="shadow-other-3" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.18" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-3)" />
        <g filter="url(#shadow-other-3)">
          <!-- Low Heel -->
          <path d="M125,130 L145,130 L142,148 L125,146 Z" fill="#1A110B" />
          <!-- Thick Boot Sole -->
          <path d="M40,132 C65,134 100,132 145,128 C148,128 148,133 145,135 C100,138 65,139 40,136 C38,136 38,132 40,132 Z" fill="#1A110B" />
          <!-- Boot Body (Ankle Boot shape) -->
          <path d="M42,132 C38,115 50,105 70,102 C82,100 100,95 105,75 C108,60 135,60 135,128 C105,130 75,132 42,132 Z" fill="#3D2B1F" />
          <!-- Elastic Side Panel (Chelsea boot detail) -->
          <path d="M110,75 C108,82 108,95 118,102 C125,95 125,82 122,75 Z" fill="#1A110B" />
          <!-- Front seam line -->
          <path d="M82,102 C90,105 95,95 100,82" fill="none" stroke="#2B1D14" stroke-width="1.5" />
        </g>
      </svg>
    `,
    description: "秋冬穿搭的必備神靴。英倫切爾西靴型設計，側邊經典高彈織帶方便穿脫且完美貼合腳踝。精選細膩擦色牛皮，隨時間推移更具復古質感。中跟平底設計，極具休閒與挺拔氣場。",
    features: ["特選擦色工藝牛皮，極具復古質感", "兩側高彈萊卡織帶，穿脫便利", "3.5cm 實木感防滑低跟", "吸濕防霉豬皮內裡"],
    specs: {
      material: "頭層擦色牛皮 / 豬皮內裡 / 耐磨橡膠",
      sizes: ["35", "36", "37", "38", "39", "40"],
      colors: ["復古深褐", "百搭霧黑", "知性暖卡其"]
    }
  },
  {
    id: "other-4",
    name: "簡約細帶平底涼鞋",
    englishName: "Minimalist Strappy Sandals",
    category: "others",
    price: 1980,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF8F2" />
            <stop offset="100%" stop-color="#E6C5B3" />
          </linearGradient>
          <filter id="shadow-other-4" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-4)" />
        <g filter="url(#shadow-other-4)">
          <!-- Flat Sandal Sole -->
          <path d="M35,130 C60,131 100,129 160,125 C164,125 164,129 160,131 C100,135 60,135 35,133 C32,133 32,130 35,130 Z" fill="#8D7A71" />
          <!-- Feet shape skin contour placeholder -->
          <path d="M45,130 C50,118 65,115 80,115 C95,115 125,110 145,110 C155,110 158,118 158,125 Z" fill="#FFE5D9" opacity="0.6" />
          <!-- Cross strappy cords (Minimalist) -->
          <path d="M55,130 Q65,108 75,123 Q85,130 95,120" fill="none" stroke="#5C3D2E" stroke-width="2.5" stroke-linecap="round" />
          <path d="M68,128 Q80,108 92,121" fill="none" stroke="#5C3D2E" stroke-width="2" stroke-linecap="round" />
          <path d="M120,124 Q130,95 140,115 Q145,125 152,124" fill="none" stroke="#5C3D2E" stroke-width="2" stroke-linecap="round" />
          <!-- Ankle strap with tiny buckle -->
          <path d="M135,115 C132,105 148,105 145,115" fill="none" stroke="#5C3D2E" stroke-width="2" />
          <circle cx="140" cy="107" r="1.5" fill="#FFD700" />
        </g>
      </svg>
    `,
    description: "盛夏的輕盈浪漫。極簡細帶縱橫交錯於腳背，展現乾淨俐落的幾何線條美學，極具視覺延伸感。平底舒適防滑設計，搭配超軟綿羊皮襯底，久走無懼防打滑，是您的渡假休閒首選。",
    features: ["極簡細帶交織，展現腳背肌理美", "超柔軟細膩綿羊皮中底板", "耐磨超薄防滑橡膠外底", "可調節踝帶扣，貼合腳踝"],
    specs: {
      material: "羊皮細帶 / 軟質防滑大底",
      sizes: ["35", "36", "37", "38", "39"],
      colors: ["氣質米白", "極簡深黑", "奢華玫瑰金"]
    }
  },
  {
    id: "other-5",
    name: "舒適保暖雪地靴",
    englishName: "Cozy-Cloud Snow Boots",
    category: "others",
    price: 3680,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E3F2FD" />
            <stop offset="100%" stop-color="#90CAF9" />
          </linearGradient>
          <filter id="shadow-other-5" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.15" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-5)" />
        <g filter="url(#shadow-other-5)">
          <!-- Thick Flat Snow Sole -->
          <path d="M35,134 C60,136 100,136 150,132 C154,132 154,137 150,139 C100,143 60,143 35,140 C32,140 32,135 35,134 Z" fill="#5D4037" />
          <path d="M40,128 C65,130 100,130 148,127 L148,133 L40,133 Z" fill="#8D6E63" />
          <!-- Boot Body (Puffy Snow boot) -->
          <path d="M42,130 C38,115 48,105 70,102 C82,100 102,96 105,75 C108,62 135,62 135,128 L42,130 Z" fill="#A1887F" />
          <!-- Fluffy Wool Collar trim -->
          <path d="M100,75 C100,68 140,68 140,75 C140,78 100,78 100,75 Z" fill="#FFFFFF" />
          <ellipse cx="120" cy="72" rx="20" ry="6" fill="#FFFFFF" />
          <!-- Cute tie knot button -->
          <circle cx="108" cy="92" r="3" fill="#D7CCC8" />
          <path d="M102,92 L96,98 M102,92 L98,86" stroke="#D7CCC8" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `,
    description: "給您冬季雲朵般的溫暖包裹。鞋內鋪設高密度柔軟羊毛，極致保暖防寒。防水濺防風鞋面布料，抵禦風雪滲入。EVA加厚防滑中底，輕量耐踩，讓您在寒冬穿行依然輕鬆優雅。",
    features: ["精選30%天然羊毛混紡內裡，鎖溫抗寒", "防風防潑水科技鞋面包覆", "防滑深齒抓地雪底設計", "超輕量EVA鞋底，擺脫冬日沉重"],
    specs: {
      material: "防潑水織物 / 天然羊毛內裡 / 輕量防滑EVA",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["栗子褐", "溫柔煙粉", "曜石沉黑"]
    }
  },
  {
    id: "other-6",
    name: "性感一字帶高跟涼鞋",
    englishName: "Glamour Ankle Strap Heels",
    category: "others",
    price: 3480,
    image: "",
    isSVG: true,
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-other-6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F3E5F5" />
            <stop offset="100%" stop-color="#CE93D8" />
          </linearGradient>
          <filter id="shadow-other-6" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.2" />
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#grad-other-6)" />
        <g filter="url(#shadow-other-6)">
          <!-- Stiletto heel -->
          <path d="M148,80 L148,150 L142,150 L145,85 Z" fill="#6A1B9A" />
          <!-- Insole Arch structure -->
          <path d="M42,130 C55,130 80,120 100,90 C118,63 142,60 156,80 C159,85 160,95 160,100 L152,100 C149,92 138,80 125,84 C110,89 95,124 75,135 L42,132 Z" fill="#6A1B9A" />
          <!-- Skin curve overlay placeholder -->
          <path d="M42,130 C50,118 65,115 80,115 C95,115 125,110 145,110 C155,110 158,118 158,125 Z" fill="#FFE5D9" opacity="0.4" />
          <!-- Single Strap across toes -->
          <path d="M48,128 C50,116 65,116 68,128 Z" fill="none" stroke="#8E24AA" stroke-width="3" />
          <!-- Sexy delicate ankle wrap strap with buckle -->
          <path d="M125,84 C120,72 145,72 140,84" fill="none" stroke="#8E24AA" stroke-width="2" />
          <circle cx="132" cy="74" r="1.5" fill="#FFD700" />
        </g>
      </svg>
    `,
    description: "簡約即是極致的性感。經典的一字橫帶露出優美的腳背與腳趾，腳踝處纖細的繫帶勾勒出迷人的踝骨線條。8cm 的酒杯跟平穩好走，是搭配禮服、長裙或合身牛仔褲的氣場之選。",
    features: ["8cm 優雅酒杯跟，極度拉長小腿比例", "極簡一字寬帶，百搭修飾", "防滑耐磨大底，高支撐防晃動", "腳踝細帶金屬針扣設計"],
    specs: {
      material: "羊猄皮 / 耐磨橡膠",
      sizes: ["34", "35", "36", "37", "38", "39"],
      colors: ["奧利深黑", "奢華香檳金", "魅惑暗紅"]
    }
  }
];

// Helper to get products by category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Helper to get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Export database
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getProductsByCategory, getProductById };
}
