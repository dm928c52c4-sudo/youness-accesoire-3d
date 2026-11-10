/**
 * YOUNESS ACCESSOIRES - HAUTE JOAILLERIE & ACCESSOIRES 3D
 * Three.js 3D Viewer & Complete E-Commerce Experience
 */

// ===================================================================
// 1. PRODUCTS DATABASE (Ndader, Maganat, Snassel Dyal Deriyat)
// ===================================================================
const PRODUCTS = [
    // --- SNASSEL DYAL DERIYAT (COLLIERS / CHAÎNES FEMME) ---
    {
        id: 'snassel-1',
        category: 'snassel',
        title: 'Collier Cœur Royal Or 18K',
        spec: 'Plaqué or véritable 18K, pendentif cœur serti de zircons scintillants. Résistant à l\'eau & anti-allergique.',
        price: 249,
        oldPrice: 390,
        badge: 'Top Vente',
        badgeClass: 'femme',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
        rating: 4.9
    },
    {
        id: 'snassel-2',
        category: 'snassel',
        title: 'Chaîne Médaillon Trèfle 4 Feuilles',
        spec: 'Symbole de chance et d\'élégance. Finition nacre naturelle et contour or rose. Style haute joaillerie.',
        price: 299,
        oldPrice: 450,
        badge: 'Coup de Cœur',
        badgeClass: 'femme',
        image: 'https://images.unsplash.com/photo-1611591475155-4284ec289e0d?w=800&auto=format&fit=crop&q=80',
        rating: 5.0
    },
    {
        id: 'snassel-3',
        category: 'snassel',
        title: 'Parure Collier & Pendentif Cristal Solitaire',
        spec: 'Cristal pur taille diamant monté sur chaîne en maille forçat diamantée dorée. Éclat hypnotique.',
        price: 279,
        oldPrice: 420,
        badge: 'Nouveau',
        badgeClass: 'femme',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&auto=format&fit=crop&q=80',
        rating: 4.8
    },
    {
        id: 'snassel-4',
        category: 'snassel',
        title: 'Collier Double Rang Maillon Serpent',
        spec: 'Design superposé tendance en acier inoxydable doré inoxydable. Porté raffiné au quotidien ou en soirée.',
        price: 220,
        oldPrice: 350,
        badge: 'Promo',
        badgeClass: 'promo',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
        rating: 4.9
    },

    // --- NDADER (LUNETTES DE SOLEIL / SUNGLASSES) ---
    {
        id: 'ndader-1',
        category: 'ndader',
        title: 'Lunettes Aviator Gold Prestige UV400',
        spec: 'Monture ultra-légère plaquée or 24K, verres noirs polarisés antireflets. Protection solaire maximale.',
        price: 299,
        oldPrice: 480,
        badge: 'Best-Seller',
        badgeClass: '',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
        rating: 5.0
    },
    {
        id: 'ndader-2',
        category: 'ndader',
        title: 'Lunettes Cat-Eye Glamour Femme Dorée',
        spec: 'Monture féminine œil-de-chat aux détails biseautés or et verres dégradés ambre fumé.',
        price: 270,
        oldPrice: 410,
        badge: 'Tendance 2026',
        badgeClass: 'femme',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80',
        rating: 4.9
    },
    {
        id: 'ndader-3',
        category: 'ndader',
        title: 'Lunettes Hexagonales Métal Brossé',
        spec: 'Style rétro contemporain, géométrie affirmée et branches gravées. Verres verts bouteille G-15.',
        price: 260,
        oldPrice: 390,
        badge: 'Exclusivité',
        badgeClass: '',
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80',
        rating: 4.7
    },
    {
        id: 'ndader-4',
        category: 'ndader',
        title: 'Lunettes Carrées Oversize All-Black',
        spec: 'Design imposant et charismatique. Finition noir laqué avec inserts métalliques dorés aux tempes.',
        price: 280,
        oldPrice: 440,
        badge: 'Promo',
        badgeClass: 'promo',
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=80',
        rating: 4.8
    },

    // --- MAGANAT (MONTRES DE LUXE / WATCHES) ---
    {
        id: 'maganat-1',
        category: 'maganat',
        title: 'Montre Chronographe Royale Or & Cadran Noir',
        spec: 'Boîtier acier massif 316L plaqué or, verre saphir inrayable, chronomètre précis et dateur automatique.',
        price: 399,
        oldPrice: 650,
        badge: 'Prestige',
        badgeClass: '',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80',
        rating: 5.0
    },
    {
        id: 'maganat-2',
        category: 'maganat',
        title: 'Montre Femme Rose Gold Maille Milanaise',
        spec: 'Élégance féminine suprême. Cadran en nacre blanche naturelle et bracelet aimanté ajustable.',
        price: 349,
        oldPrice: 520,
        badge: 'Spécial Femme',
        badgeClass: 'femme',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        rating: 4.9
    },
    {
        id: 'maganat-3',
        category: 'maganat',
        title: 'Montre Squelette Automatique Dorée',
        spec: 'Mouvement mécanique visible transparent sans pile. Finition or poli et mécanisme squelette fascinant.',
        price: 490,
        oldPrice: 790,
        badge: 'Édition Limitée',
        badgeClass: '',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
        rating: 5.0
    },
    {
        id: 'maganat-4',
        category: 'maganat',
        title: 'Montre Minimaliste Noir Intense & Aiguilles Or',
        spec: 'Lignes épurées d\'un luxe discret. Bracelet en cuir véritable surpiqué ou maille acier noir mat.',
        price: 310,
        oldPrice: 470,
        badge: 'Promo',
        badgeClass: 'promo',
        image: 'https://images.unsplash.com/photo-1547996160-71dfabb1a7cf?w=800&auto=format&fit=crop&q=80',
        rating: 4.8
    }
];

// ===================================================================
// 2. SHOPPING CART STATE & HELPERS
// ===================================================================
let cart = JSON.parse(localStorage.getItem('youness_cart') || '[]');

function saveCart() {
    localStorage.setItem('youness_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    showToast('Produit Ajouté', `${product.title} a été ajouté au panier.`);
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Badges & Counts
    const badgeEl = document.getElementById('cartBadgeCount');
    if (badgeEl) badgeEl.textContent = totalCount;

    const drawerCountEl = document.getElementById('drawerCount');
    if (drawerCountEl) drawerCountEl.textContent = `(${totalCount})`;

    // Update Totals
    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) subtotalEl.textContent = `${totalPrice} DH`;

    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = `${totalPrice} DH`;

    // Modal summaries
    const modalCount = document.getElementById('modalArticlesCount');
    if (modalCount) modalCount.textContent = `${totalCount} article(s)`;

    const modalTotal = document.getElementById('modalOrderTotal');
    if (modalTotal) modalTotal.textContent = `${totalPrice} DH`;

    // Render Drawer Items
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <h4>Votre panier est vide</h4>
                <p>Découvrez notre sélection de colliers, lunettes et montres de luxe.</p>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <div class="cart-item-price">${item.price} DH</div>
                    <div class="cart-qty-ctrl">
                        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                        <span class="qty-number">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Supprimer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
    }
}

// Toast Notification
function showToast(title, msg) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMsg');

    if (toast && toastTitle && toastMsg) {
        toastTitle.textContent = title;
        toastMsg.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }
}

// ===================================================================
// 3. CATALOGUE RENDERING & FILTERING
// ===================================================================
let currentCategory = 'all';

function renderCatalogue(filter = 'all') {
    currentCategory = filter;
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(product => {
        const catName = product.category === 'snassel' ? 'Snassel Dyal Deriyat' 
                      : product.category === 'ndader' ? 'Ndader (Lunettes)' 
                      : 'Maganat (Montres)';

        const waText = encodeURIComponent(`Salam Youness Accessoires, bghit ncommander had l'article : ${product.title} (Prix: ${product.price} DH).`);

        return `
            <div class="product-card" data-category="${product.category}">
                ${product.badge ? `<span class="product-badge ${product.badgeClass || ''}">${product.badge}</span>` : ''}
                
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
                </div>

                <div class="product-info">
                    <span class="product-cat-name">${catName}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-spec">${product.spec}</p>

                    <div class="product-price-row">
                        <span class="product-price">${product.price} DH</span>
                        ${product.oldPrice ? `<span class="product-old-price">${product.oldPrice} DH</span>` : ''}
                    </div>

                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>Ajouter au panier</span>
                        </button>
                        <a href="https://wa.me/212600000000?text=${waText}" target="_blank" class="btn-quick-wa" title="Commander direct sur WhatsApp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Update filter buttons active state
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
}

function filterCatalogue(cat) {
    renderCatalogue(cat);
    const catalogueEl = document.getElementById('catalogue');
    if (catalogueEl) {
        catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===================================================================
// 4. THREE.JS 3D INTERACTIVE ACCESSORIES STUDIO
// Procedural modeling of:
// 1. Snassel (Luxury Gold & Gemstone Necklace / Pendant)
// 2. Maganat (Gold & Sapphire Royal Watch)
// 3. Ndader (Aviator Gold Sunglasses)
// ===================================================================

class Accessory3DStudio {
    constructor(containerId, isHero = false) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.isHero = isHero;
        this.currentModelType = 'necklace';
        this.autoRotate = true;
        this.models = {};

        this.init();
    }

    init() {
        const width = this.container.clientWidth || 400;
        const height = this.container.clientHeight || 350;

        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        this.camera.position.set(0, 0, 5);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.35;
        this.container.appendChild(this.renderer.domElement);

        // Controls
        if (typeof THREE.OrbitControls !== 'undefined') {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.enableZoom = !this.isHero;
            this.controls.autoRotate = this.autoRotate;
            this.controls.autoRotateSpeed = 2.2;
            this.controls.maxDistance = 8;
            this.controls.minDistance = 2.5;
        }

        // Lighting
        this.setupLighting();

        // Build 3D Objects
        this.buildAccessories();

        // Particle Glow
        this.createFloatingSparks();

        // Resize Listener
        window.addEventListener('resize', () => this.onWindowResize());

        // Mouse Drag Interaction for Hero if no OrbitControls
        this.animate();
    }

    setupLighting() {
        // Ambient Light
        const ambient = new THREE.AmbientLight(0xfff8ee, 1.2);
        this.scene.add(ambient);

        // Warm Key Light (Gold Highlights)
        const keyLight = new THREE.DirectionalLight(0xffdf88, 2.5);
        keyLight.position.set(4, 5, 4);
        this.scene.add(keyLight);

        // Cool Rim Light
        const rimLight = new THREE.DirectionalLight(0x88bbff, 1.8);
        rimLight.position.set(-4, -2, -3);
        this.scene.add(rimLight);

        // Bottom Reflector
        const bottomLight = new THREE.PointLight(0xd4af37, 1.5, 10);
        bottomLight.position.set(0, -3, 2);
        this.scene.add(bottomLight);
    }

    createMaterials() {
        // 24K Polished Gold Material
        this.goldMat = new THREE.MeshStandardMaterial({
            color: 0xe0ad36,
            metalness: 0.94,
            roughness: 0.16,
            envMapIntensity: 2.2
        });

        // Rose Gold / Copper Accent
        this.roseGoldMat = new THREE.MeshStandardMaterial({
            color: 0xd98275,
            metalness: 0.88,
            roughness: 0.22
        });

        // Diamond / Gemstone Refractive Material
        this.gemstoneMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.05,
            transmission: 0.88,
            ior: 2.4, // Real diamond index
            clearcoat: 1.0,
            clearcoatRoughness: 0.05
        });

        // Dark Watch Dial / Glass
        this.dialMat = new THREE.MeshStandardMaterial({
            color: 0x0f0f14,
            metalness: 0.3,
            roughness: 0.3
        });

        // Sunglasses Polarized Dark Lens
        this.lensMat = new THREE.MeshPhysicalMaterial({
            color: 0x11161d,
            metalness: 0.4,
            roughness: 0.08,
            transmission: 0.65,
            ior: 1.55,
            clearcoat: 1.0
        });
    }

    buildAccessories() {
        this.createMaterials();

        // -------------------------------------------------------------
        // A. SNASSEL (Collier Cœur Doré & Chaîne Torsadée)
        // -------------------------------------------------------------
        const necklaceGroup = new THREE.Group();
        
        // 1. Dainty Chain Loop (Torus)
        const chainGeo = new THREE.TorusGeometry(1.3, 0.035, 16, 64);
        const chainMesh = new THREE.Mesh(chainGeo, this.goldMat);
        chainMesh.rotation.x = Math.PI * 0.38;
        necklaceGroup.add(chainMesh);

        // 2. Pendant Bail / Ring
        const bailGeo = new THREE.TorusGeometry(0.12, 0.025, 16, 24);
        const bail = new THREE.Mesh(bailGeo, this.goldMat);
        bail.position.set(0, -1.25, 0.2);
        necklaceGroup.add(bail);

        // 3. Royal Heart Gemstone Pendant
        const heartShape = new THREE.Shape();
        const x = 0, y = 0;
        heartShape.moveTo(x + 0.25, y + 0.25);
        heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
        heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
        heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 1.0);
        heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
        heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
        heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

        const extrudeSettings = { depth: 0.14, bevelEnabled: true, bevelSegments: 4, steps: 2, bevelSize: 0.05, bevelThickness: 0.05 };
        const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
        heartGeo.center();

        const heartGem = new THREE.Mesh(heartGeo, this.gemstoneMat);
        heartGem.scale.set(0.9, 0.9, 0.9);
        heartGem.rotation.z = Math.PI;
        heartGem.position.set(0, -1.65, 0.25);
        necklaceGroup.add(heartGem);

        // Gold Bezel Outline for the Gemstone
        const heartBezel = new THREE.Mesh(heartGeo, this.goldMat);
        heartBezel.scale.set(0.96, 0.96, 0.7);
        heartBezel.rotation.z = Math.PI;
        heartBezel.position.set(0, -1.65, 0.22);
        necklaceGroup.add(heartBezel);

        necklaceGroup.position.y = 0.5;
        this.scene.add(necklaceGroup);
        this.models['necklace'] = necklaceGroup;

        // -------------------------------------------------------------
        // B. MAGANAT (Montre Royale Dorée avec Cadran & Aiguilles)
        // -------------------------------------------------------------
        const watchGroup = new THREE.Group();

        // 1. Watch Case (Cylinder)
        const caseGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.28, 48);
        const watchCase = new THREE.Mesh(caseGeo, this.goldMat);
        watchGroup.add(watchCase);

        // 2. Bezel Ring
        const bezelGeo = new THREE.TorusGeometry(1.2, 0.08, 16, 48);
        const bezel = new THREE.Mesh(bezelGeo, this.goldMat);
        bezel.rotation.x = Math.PI / 2;
        watchGroup.add(bezel);

        // 3. Dial Face
        const dialGeo = new THREE.CylinderGeometry(1.12, 1.12, 0.02, 48);
        const dial = new THREE.Mesh(dialGeo, this.dialMat);
        dial.position.y = 0.14;
        watchGroup.add(dial);

        // 4. Dial Markers (12 Hour Studs)
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const markerGeo = new THREE.BoxGeometry(i % 3 === 0 ? 0.07 : 0.04, 0.04, 0.16);
            const marker = new THREE.Mesh(markerGeo, this.goldMat);
            marker.position.set(Math.sin(angle) * 0.9, 0.16, Math.cos(angle) * 0.9);
            marker.rotation.y = angle;
            watchGroup.add(marker);
        }

        // 5. Crown Knob
        const crownGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.2, 24);
        const crown = new THREE.Mesh(crownGeo, this.goldMat);
        crown.rotation.z = Math.PI / 2;
        crown.position.set(1.3, 0, 0);
        watchGroup.add(crown);

        // 6. Watch Hands
        const hourHandGeo = new THREE.BoxGeometry(0.05, 0.03, 0.55);
        const hourHand = new THREE.Mesh(hourHandGeo, this.goldMat);
        hourHand.position.set(0.15, 0.18, -0.2);
        hourHand.rotation.y = 0.6;
        watchGroup.add(hourHand);

        const minuteHandGeo = new THREE.BoxGeometry(0.04, 0.03, 0.8);
        const minuteHand = new THREE.Mesh(minuteHandGeo, this.goldMat);
        minuteHand.position.set(-0.25, 0.19, 0.25);
        minuteHand.rotation.y = -0.9;
        watchGroup.add(minuteHand);

        // 7. Watch Straps (Upper and Lower Mesh Brackets)
        const strapGeo = new THREE.BoxGeometry(1.0, 0.12, 1.5);
        const topStrap = new THREE.Mesh(strapGeo, this.goldMat);
        topStrap.position.set(0, -0.05, -1.6);
        topStrap.rotation.x = -0.25;
        watchGroup.add(topStrap);

        const bottomStrap = new THREE.Mesh(strapGeo, this.goldMat);
        bottomStrap.position.set(0, -0.05, 1.6);
        bottomStrap.rotation.x = 0.25;
        watchGroup.add(bottomStrap);

        watchGroup.rotation.x = Math.PI * 0.25;
        watchGroup.visible = false;
        this.scene.add(watchGroup);
        this.models['watch'] = watchGroup;

        // -------------------------------------------------------------
        // C. NDADER (Lunettes de Soleil Aviator Gold & Verres Polarisés)
        // -------------------------------------------------------------
        const glassesGroup = new THREE.Group();

        // 1. Left & Right Rim Rings
        const rimGeo = new THREE.TorusGeometry(0.75, 0.04, 16, 40);
        
        const leftRim = new THREE.Mesh(rimGeo, this.goldMat);
        leftRim.position.set(-0.95, 0, 0);
        glassesGroup.add(leftRim);

        const rightRim = new THREE.Mesh(rimGeo, this.goldMat);
        rightRim.position.set(0.95, 0, 0);
        glassesGroup.add(rightRim);

        // 2. Lenses
        const lensGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.03, 36);
        const leftLens = new THREE.Mesh(lensGeo, this.lensMat);
        leftLens.rotation.x = Math.PI / 2;
        leftLens.position.set(-0.95, 0, 0);
        glassesGroup.add(leftLens);

        const rightLens = new THREE.Mesh(lensGeo, this.lensMat);
        rightLens.rotation.x = Math.PI / 2;
        rightLens.position.set(0.95, 0, 0);
        glassesGroup.add(rightLens);

        // 3. Nose Bridge
        const bridgeGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.45, 16);
        const bridge = new THREE.Mesh(bridgeGeo, this.goldMat);
        bridge.rotation.z = Math.PI / 2;
        bridge.position.set(0, 0.15, 0);
        glassesGroup.add(bridge);

        // Top Brow Bar (Classic Aviator double-bridge)
        const browBar = new THREE.Mesh(bridgeGeo, this.goldMat);
        browBar.rotation.z = Math.PI / 2;
        browBar.position.set(0, 0.55, 0);
        glassesGroup.add(browBar);

        // 4. Temples / Arms
        const armGeo = new THREE.BoxGeometry(0.04, 0.04, 2.2);
        const leftArm = new THREE.Mesh(armGeo, this.goldMat);
        leftArm.position.set(-1.7, 0.25, -1.05);
        leftArm.rotation.y = 0.12;
        glassesGroup.add(leftArm);

        const rightArm = new THREE.Mesh(armGeo, this.goldMat);
        rightArm.position.set(1.7, 0.25, -1.05);
        rightArm.rotation.y = -0.12;
        glassesGroup.add(rightArm);

        glassesGroup.visible = false;
        this.scene.add(glassesGroup);
        this.models['glasses'] = glassesGroup;
    }

    createFloatingSparks() {
        const count = 75;
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 6;
            positions[i + 1] = (Math.random() - 0.5) * 5;
            positions[i + 2] = (Math.random() - 0.5) * 4;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const mat = new THREE.PointsMaterial({
            color: 0xffdf88,
            size: 0.06,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending
        });

        this.sparks = new THREE.Points(geom, mat);
        this.scene.add(this.sparks);
    }

    switchModel(type) {
        if (!this.models[type]) return;

        this.currentModelType = type;
        Object.keys(this.models).forEach(key => {
            if (this.models[key]) {
                this.models[key].visible = (key === type);
            }
        });

        // Dynamic transition effect
        const activeObj = this.models[type];
        if (activeObj) {
            activeObj.scale.set(0.01, 0.01, 0.01);
            if (typeof gsap !== 'undefined') {
                gsap.to(activeObj.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.65,
                    ease: 'back.out(1.5)'
                });
            } else {
                activeObj.scale.set(1, 1, 1);
            }
        }
    }

    toggleAutoRotate() {
        this.autoRotate = !this.autoRotate;
        if (this.controls) {
            this.controls.autoRotate = this.autoRotate;
        }
    }

    resetCamera() {
        if (this.controls) {
            this.controls.reset();
        }
        this.camera.position.set(0, 0, 5);
    }

    onWindowResize() {
        if (!this.container) return;
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.controls) {
            this.controls.update();
        } else if (this.autoRotate && this.models[this.currentModelType]) {
            this.models[this.currentModelType].rotation.y += 0.012;
        }

        // Sparkle float
        if (this.sparks) {
            this.sparks.rotation.y += 0.002;
            this.sparks.rotation.x += 0.001;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Global Instances
let heroStudio = null;
let fullStudio = null;

// ===================================================================
// 5. EVENT LISTENERS & INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Render
    renderCatalogue('all');
    updateCartUI();

    // 2. Initialize 3D Studios
    heroStudio = new Accessory3DStudio('hero3DCanvasContainer', true);
    fullStudio = new Accessory3DStudio('fullStudioCanvasContainer', false);

    // 3. Hero Switcher Buttons
    const heroButtons = document.querySelectorAll('.switcher-btn');
    const heroLabel = document.getElementById('activeModelLabel');

    const modelLabels = {
        necklace: 'Pendentif Cœur Or 18K',
        watch: 'Montre Royale Chronographe',
        glasses: 'Lunettes Aviator Gold UV400'
    };

    heroButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            heroButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const model = btn.dataset.model;
            if (heroStudio) heroStudio.switchModel(model);
            if (heroLabel) heroLabel.textContent = modelLabels[model] || '';
        });
    });

    // 4. Studio Switcher Buttons
    const studioButtons = document.querySelectorAll('.studio-select-btn');
    const modelPrices = {
        necklace: '249 DH',
        watch: '399 DH',
        glasses: '299 DH'
    };
    const priceTag = document.getElementById('modelPriceTag');

    studioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            studioButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const model = btn.dataset.studio;
            if (fullStudio) fullStudio.switchModel(model);
            if (priceTag) priceTag.textContent = modelPrices[model] || '299 DH';
        });
    });

    // Studio Tools
    const toggleRotateBtn = document.getElementById('toggleAutoRotateBtn');
    if (toggleRotateBtn) {
        toggleRotateBtn.addEventListener('click', () => {
            if (fullStudio) fullStudio.toggleAutoRotate();
        });
    }

    const resetCamBtn = document.getElementById('reset3DCameraBtn');
    if (resetCamBtn) {
        resetCamBtn.addEventListener('click', () => {
            if (fullStudio) fullStudio.resetCamera();
        });
    }

    const order3DBtn = document.getElementById('order3DModelBtn');
    if (order3DBtn) {
        order3DBtn.addEventListener('click', () => {
            const current = fullStudio ? fullStudio.currentModelType : 'necklace';
            const targetId = current === 'necklace' ? 'snassel-1' : current === 'watch' ? 'maganat-1' : 'ndader-1';
            addToCart(targetId);
            openCartDrawer();
        });
    }

    // 5. Cart Drawer Toggles
    const cartOpenBtn = document.getElementById('cartOpenBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartOverlay = document.getElementById('cartOverlay');

    function openCartDrawer() {
        if (cartOverlay) cartOverlay.classList.add('open');
    }
    function closeCartDrawer() {
        if (cartOverlay) cartOverlay.classList.remove('open');
    }

    if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) closeCartDrawer();
        });
    }

    // 6. Checkout Modal Toggles
    const checkoutModal = document.getElementById('checkoutModal');
    const openCheckoutModalBtn = document.getElementById('openCheckoutModalBtn');
    const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');

    function openCheckout() {
        if (cart.length === 0) {
            showToast('Panier vide', 'Veuillez ajouter au moins un produit avant de commander.');
            return;
        }
        closeCartDrawer();
        if (checkoutModal) checkoutModal.classList.add('open');
    }
    function closeCheckout() {
        if (checkoutModal) checkoutModal.classList.remove('open');
    }

    if (openCheckoutModalBtn) openCheckoutModalBtn.addEventListener('click', openCheckout);
    if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener('click', closeCheckout);

    // 7. WhatsApp Cart Order Button
    const orderViaWhatsAppBtn = document.getElementById('orderViaWhatsAppBtn');
    if (orderViaWhatsAppBtn) {
        orderViaWhatsAppBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Panier vide', 'Votre panier est vide.');
                return;
            }
            const itemsText = cart.map(i => `- ${i.title} (x${i.quantity}) : ${i.price * i.quantity} DH`).join('\n');
            const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
            const msg = `Salam Youness Accessoires! 👑\nBghit ncommander had les articles:\n\n${itemsText}\n\n*Total: ${total} DH*\nLivraison partout au Maroc (Paiement à la livraison).`;
            window.open(`https://wa.me/212600000000?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }

    // 8. Order Submission
    const orderForm = document.getElementById('orderForm');
    const orderSuccessModal = document.getElementById('orderSuccessModal');
    const successHomeBtn = document.getElementById('successHomeBtn');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clientName').value;
            const phone = document.getElementById('clientPhone').value;
            const city = document.getElementById('clientCity').value;
            const address = document.getElementById('clientAddress').value;

            const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
            const orderRef = `#YN-${Math.floor(1000 + Math.random() * 9000)}`;

            document.getElementById('successOrderRef').textContent = orderRef;
            document.getElementById('successOrderRecap').innerHTML = `
                <p><strong>Client :</strong> ${name}</p>
                <p><strong>Téléphone :</strong> ${phone}</p>
                <p><strong>Ville & Adresse :</strong> ${city}, ${address}</p>
                <p><strong>Articles :</strong> ${cart.length} référence(s)</p>
                <p><strong>Total à payer à la livraison :</strong> <span style="color:#d4af37; font-weight:700;">${total} DH</span></p>
            `;

            // Confetti
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#d4af37', '#ffffff', '#ff3366', '#f5e297']
                });
            }

            // Reset & Open Confirmation
            closeCheckout();
            cart = [];
            saveCart();
            if (orderSuccessModal) orderSuccessModal.classList.add('open');
        });
    }

    if (successHomeBtn) {
        successHomeBtn.addEventListener('click', () => {
            if (orderSuccessModal) orderSuccessModal.classList.remove('open');
        });
    }

    // 9. Filter Tabs Event Listeners
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            renderCatalogue(filter);
        });
    });
});
