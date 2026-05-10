

export const PRESET_GROUPS = [
        {
          id: "themes",
          label: "Quick Themes",
          presets: [
            {
              id: "ghibli", icon: "🌿", name: "Studio Ghibli", sub: "#1 — Cozy slice-of-life, nature wonder",
              values: {
                artStyle: ["Studio Ghibli / Hayao Miyazaki"],
                visualStyle: ["Soft watercolor, pastel tones, hand-painted backgrounds, subtle texture grain"],
                mood: ["Cozy, peaceful, contemplative — soft pastels, warm amber, muted greens, dusty rose, cream white"],
                settingType: ["Nature, countryside, seasons, cottages, gardens", "Forest, ancient woods, ruins", "Coastal, ocean, fishing villages, cliffs"],
                toneThemes: ["Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life", "Gentle human connection, quiet friendship", "Wonder and curiosity, exploration of the unknown", "Environmental, nature vs industry"],
                characterStyle: ["Rounded features, expressive eyes, soft clothing, warm color palettes"],
                cameraStyle: ["Cinematic, subtle movements, drone opening shots — subtle pan, dolly, tilt"],
                composition: ["Wide shot", "Close-up", "Over-the-shoulder", "POV", "Foreground framing"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["heavy rain on glass", "pouring rain on rooftops", "crackling fire close-up", "kettle whistle", "heavy footsteps on wooden floor", "rustling dry leaves underfoot", "birds calling overhead", "clock ticking", "pages turning", "wind howling through trees", "sizzling pan on stove", "boiling water bubbling", "rain drumming on umbrella", "bamboo wind chimes", "river rushing over stones", "cat purring", "tea being poured", "fire pit popping", "wind through tall grass", "crickets at midnight", "spoon stirring ceramic bowl", "tide washing over sand", "snow crunching underfoot", "waterfall mist", "cicadas in summer heat"],
                envMotion: ["Wind", "Rain", "Rustling leaves", "Steam", "Crackling fire", "Petals falling", "Snow falling"],
                camOpenFull: "slow drone descent from high aerial through tree canopy to gentle eye level",
              }
            },
            {
              id: "pixar", icon: "✨", name: "Pixar 3D", sub: "#2 — Heartfelt, cinematic, family epic",
              values: {
                artStyle: ["Pixar 3D / RenderMan"],
                visualStyle: ["Volumetric 3D rendering, subsurface scattering, physically-based materials, cinematic depth of field"],
                mood: ["Joyful, heartwarming — bright saturated primaries, warm golden-hour amber, rich sky blues, clean whites"],
                settingType: ["Suburban neighbourhood, quiet streets", "Fantasy world, floating islands, magic ruins", "Nature, countryside, seasons, cottages, gardens", "Urban cityscape, neon streets, rooftops", "Underwater, ocean depths, coral reefs, bioluminescent sea"],
                toneThemes: ["Redemption, forgiveness, second chances", "Technology vs humanity, AI consciousness", "Mentor and protégé, passing down wisdom", "Environmental collapse, rewilding, ecological hope", "Community, belonging, found family", "Friendship and loyalty tested by adversity"],
                characterStyle: ["Stylised proportions, large expressive eyes, highly emotive face rigs, appealing silhouette"],
                cameraStyle: ["Cinematic 3D camera, motivated moves, rack focus, hero close-ups"],
                composition: ["Wide shot", "Close-up", "Two-shot", "Low angle hero shot", "Bird's eye / top-down", "Foreground framing", "Insert / detail shot"],
                soundDesign: ["Epic orchestral score, minimal ambient"],
                soundExamples: ["wind through tall grass", "ocean waves on pebble beach", "birds calling overhead", "rain hitting pond surface", "crackling fire close-up", "heavy footsteps on wooden floor", "door creaking open", "clock ticking", "pages turning", "crowd murmur in marketplace", "kettle whistle", "sizzling pan on stove", "river rushing over stones", "snow crunching underfoot", "waterfall mist", "bubbles rising through water", "tide washing over sand", "cicadas in summer heat", "cat purring", "distant train whistle", "fire pit popping", "bamboo wind chimes", "tea being poured", "spoon stirring ceramic bowl", "wind howling through trees"],
                envMotion: ["Wind", "Rain", "Floating particles", "Rippling water", "Snow falling", "Steam", "Petals falling", "Bubbles rising through water"],
                camOpenFull: "sweeping cinematic crane shot rising from ground level to reveal the full world",
              }
            },
            {
              id: "disney2d", icon: "🏰", name: "Disney Renaissance", sub: "#3 — Fairytale, sweeping musical grandeur",
              values: {
                artStyle: ["Disney Renaissance"],
                visualStyle: ["Lush hand-drawn linework, rich saturated gouache, soft airbrush gradients, storybook grandeur"],
                mood: ["Majestic wonder — royal purple, golden sunrise, deep forest emerald, warm ivory, rose blush, sky cobalt"],
                settingType: ["Fantasy world, floating islands, magic ruins", "Nature, countryside, seasons, cottages, gardens", "Mountain, highland, misty peaks", "Coastal, ocean, fishing villages, cliffs", "Village square, cobblestone lanes, market cross", "Forest, ancient woods, ruins"],
                toneThemes: ["Epic quest, heroism, sacrifice", "Romance, longing, separation and reunion", "Personal quest, inner growth, ancient legend and lore", "Cultural heritage, folklore, tradition vs modernity", "War and its aftermath, trauma, reconciliation", "Coming of age, self-discovery, personal growth"],
                characterStyle: ["Royalty and nobility, elaborate period costume, regal bearing"],
                cameraStyle: ["Sweeping theatrical arcs, magical reveal crane swoop"],
                composition: ["Wide shot", "Low angle hero shot", "Two-shot", "Symmetrical / centred", "Foreground framing", "Close-up", "Silhouette"],
                soundDesign: ["Epic orchestral score + choir swells, full soundscape"],
                soundExamples: ["wind through tall grass", "birds calling overhead", "ocean waves on pebble beach", "river rushing over stones", "crackling fire close-up", "waterfall mist", "snow crunching underfoot", "rain hitting pond surface", "flower petals on water", "distant church bells", "crowd murmur in marketplace", "horse hooves on cobblestone", "clock ticking", "wind howling through trees", "fire pit popping", "tide washing over sand", "cicadas in summer heat", "heavy footsteps on wooden floor", "door creaking open", "pages turning"],
                envMotion: ["Petals falling", "Snow falling", "Wind", "Floating particles", "Rippling water", "Fog drifting", "Aurora borealis shimmer"],
                camOpenFull: "grand theatrical crane swoop over enchanted kingdom at golden dawn revealing the world",
              }
            },
            {
              id: "spiderverse", icon: "🕷️", name: "Spider-Verse", sub: "#4 — Bold graphic punch, halftone, kinetic energy",
              values: {
                artStyle: ["Spider-Verse / Comic Pop Art"],
                visualStyle: ["Retro halftone Ben-Day dots, vintage risograph colour split, hand-drawn comic linework, chromatic aberration, ink splatter textures, motion blur speed lines, multi-frame stutter animation"],
                mood: ["Electrifying — vivid magenta, neon yellow, electric blue, deep black, hot orange, acid green, stark white"],
                settingType: ["Urban cityscape, neon streets, rooftops", "Underground, caves, labyrinthine tunnels", "Industrial zones, abandoned warehouses, factories", "Futuristic city, space stations, neon megastructures"],
                toneThemes: ["Coming of age, self-discovery, personal growth", "Epic quest, heroism, sacrifice", "Identity, belonging, finding your place", "Friendship and loyalty tested by adversity", "Survival, resilience, hope in darkness"],
                characterStyle: ["Superhero dynamic proportions, expressive silhouette, graphic costume design"],
                cameraStyle: ["Comic panel snap-cut, freeze-frame pose hold, kinetic speed-line push, multi-frame stutter zoom"],
                composition: ["Dutch angle", "Low angle hero shot", "Extreme close-up", "Wide shot", "Worm's eye view", "Multi-panel split screen", "Insert / detail shot"],
                soundDesign: ["Hip-hop beats, vinyl scratches, diegetic sound punches"],
                soundExamples: ["electric sparks crackling", "glass shattering in slow motion", "subway train rushing by", "metal door slamming", "heartbeat pulse", "gravel crunching underfoot", "crowd murmur in marketplace", "distant explosion rumble", "wind howling through trees", "thunder rolling in distance", "rain drumming on umbrella", "heavy footsteps on wooden floor", "car tires screeching", "chain dragging on concrete", "breath fogging cold air", "gunshot echo in tunnel", "mechanical gears grinding", "door creaking open", "distant police siren", "briefcase latch clicking"],
                envMotion: ["Rain", "Lightning flash", "Floating debris in zero gravity", "Smoke curling", "Dust particles in light", "Fog drifting"],
                camOpenFull: "rapid crash zoom from extreme aerial dropping into neon-soaked street level chaos with halftone ink splatter transition",
              }
            },
            {
              id: "demonslayer", icon: "🔥", name: "Demon Slayer / Ufotable", sub: "#5 — Flame & water spectacle, visual drama peak",
              values: {
                artStyle: ["Demon Slayer / Ufotable"],
                visualStyle: ["Hybrid traditional anime linework with real-time CGI rendering, luminous flame and water breath effects, dramatic rim lighting, rich saturated colour with deep ink blacks, intricate pattern overlays on technique sequences"],
                mood: ["Dramatic, visceral, awe-inspiring — deep indigo night, blazing flame orange, electric crimson, pure white aura glow, smoke grey, sakura pink"],
                settingType: ["Mountain, highland, misty peaks", "Forest, ancient woods, ruins", "Futuristic city, space stations, neon megastructures", "Underground, caves, labyrinthine tunnels", "Coastal, ocean, fishing villages, cliffs"],
                toneThemes: ["Epic quest, heroism, sacrifice", "Grief, loss, healing over time", "Friendship and loyalty tested by adversity", "Survival, resilience, hope in darkness", "Coming of age, self-discovery, personal growth", "Cultural heritage, folklore, tradition vs modernity"],
                characterStyle: ["Taisho-era Japanese costume, flowing haori, dynamic combat poses, intense expressive eyes, elemental aura effects surrounding body"],
                cameraStyle: ["Explosive whip-pan tracking shot, extreme slow-motion freeze on technique peak, dynamic spiral orbit around subject"],
                composition: ["Wide shot", "Low angle hero shot", "Extreme close-up", "Dutch angle", "Silhouette", "Insert / detail shot", "Worm's eye view"],
                soundDesign: ["Hybrid orchestral-taiko score — traditional Japanese instruments fused with epic cinematic percussion and elemental SFX"],
                soundExamples: ["wind howling through trees", "crackling fire close-up", "fire pit popping", "thunder rolling in distance", "rain hitting pond surface", "water dripping from roof", "river rushing over stones", "heavy footsteps on wooden floor", "distant explosion rumble", "snow crunching underfoot", "ocean waves on pebble beach", "birds calling overhead", "mountain wind gusting", "waterfall mist", "logs splitting", "breath fogging cold air", "ice cracking on frozen lake", "wind through tall grass", "tide washing over sand", "gravel crunching underfoot"],
                envMotion: ["Flame and fire effects", "Wind", "Rain", "Smoke curling", "Floating particles", "Snow falling", "Fog drifting"],
                camOpenFull: "sweeping low-angle crane rising from ground through swirling flame and smoke to reveal a lone demon slayer silhouetted against a vast night sky",
              }
            },
            {
              id: "shinkai", icon: "🌌", name: "Makoto Shinkai", sub: "#6 — Hyper-real skies, emotional distance",
              values: {
                artStyle: ["Makoto Shinkai / CoMix Wave"],
                visualStyle: ["Dreamy soft-focus, bloom light, lens flares, golden bokeh, hyper-detailed atmospheric haze"],
                mood: ["Melancholic, bittersweet — deep cerulean, muted purple, silver grey, pale gold"],
                settingType: ["Urban cityscape, neon streets, rooftops", "Suburban neighbourhood, quiet streets", "Nature, countryside, seasons, cottages, gardens", "Mountain, highland, misty peaks", "Coastal, ocean, fishing villages, cliffs"],
                toneThemes: ["Romance, longing, separation and reunion", "Coming of age, self-discovery, personal growth", "Grief, loss, healing over time", "Wonder and curiosity, exploration of the unknown", "Solitude and self-sufficiency, quiet independence"],
                characterStyle: ["Slender proportions, soft expressive eyes, delicate gestures, modern casual or period romantic wear"],
                cameraStyle: ["Rack focus, shallow depth of field, bokeh, slow push-in"],
                composition: ["Wide shot", "Close-up", "Silhouette", "Over-the-shoulder", "Insert / detail shot", "Foreground framing"],
                soundDesign: ["Ambient soundtrack + subtle ASMR layers"],
                soundExamples: ["rain hitting pond surface", "pouring rain on rooftops", "water dripping from roof", "clock ticking", "pages turning", "pencil scratching on paper", "distant church bells", "wind howling through trees", "birds calling overhead", "kettle whistle", "door creaking open", "bamboo wind chimes", "river rushing over stones", "insects humming at night", "fireflies blinking at dusk", "vinyl record crackle", "coffee shop murmur", "train window rain drops", "piano key soft press", "breath on cold glass", "letter paper folding", "footsteps on wet pavement", "carousel music box", "flower petals on water", "wind through curtain lace"],
                envMotion: ["Rain", "Petals falling", "Fog drifting", "Floating particles", "Rippling water", "Fireflies blinking", "Pollen drifting in sunlight"],
                camOpenFull: "slow low-angle push in toward lone figure silhouetted against vast glowing sky",
              }
            },
            {
              id: "dreamworks", icon: "🐉", name: "DreamWorks Animation", sub: "#7 — Epic adventure, dragon skies, emotional scale",
              values: {
                artStyle: ["DreamWorks Animation"],
                visualStyle: ["Cinematic 3D rendering, dramatic volumetric lighting, sweeping atmospheric depth, rich textured environments, physically-based materials with painterly colour grading"],
                mood: ["Epic, adventurous — rich golds, deep crimson, storm grey, ocean teal, warm amber firelight, vast sky blue"],
                settingType: ["Mountain, highland, misty peaks", "Coastal, ocean, fishing villages, cliffs", "Fantasy world, floating islands, magic ruins", "Nature, countryside, seasons, cottages, gardens", "Forest, ancient woods, ruins"],
                toneThemes: ["Epic quest, heroism, sacrifice", "Friendship and loyalty tested by adversity", "Coming of age, self-discovery, personal growth", "Wonder and curiosity, exploration of the unknown", "Community, belonging, found family", "Environmental, nature vs industry"],
                characterStyle: ["Expressive 3D faces, strong silhouettes, practical adventure clothing, dynamic heroic poses"],
                cameraStyle: ["Sweeping epic drone pull-back, low tracking shot following hero movement, wide establishing reveal"],
                composition: ["Wide shot", "Low angle hero shot", "Bird's eye / top-down", "Silhouette", "Two-shot", "Foreground framing", "Insert / detail shot"],
                soundDesign: ["Adventure orchestral score — brass-led, percussive, nature-grounded with soaring strings"],
                soundExamples: ["wind howling through trees", "ocean waves on pebble beach", "thunder rolling in distance", "rain hitting pond surface", "crackling fire close-up", "fire pit popping", "waterfall mist", "river rushing over stones", "snow crunching underfoot", "birds calling overhead", "tide washing over sand", "heavy footsteps on wooden floor", "distant explosion rumble", "wind through tall grass", "ice cracking on frozen lake", "crowd murmur in marketplace", "logs splitting", "water dripping from roof", "mountain wind gusting", "gravel crunching underfoot"],
                envMotion: ["Wind", "Rain", "Fog drifting", "Snow falling", "Floating particles", "Rippling water", "Aurora borealis shimmer"],
                camOpenFull: "sweeping epic drone pull-back from lone hero on a cliff edge revealing a vast dramatic landscape at golden hour",
              }
            },
            {
              id: "lofi", icon: "☕", name: "Lo-fi & Chill", sub: "#8 — Rain on glass, desk lamp, cozy forever",
              values: {
                artStyle: ["Retro 80s Anime"],
                visualStyle: ["Grainy 16mm film texture, muted desaturated tones, soft vignette, warm desk-lamp glow, rain-streaked window glass, gentle chromatic drift"],
                mood: ["Melancholic, bittersweet — deep cerulean, muted purple, silver grey, pale gold, warm amber lamplight, rain-blue shadow"],
                settingType: ["Suburban neighbourhood, quiet streets", "Urban cityscape, neon streets, rooftops", "Cozy indoor kitchen, wood-fired hearths", "Museum, library, ancient archive", "Train journey, locomotive, scenic rail route"],
                toneThemes: ["Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life", "Solitude and self-sufficiency, quiet independence", "Simple pleasures, mindfulness, slow living", "Artistic creation, the struggle and joy of making", "Grief, loss, healing over time"],
                characterStyle: ["Everyday contemporary, normcore wardrobe, relatable proportions"],
                cameraStyle: ["Static wide shots, painterly tableau, minimal movement"],
                composition: ["Wide shot", "Close-up", "Insert / detail shot", "Foreground framing", "Rule of thirds", "Negative space dominant, subject isolated"],
                soundDesign: ["Lo-fi beats, gentle background music"],
                soundExamples: ["vinyl record crackle", "coffee shop murmur", "rain hitting pond surface", "pouring rain on rooftops", "train window rain drops", "piano key soft press", "clock ticking", "pages turning", "pencil scratching on paper", "wind through curtain lace", "kettle whistle", "cat purring", "distant train whistle", "bamboo wind chimes", "breath on cold glass", "letter paper folding", "footsteps on wet pavement", "birds calling overhead", "insects humming at night", "water dripping from roof"],
                envMotion: ["Rain", "Fog drifting", "Steam", "Candle flame flickering", "Petals falling", "Floating particles", "Rippling water"],
                camOpenFull: "slow static push into a warmly lit window at night with rain streaking the glass, desk lamp glow bleeding into the dark",
              }
            },
            {
              id: "cookingasmr", icon: "🍳", name: "Cooking ASMR", sub: "#9 — Sizzle, steam, chop — no words needed",
              values: {
                artStyle: ["Oil Painting Classical"],
                visualStyle: ["Warm kitchen lighting, steam wisps, extreme close-up food detail, hand-painted ingredients, mouthwatering macro, soft watercolor texture on surfaces"],
                mood: ["Sensory warmth — golden butter yellow, terracotta clay, fresh herb green, cream white, aged oak brown, saffron spice"],
                settingType: ["Cozy indoor kitchen, wood-fired hearths", "Market towns, local food markets, small shops", "Coastal, ocean, fishing villages — fresh catch", "Nature, countryside — farm to table, herb gardens", "Rooftop terrace dining, candlelit restaurant"],
                toneThemes: ["Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life", "Cultural heritage, folklore, traditional recipes", "Community, belonging, shared meals, found family", "Simple pleasures, mindfulness, slow living", "Generational recipes, grandmother wisdom, memory and food"],
                characterStyle: ["Warm, expressive hands — flour-dusted, aged knuckles, gentle grip"],
                cameraStyle: ["Extreme close-up food cinematography, slow macro push-in, top-down flat-lay"],
                composition: ["Close-up", "Insert / detail shot", "Bird's eye / top-down", "Wide shot", "Extreme close-up", "Foreground framing", "Over-the-shoulder"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["sizzling pan on stove", "boiling water bubbling", "knife chopping on wooden board", "oil splattering in wok", "mortar and pestle grinding", "bread tearing apart", "crispy skin crackle", "egg cracking on bowl rim", "batter poured into pan", "garlic hitting hot oil", "steam releasing from pot", "wooden spoon scraping pan", "vegetables in colander rinse", "ceramic bowl clinking", "salt pinch dropping", "spice jar shaken", "grater on cheese block", "rice pouring into pot", "pressure cooker whistle", "ladle scooping curry", "roti on iron griddle", "seeds popping in oil", "hot tea poured into cup", "fresh herbs torn by hand", "spoon stirring ceramic bowl"],
                envMotion: ["Steam", "Smoke curling", "Floating embers", "Dust particles in light", "Candle flame flickering", "Rippling water"],
                camOpenFull: "slow cinematic drone descent into a sunlit outdoor kitchen at dawn, steam rising from clay pots, golden light on spices",
              }
            },
            {
              id: "cartoonsaloon", icon: "🍀", name: "Cartoon Saloon", sub: "#10 — Flat geometric, folk art, epic heart",
              values: {
                artStyle: ["Cartoon Saloon / Irish Folklore"],
                visualStyle: ["Flat 2D geometric linework, intricate folk knotwork patterns, bold outlined shapes, rich jewel-tone gouache fills, hand-crafted texture, luminous illuminated manuscript detail"],
                mood: ["Mythic, luminous, bittersweet — deep forest emerald, moonlit silver, saffron gold, twilight indigo, warm hearthfire amber, pale mist white"],
                settingType: ["Forest, ancient woods, ruins", "Coastal, ocean, fishing villages, cliffs", "Mountain, highland, misty peaks", "Nature, countryside, seasons, cottages, gardens", "Swamp, bayou, misty marshland"],
                toneThemes: ["Cultural heritage, folklore, tradition vs modernity", "Personal quest, inner growth, ancient legend and lore", "Epic quest, heroism, sacrifice", "Environmental, nature vs industry", "Coming of age, self-discovery, personal growth", "Wonder and curiosity, exploration of the unknown"],
                characterStyle: ["Flat geometric silhouettes, bold expressive eyes, traditional folk costume, fluid movement with stylised limb articulation"],
                cameraStyle: ["Slow ceremonial pan, nature-wide establishing, intimate folk close-up"],
                composition: ["Wide shot", "Silhouette", "Symmetrical / centred", "Foreground framing", "Close-up", "Bird's eye / top-down", "Insert / detail shot"],
                soundDesign: ["Folk acoustic guitar, fiddle, pastoral warmth"],
                soundExamples: ["wind howling through trees", "ocean waves on pebble beach", "river rushing over stones", "rain hitting pond surface", "crackling fire close-up", "fire pit popping", "birds calling overhead", "rustling dry leaves underfoot", "waterfall mist", "tide washing over sand", "distant church bells", "wind through tall grass", "snow crunching underfoot", "frogs croaking at dusk", "insects humming at night", "flower petals on water", "water dripping from roof", "logs splitting", "fog drifting over water", "crickets at midnight"],
                envMotion: ["Fog drifting", "Wind", "Petals falling", "Rustling leaves", "Rain", "Rippling water", "Floating particles"],
                camOpenFull: "slow ceremonial wide pan across a mist-draped ancient landscape at dawn, folk patterns emerging from the environment",
              }
            },
            {
              id: "inkwashzen", icon: "🎋", name: "Ink Wash", sub: "#11 — Brushstroke, silence, negative space",
              values: {
                artStyle: ["Ink Wash / Sumi-e"],
                visualStyle: ["Minimalist ink line, negative space, haiku composition, contemplative emptiness, brushstroke gesture, mist-washed distance, rice paper texture"],
                mood: ["Serene, minimalist — white space, stone grey, pale sage, ink black, rice paper ivory, mist silver"],
                settingType: ["Nature, countryside, seasons, cottages, gardens", "Mountain, highland, misty peaks", "Bamboo forest, Japanese garden, stone lantern path", "Wetlands, river delta, paddy fields, mangrove forest", "Coastal, ocean, fishing villages, cliffs"],
                toneThemes: ["Simple pleasures, mindfulness, slow living", "Solitude and self-sufficiency, quiet independence", "Personal quest, inner growth, ancient legend and lore", "Grief, loss, healing over time", "Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life"],
                characterStyle: ["Elderly, weathered, deeply expressive faces, wisdom in every line"],
                cameraStyle: ["Static wide shots, painterly tableau, minimal movement"],
                composition: ["Wide shot", "Negative space dominant, subject isolated", "Rule of thirds", "Silhouette", "Macro / micro detail", "Foreground framing"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["bamboo wind chimes", "river rushing over stones", "rain hitting pond surface", "wind through tall grass", "birds calling overhead", "cicadas in summer heat", "crackling fire close-up", "snow crunching underfoot", "frogs croaking at dusk", "tide washing over sand", "waterfall mist", "rustling dry leaves underfoot", "insects humming at night", "rain on banana leaves", "water dripping from roof", "wind howling through trees", "fire pit popping", "pages turning", "tea being poured", "spoon stirring ceramic bowl"],
                envMotion: ["Fog drifting", "Petals falling", "Rustling leaves", "Wind", "Rain", "Pollen drifting in sunlight", "Mist rising from valley at dawn", "Dandelion seeds floating"],
                camOpenFull: "achingly slow drone rise from still water surface into morning mist dissolving over a mountain ridge, ink wash bleeding into sky",
              }
            },
            {
              id: "filmnoir", icon: "🕵️", name: "Film Noir", sub: "#12 — Hard shadows, rain-slicked streets, detective tension",
              values: {
                artStyle: ["Film Noir / Neo-Noir"],
                visualStyle: ["High-contrast chiaroscuro, deep ink blacks, razor-edged shadows, venetian blind light slats, rain-slicked reflective streets, cigarette smoke haze, grainy monochrome with selective amber or crimson accent"],
                mood: ["Tense, brooding, morally ambiguous — charcoal black, slate grey, deep crimson, amber lamplight, fog white, wet asphalt"],
                settingType: ["City streets, downtown, urban nightlife, neon signs", "Rain, storm, wet streets, fog", "Office interior, rooftop, back alley, interrogation room"],
                toneThemes: ["Mystery, detective, crime investigation", "Moral ambiguity, corruption, hidden truth", "Betrayal, deception, double cross", "Danger, tension, paranoia"],
                characterStyle: ["Sharp angular features, trench coats, fedoras, deep-set eyes, hardboiled expression, cigarette, femme fatale silhouette"],
                cameraStyle: ["Dutch angle, low angle, extreme close-up — tension, paranoia, power imbalance"],
                composition: ["Low angle", "Silhouette", "Close-up", "Dutch angle / canted frame", "Shadow foreground, subject mid-ground", "Reflection in puddle or glass"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["rain hammering on window glass", "distant police siren", "footsteps on wet cobblestone", "lighter flick and cigarette drag", "creaking floorboard", "typewriter keys", "phone ringing in empty office", "thunder rumble", "door hinge creak", "glass smashing", "muffled gunshot", "rain on car roof", "dripping tap in silence", "ventilation fan hum", "newspaper rustling", "venetian blind tap in wind", "ice in glass", "revolver cylinder spin", "heels on marble floor", "radio static"],
                envMotion: ["Rain", "Fog drifting", "Cigarette smoke curling", "Venetian blind shadow sweep", "Neon sign flicker"],
                camOpenFull: "slow drone descent through heavy rain into a rain-slicked empty street, amber lamplight pooling on wet asphalt, fog swallowing distant buildings",
              }
            },
            {
              id: "tamilnadu", icon: "🌺", name: "Tamil Nadu", sub: "#13 — Everyday South Indian life, warm terracotta, jasmine light",
              values: {
                artStyle: ["Tamil Nadu Contemporary / Everyday South Indian"],
                visualStyle: ["Warm terracotta and jasmine-yellow palette, hand-painted texture, soft diffused afternoon light, hand-painted geometric borders, cotton-fabric grain, ochre wall wash, recognisably South Indian visual grammar without classical or devotional styling"],
                mood: ["Warm, grounded, familiar — terracotta red, jasmine yellow, neem green, coconut white, turmeric gold, evening sky orange"],
                settingType: [
                  "Tamil Nadu village house, tiled roof, thinnai pyol, courtyard",
                  "Tea kadai, filter coffee counter, steel tumbler, wooden bench",
                  "Government school, chalk-dusted classroom, open playground",
                  "Neighbourhood park, iron swings, evening walkers",
                  "Marina beach, morning walkers, beach snack stalls",
                  "Auto stand, busy junction, bus stop, roadside stall"
                ],
                toneThemes: ["Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life", "Gentle human connection, quiet friendship", "Moral lesson, consequence and redemption", "Community, belonging, found family", "Cultural heritage, folklore, tradition vs modernity"],
                characterStyle: ["Tamil everyday — cotton saree with printed border, jasmine braid, steel vessel"],
                cameraStyle: ["Handheld, shaky, intimate, documentary feel"],
                composition: ["Wide shot", "Close-up", "Over-the-shoulder", "POV", "Foreground framing"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["filter coffee pouring into steel tumbler", "pressure cooker whistle", "chalk on stone path", "jasmine flowers dropped in basket", "coconut shell scraping", "autorickshaw horn", "rain on terracotta roof tiles", "children playing in school yard", "market vendor calling out prices", "ceiling fan hum", "mixie grinding in kitchen", "steel vessels clanging", "bus door clatter", "crow cawing on rooftop", "banana leaf rustle", "well rope and pulley creak", "bicycle bell", "rain on dry earth", "broom sweeping stone path", "tea being poured into steel tumbler"],
                envMotion: ["Heat haze shimmer", "Ceiling fan rotation", "Jasmine petals falling", "Dust in afternoon light", "Rain on dry earth", "Banana leaf sway in breeze"],
                camOpenFull: "slow drone descent from above rooftop water tanks across a quiet Tamil Nadu street at golden hour, geometric doorstep patterns catching the light as the camera settles at eye level",
              }
            },
            {
              id: "storybook", icon: "📖", name: "Storybook", sub: "#14 — Watercolor warmth, fairy tales, children & fables",
              values: {
                artStyle: ["Watercolor Illustration"],
                visualStyle: ["Soft translucent watercolor washes, hand-painted texture, ink-line outlines, warm ivory paper grain, gentle bloom light, storybook border framing, hand-lettered scene titles, pressed-flower decorative detail"],
                mood: ["Warm, wonder-filled, safe — honey gold, blush rose, sage green, sky blue, cream ivory, soft lavender"],
                settingType: ["Nature, countryside, seasons, cottages, gardens", "Forest, ancient woods, ruins", "Fantasy world, floating islands, magic ruins", "Cozy indoor kitchen, wood-fired hearths", "Market towns, local festivals, small shops", "Coastal, ocean, fishing villages, cliffs"],
                toneThemes: ["Wonder and curiosity, exploration of the unknown", "Redemption, forgiveness, second chances", "Coming of age, self-discovery, personal growth", "Gentle human connection, quiet friendship", "Friendship and loyalty tested by adversity"],
                characterStyle: ["Children, wide-eyed, curious, playful postures, oversized props"],
                cameraStyle: ["Slow horizontal pan across painted background"],
                composition: ["Wide shot", "Close-up", "Foreground framing", "Over-the-shoulder", "POV"],
                soundDesign: ["ASMR only, no music"],
                soundExamples: ["pages turning slowly", "quill on parchment", "crackling fireplace", "wind through cottage window", "rain on thatched roof", "birds at dawn", "soft footsteps on grass", "kettle whistle", "door creak on old hinge", "owl hooting at dusk", "rustling leaves underfoot", "river over smooth stones", "children laughing outside", "bees in a meadow", "clock ticking on mantle", "bread baking aroma implied by sizzle", "candle flame flicker", "wooden toys on floor", "cat purring in lap", "snow falling on silence"],
                envMotion: ["Petals falling", "Leaves rustling", "Candle flame flicker", "Snow falling", "Smoke curling from chimney", "Butterflies drifting", "Rain on window"],
                camOpenFull: "slow gentle drone drift over a sunlit meadow toward a cozy cottage with smoke rising from the chimney, watercolor light painting every blade of grass",
              }
            },
            {
              id: "moralfable", icon: "🌱", name: "Moral Fable", sub: "#15 — Warm illustrated parable, consequence & heart",
              values: {
                artStyle: ["Vintage European Storybook"],
                visualStyle: ["Warm gouache illustration, visible brushwork, rich earthy palette, soft ink outlines, textured paper grain, hand-painted backgrounds with decorative folk motifs, gentle golden-hour light on every scene"],
                mood: ["Warm, grounded, earnest — ochre yellow, burnt sienna, forest green, cream white, russet red, soft sky blue"],
                settingType: ["Village square, cobblestone lanes, market cross", "Nature, countryside, seasons, cottages, gardens", "Market towns, local festivals, small shops", "Forest, ancient woods, ruins", "Cozy indoor kitchen, wood-fired hearths"],
                toneThemes: ["Moral lesson, consequence and redemption", "Social class, inequality, quiet revolution", "Mentor and protégé, passing down wisdom", "Community, belonging, found family", "Redemption, forgiveness, second chances"],
                characterStyle: ["Caricature, exaggerated emotions, rubbery movement, squash-and-stretch"],
                cameraStyle: ["Tracking shot, long take, continuous follow"],
                composition: ["Wide shot", "Close-up", "Over-the-shoulder", "Foreground framing", "Insert / detail shot"],
                soundDesign: ["Folk acoustic guitar, fiddle, pastoral warmth"],
                soundExamples: ["pages turning slowly", "quill on parchment", "crackling fireplace", "birds at dawn", "wind through tall grass", "rustling dry leaves underfoot", "river rushing over stones", "children laughing outside", "bees in a meadow", "clock ticking on mantle", "kettle whistle", "door creak on old hinge", "soft footsteps on grass", "candle flame flicker", "rain on cottage roof", "distant church bells", "wooden cart on cobblestone", "market vendor calling out prices", "bread tearing apart", "owl hooting at dusk"],
                envMotion: ["Wind", "Leaves rustling", "Petals falling", "Candle flame flickering", "Butterflies drifting", "Rain on window", "Smoke curling from chimney"],
                camOpenFull: "slow wide push-in toward a sun-warmed village square at morning, villagers beginning their day, the camera settling gently on a single figure at the heart of the story",
              }
            },
            {
              id: "wisdomtale", icon: "🪔", name: "Wisdom & Proverbs", sub: "#16 — Dignified fable, ancient truth, contemplative warmth",
              values: {
                artStyle: ["Mughal Miniature Painting"],
                visualStyle: ["Richly detailed gouache on warm parchment, intricate decorative borders, jewel-tone palette with gold accent, flat perspective with expressive figure gesture, illuminated manuscript quality — each frame a painting in itself"],
                mood: ["Autumnal warmth — burnt sienna, golden ochre, deep forest, fog grey, aged parchment beige, jasmine white"],
                settingType: ["Skyscraper interiors, glass towers, boardrooms", "Forest, ancient woods, ruins", "Mountain, highland, misty peaks", "Market towns, local festivals, small shops", "Nature, countryside, seasons, cottages, gardens"],
                toneThemes: ["Personal quest, inner growth, ancient legend and lore", "Cultural heritage, folklore, tradition vs modernity", "Mentor and protégé, passing down wisdom", "Simple pleasures, mindfulness, slow living", "Redemption, forgiveness, second chances"],
                characterStyle: ["Royalty and nobility, elaborate period costume, regal bearing"],
                cameraStyle: ["Low-angle heroic, high-angle vulnerable, deliberate framing"],
                composition: ["Wide shot", "Close-up", "Symmetrical / centred", "Foreground framing", "Silhouette"],
                soundDesign: ["Epic orchestral score, classical strings and percussion"],
                soundExamples: ["strings swelling softly", "timpani roll fading", "wind through tall grass", "river rushing over stones", "birds calling overhead", "rain hitting pond surface", "pages turning", "crackling fire close-up", "broom sweeping stone path", "water in bronze vessel", "bamboo wind chimes", "soft footsteps on grass", "clock ticking", "rain on banana leaves", "insects humming at night", "tea being poured", "quill on parchment", "wind howling through trees", "dried leaves underfoot", "water dripping from roof"],
                envMotion: ["Petals falling", "Wind", "Fog drifting", "Floating particles", "Candle flame flickering", "Leaves rustling", "Mist rising from valley at dawn"],
                camOpenFull: "slow ceremonial crane rising from a sage seated beneath an ancient tree at golden dusk, the landscape opening wide behind as the first words of the story are spoken",
              }
            },
            {
              id: "classicdetective", icon: "🔎", name: "Classic Detective", sub: "#17 — Bright daylight mystery, Agatha Christie tension, sharp wit",
              values: {
                artStyle: ["Wes Anderson Diorama Aesthetic"],
                visualStyle: ["Clean warm-toned illustration, sharp ink outlines, rich interior detail — mahogany bookshelves, parlour wallpaper, garden hedges — soft natural window light, Edwardian colour palette with amber and forest green, clue objects rendered with exacting clarity"],
                mood: ["Romantic, nostalgic — warm peach, blush pink, vintage ivory, copper gold, twilight lavender, soft coral"],
                settingType: ["Village square, cobblestone lanes, market cross", "Museum, library, ancient archive", "Train journey, locomotive, scenic rail route", "Harbour, dockyard, tall ships, lighthouse", "Market towns, local festivals, small shops"],
                toneThemes: ["Mystery, hidden secrets, unravelling the past", "Community, belonging, found family", "Social class, inequality, quiet revolution", "Cultural heritage, folklore, tradition vs modernity"],
                characterStyle: ["Scholar / inventor, spectacles, ink-stained fingers, curious posture"],
                cameraStyle: ["Split-screen, parallel narrative, dual frame"],
                soundDesign: ["Jazz-inflected mood, late-night café atmosphere"],
                soundExamples: ["clock ticking in empty room", "pages turning", "quill on parchment", "typewriter clacking", "door creaking open", "footsteps on wooden stairs", "rain on cobblestone alley", "crackling fireplace", "distant church bells", "old radio static", "cup and saucer clinking", "briefcase latch clicking", "umbrella opening in rain", "footsteps on wet pavement", "window latch clicking shut", "newspaper rustling", "grandfather clock chime", "fire pit popping", "wind through curtain lace", "keys jangling"],
                envMotion: ["Fog drifting", "Rain", "Candle flame flickering", "Wind", "Leaves scattering", "Dust particles in light"],
                camOpenFull: "slow deliberate push-in across a quiet English village at grey morning, camera finding a single lit window where the detective is already thinking",
              }
            },
            {
              id: "indiancinema", icon: "🎭", name: "Indian Cinematic Anime", sub: "#18 — Bollywood grandeur meets anime craft, epic emotional scale",
              values: {
                artStyle: ["Indian Cinematic Anime"],
                visualStyle: ["Hybrid anime linework with Indian cinematic colour grading — rich jewel-tone saturation, deep shadow contrast, dynamic rim lighting, intricate costume embroidery detail, expressive face-acting close-ups, painterly sky backdrops, cinematic rain and slow-motion flower-petal transitions"],
                mood: ["Epic, adventurous — rich golds, deep crimson, forest green, ivory, burnt orange, peacock blue"],
                settingType: ["Mountain, highland, misty peaks", "Forest, ancient woods, ruins", "Coastal, ocean, fishing villages, cliffs", "Fantasy world, floating islands, magic ruins", "Nature, countryside, seasons, cottages, gardens", "Desert, arid plains, sand dunes, oasis"],
                toneThemes: ["Epic quest, heroism, sacrifice", "Cultural heritage, folklore, tradition vs modernity", "Romance, longing, separation and reunion", "Grief, loss, healing over time", "Coming of age, self-discovery, personal growth", "War and its aftermath, trauma, reconciliation"],
                characterStyle: ["Realistic proportions, detailed Kanchipuram silk costume and traditional jewellery"],
                cameraStyle: ["Slow orbit, dramatic reveals, epic scale"],
                composition: ["Wide shot", "Low angle hero shot", "Close-up", "Silhouette", "Foreground framing", "Two-shot", "Insert / detail shot"],
                soundDesign: ["Hybrid orchestral + electronic, cinematic trailer style"],
                soundExamples: ["dhol drum rhythms", "parai drum beats", "ankle bells clinking", "peacock calls at dawn", "rain on banana leaves", "ocean waves on pebble beach", "wind howling through trees", "crackling fire close-up", "fire pit popping", "waterfall mist", "thunder rolling in distance", "heavy footsteps on wooden floor", "flower petals on water", "sword drawn from scabbard", "crowd murmur in marketplace", "rain hitting pond surface", "birds calling overhead", "river rushing over stones", "jasmine flowers dropped in basket", "broom sweeping stone path", "horse hooves on cobblestone", "distant horn call"],
                envMotion: ["Petals falling", "Silk dupatta billowing in wind", "Flame and fire effects", "Rain", "Wind", "Fog drifting", "Floating particles", "Cherry blossom blizzard"],
                camOpenFull: "sweeping cinematic crane rising from a sunlit river valley at golden hour, silk banners caught in wind, camera soaring over a vast landscape of mountains, forest, and ancient ruins with petals raining from above",
              }
            }
          ]
        }
      ];

export const SECTIONS = [
        {
          id: 'style', label: 'Art & Visual Style', nav: 'Art & Visual Style', icon: '◦',
          desc: 'Choose the overall visual aesthetic and emotional palette.',
          fields: [
            {
              key: 'artStyle', label: 'Art Style', single: true, opts: [
                'Studio Ghibli / Hayao Miyazaki', 'Pixar 3D / RenderMan', 'Disney Renaissance', 'DreamWorks Animation',
                'Makoto Shinkai / CoMix Wave', 'Cartoon Saloon / Irish Folklore',
                'Kyoto Animation / KyoAni', 'Demon Slayer / Ufotable',
                'Spider-Verse / Comic Pop Art', 'Cozy Minimalist Loop Animation', 'Watercolor Illustration',
                'Ink Wash / Sumi-e', 'Retro 80s Anime', 'Vintage European Storybook',
                'Nausicaä / Post-Apocalyptic', '2D Vector / Flat Geometric',
                'Ukiyo-e Woodblock Print', 'Gothic Dark Fantasy',
                'Bande Dessinée / French Comics', 'Isometric Pixel Art',
                'Cut-paper / Collage Animation', 'Oil Painting Classical', 'Chalk Pastel Illustration',
                'Stop Motion / Claymation', 'Low-Poly 3D Geometric', 'Risograph Print / Zine',
                'Mughal Miniature Painting', 'Madhubani Folk Art', 'Warli Tribal Art',
                'Art Nouveau / Alphonse Mucha', 'Bauhaus Geometric', 'Memphis Design Pop',
                'Wes Anderson Diorama Aesthetic', 'Impressionist Oil / Monet', 'Expressionist Distorted',
                
                'Film Noir / Neo-Noir',
                'Tamil Nadu Contemporary / Everyday South Indian',
                'Storybook Watercolor / Hand-painted Illustration',
                'Bande Dessinée / Ligne Claire Comics',
                'Indian Cinematic Anime'
              ]
            },
            {
              key: 'visualStyle', label: 'Visual Style', single: true, opts: [
                'Soft watercolor, pastel tones, hand-painted backgrounds, subtle texture grain',
                'Volumetric 3D rendering, subsurface scattering, physically-based materials, cinematic depth of field',
                'Cinematic 3D rendering, dramatic volumetric lighting, sweeping atmospheric depth, rich textured environments, physically-based materials with painterly colour grading',
                'Bold ink outlines, flat cel shading, limited palette',
                'Flat 2D geometric linework, intricate folk knotwork patterns, bold outlined shapes, rich jewel-tone gouache fills, hand-crafted texture, luminous illuminated manuscript detail',
                'Painterly oil textures, rich warm shadows, intricate decorative detail, jewel-tone saturation',
                'Dreamy soft-focus, bloom light, lens flares, golden bokeh, hyper-detailed atmospheric haze',
                'Ultra-detailed backgrounds, soft diffused natural light, glass and water refraction, shallow depth of field, subtle lens bloom, precise linework with rich shadow gradients',
                'Hybrid traditional anime linework with real-time CGI rendering, luminous flame and water breath effects, dramatic rim lighting, rich saturated colour with deep ink blacks, intricate pattern overlays on technique sequences',
                'Retro halftone Ben-Day dots, vintage risograph colour split, hand-drawn comic linework, chromatic aberration, ink splatter textures, motion blur speed lines, multi-frame stutter animation',
                'Soft rounded 3D forms, pastel matte surfaces, smooth physics simulations, seamless looping motion, warm ambient occlusion',
                'Grainy film texture, muted desaturated tones, 16mm grain',
                'Vibrant neon, high-contrast geometry, chromatic aberration',
                'Loose expressive linework, textured paper, ink bleed',
                'Gouache matte, storybook flat colours, bold outlines',
                'Detailed realism, volumetric lighting, cinematic depth of field',
                'Dark moody chiaroscuro, high-contrast shadows, rain-slicked surfaces, neon rim-light',
                'Retro halftone, Ben-Day dots, vintage print grain, risograph colour split',
                'Impressionist brushwork, dappled light, visible brushstrokes, soft edges',
                'Warm kitchen lighting, steam wisps, extreme close-up food detail, mouthwatering macro',
                'Jewel-tone saturation, terracotta warmth, hand-inked outlines, geometric folk borders',
                'Warm terracotta and jasmine-yellow, soft afternoon light, hand-painted texture, ochre wall wash, cotton fabric grain, hand-painted geometric borders',
                'Soft translucent watercolor washes, hand-painted texture, ink-line outlines, warm ivory paper grain, gentle bloom light, storybook border framing',
                'Clean bold ink outlines, flat cel colours, Ben-Day dot texture accents, bright primary palette, dynamic speed-line panels, Hergé ligne claire precision',
                'Minimalist ink line, negative space, haiku composition, contemplative emptiness',
                'Lush hand-drawn linework, rich saturated gouache, soft airbrush gradients, storybook grandeur',
                'Holographic overlays, data-stream particles, neon grid, blueprint wireframe',
                'Stop-motion tactile texture, visible puppet joints, miniature set depth',
                'Geometric flat design, bold blocks of colour, Bauhaus precision',
                'Wes Anderson symmetry, pastel diorama, centred composition, retro props',
                'Mughal gold leaf, intricate border patterns, lapis lazuli, hand-illuminated manuscript',
                'Expressive distorted forms, raw emotional line, heavy impasto brushwork'
              ]
            },
            {
              key: 'mood', label: 'Mood & Color Palette', single: true, opts: [
                'Cozy, peaceful, contemplative — soft pastels, warm amber, muted greens, dusty rose, cream white',
                'Melancholic, bittersweet — deep cerulean, muted purple, silver grey, pale gold',
                'Melancholic yet tender — rain-washed grey-blue, warm interior amber, pale sakura pink, soft white overcast, deep evening indigo',
                'Epic, adventurous — rich golds, deep crimson, forest green, warm brown, saffron orange, peacock blue',
                'Epic, adventurous — rich golds, deep crimson, storm grey, ocean teal, warm amber firelight, vast sky blue',
                'Mysterious, ethereal — moonlit silver, cool indigo, misty teal, midnight black',
                'Mythic, luminous, bittersweet — deep forest emerald, moonlit silver, saffron gold, twilight indigo, warm hearthfire amber, pale mist white',
                'Joyful, heartwarming — bright saturated primaries, warm golden-hour amber, rich sky blues, clean whites',
                'Dark, tense — charcoal, blood red, storm grey, shadow black, toxic green, electric blue',
                'Dramatic, visceral, awe-inspiring — deep indigo night, blazing flame orange, electric crimson, pure white aura glow, smoke grey, sakura pink',
                'Romantic, nostalgic — warm peach, blush pink, vintage ivory, copper gold, twilight lavender, soft coral',
                'Playful, whimsical — candy pastels, rainbow accents, chalk white, sunshine yellow',
                'Serene, minimalist — white space, stone grey, pale sage, ink black, rice paper ivory',
                'Soft linen calm — off-white, dusty sage, blush clay, warm grey, cream ivory',
                'Surreal, dreamlike — shifting violet, deep ocean blue, glowing amber, void black, bioluminescent teal',
                'Autumnal warmth — burnt sienna, golden ochre, deep forest, fog grey, aged parchment beige, jasmine white',
                'Winter stillness — ice blue, silver birch, slate, soft white, frozen lavender',
                'Sensory warmth — golden butter yellow, terracotta clay, fresh herb green, cream white, aged oak brown',
                'Urban night — neon cyan, magenta, wet asphalt black, amber streetlight, rain-reflected neon',
                'Electrifying — vivid magenta, neon yellow, electric blue, deep black, hot orange, acid green, stark white',
                'Majestic wonder — royal purple, golden sunrise, deep forest emerald, warm ivory, rose blush, sky cobalt',
                'Dramatic noir — deep charcoal, silver moonlight, blood amber, cigarette-smoke blue',
                'Spring awakening — cherry blossom pink, fresh mint, pale sky blue, warm cream, new leaf green',
                'Desert heat — terracotta red, sandy beige, bleached bone, burnt ochre, distant purple mountain',
                'Oceanic depth — bioluminescent teal, abyssal black, coral orange, seafoam white, kelp green',
                'Harvest festival — pumpkin orange, deep burgundy, straw yellow, olive green, twilight purple'
              ]
            }
          ]
        },
        {
          id: 'world', label: 'Setting & Themes', nav: 'Setting & Themes', icon: '◦',
          desc: 'Define the physical world and narrative heart of your stories.',
          fields: [
            {
              key: 'settingType', label: 'Setting Type', single: false, opts: [
                'Nature, countryside, seasons, cottages, gardens',
                'Urban cityscape, neon streets, rooftops',
                'Coastal, ocean, fishing villages, cliffs',
                'Mountain, highland, misty peaks',
                'Forest, ancient woods, ruins',
                'Fantasy world, floating islands, magic ruins',
                'Futuristic city, space stations, neon megastructures',
                'Desert, arid plains, sand dunes, oasis',
                'Underground, caves, labyrinthine tunnels',
                'Arctic, tundra, frozen lakes',
                'Suburban neighbourhood, quiet streets',
                'Market towns, local festivals, small shops',
                'Wetlands, river delta, paddy fields, mangrove forest',
                'Bamboo forest, Japanese garden, stone lantern path',
                'Volcanic landscape, geothermal vents',
                'Industrial zones, abandoned warehouses, factories',
                'Underwater, ocean depths, coral reefs, bioluminescent sea',
                'Cozy indoor kitchen, wood-fired hearths',
                'Café, tea house, bakery, cozy interiors',
                'Rooftop terrace dining, candlelit restaurant',
                'Ancient ruins, historic grounds, heritage trail',
                'School, library, quiet hallways',
                'Deep space, alien planet, asteroid field',
                'Post-apocalyptic ruins, reclaimed by nature',
                'Snowy alpine village, ski lodge, frozen waterfall',
                'Swamp, bayou, misty marshland',
                'Circus, carnival, travelling fairground',
                'Museum, library, ancient archive',
                'Train journey, locomotive, scenic rail route',
                'Harbour, dockyard, tall ships, lighthouse',
                'Skyscraper interiors, glass towers, boardrooms',
                'Village square, cobblestone lanes, market cross',
                'Tamil Nadu village house, tiled roof, thinnai pyol, courtyard',
                'Chennai suburban apartment, terrace, concrete block colony',
                'Tea kadai, filter coffee counter, steel tumbler, wooden bench',
                'Auto stand, busy junction, bus stop, roadside stall',
                'Government school, chalk-dusted classroom, open playground',
                'Neighbourhood park, iron swings, evening walkers',
                'Police station, government office, municipal corridor',
                'Chettinad mansion, antique teak doors, inner courtyard',
                'Kaveri riverbank, paddy fields, irrigation canal',
                'Koyambedu market, vegetable stalls, wholesale crowd',
                'Marina beach, morning walkers, beach snack stalls',
                'Tamil Nadu textile shop, silk saree display, narrow lane'
              ]
            },
            {
              key: 'toneThemes', label: 'Tone & Themes', single: false, opts: [
                'Simple daily life routines, heartwarming, ASMR-friendly, nostalgic, slice-of-life',
                'Coming of age, self-discovery, personal growth',
                'Epic quest, heroism, sacrifice',
                'Environmental, nature vs industry',
                'Friendship and loyalty tested by adversity',
                'Romance, longing, separation and reunion',
                'Grief, loss, healing over time',
                'Mystery, hidden secrets, unravelling the past',
                'Community, belonging, found family',
                'Survival, resilience, hope in darkness',
                'Wonder and curiosity, exploration of the unknown',
                'Cultural heritage, folklore, tradition vs modernity',
                'Redemption, forgiveness, second chances',
                'Solitude and self-sufficiency, quiet independence',
                'Personal quest, inner growth, ancient legend and lore',
                'Political intrigue, double agents, betrayal',
                'Generational recipes, grandmother wisdom, memory and food',
                'Simple pleasures, mindfulness, slow living',
                'Gentle human connection, quiet friendship',
                'Identity, belonging, finding your place',
                'Technology vs humanity, AI consciousness',
                'Environmental collapse, rewilding, ecological hope',
                'War and its aftermath, trauma, reconciliation',
                'Social class, inequality, quiet revolution',
                'Coming home, diaspora, roots and belonging',
                'Artistic creation, the struggle and joy of making',
                'Food as memory, sensory nostalgia, taste and emotion',
                'Sports, competition, discipline and defeat',
                'Mentor and protégé, passing down wisdom'
              ]
            }
          ]
        },
        {
          id: 'character', label: 'Character Style', nav: 'Character Style', icon: '◦',
          desc: 'Set how characters look, move, and feel across every scene.',
          fields: [
            {
              key: 'characterStyle', label: 'Character Style', single: true, opts: [
                'Rounded features, expressive eyes, soft clothing, warm color palettes',
                'Stylised proportions, large expressive eyes, highly emotive face rigs, appealing silhouette',
                'Slender proportions, soft expressive eyes, delicate gestures, modern casual or period romantic wear',
                'Tall and angular, sharp geometric silhouettes, high fashion, sleek posture',
                'Chibi / super-deformed, large heads, tiny bodies, wide sparkling eyes',
                'Realistic proportions, subtle expressions, detailed traditional costume and jewellery',
                'Realistic proportions, detailed Kanchipuram silk costume and traditional jewellery',
                'Caricature, exaggerated emotions, rubbery movement, squash-and-stretch',
                'Stoic warrior, scarred, heavy armour or trench coat, intense gaze, purposeful silhouette',
                'Sleek cybernetic augmentations, visor helmets, form-fitting suit, glowing implants',
                'Ethereal beings, translucent, glowing outlines, supernatural grace',
                'Retro pin-up, bold lines, limited colour palette, confident pose',
                'Animal-hybrid, anthropomorphic, expressive tails and ears',
                'Elderly, weathered, deeply expressive faces, wisdom in every line',
                'Children, wide-eyed, curious, playful postures, oversized props',
                'Masked / faceless, mysterious silhouette, implied emotion',
                'Warm, expressive hands — flour-dusted, aged knuckles, gentle grip',
                'Classical dancer, precise mudra gestures, elaborate bharatanatyam costume',
                'Expressive 3D faces, strong silhouettes, practical adventure clothing, dynamic heroic poses',
                'Flat geometric silhouettes, bold expressive eyes, traditional folk costume, fluid movement with stylised limb articulation',
                'Highly detailed expressive faces, soft rounded features, natural casual clothing, subtle body language conveying deep emotion',
                'Taisho-era Japanese costume, flowing haori, dynamic combat poses, intense expressive eyes, elemental aura effects surrounding body',
                'Superhero dynamic proportions, expressive silhouette, graphic costume design',
                'Gaunt, luminous-eyed, dark cloaks and tattered robes, otherworldly presence',
                'Everyday contemporary, normcore wardrobe, relatable proportions',
                'Royalty and nobility, elaborate period costume, regal bearing',
                'Nomadic traveller, layered weathered clothing, road-worn detail',
                'Scholar / inventor, spectacles, ink-stained fingers, curious posture',
                'Tamil everyday — cotton saree with printed border, jasmine braid, steel vessel',
                'Tamil everyday — lungi or vetti, half-sleeve shirt, slippers, weathered face',
                'Tamil school child — uniform, oil-plaited hair with ribbon, heavy schoolbag, barefoot ease',
                'Tamil elderly woman — white saree, thick-rimmed spectacles, kumkum, gentle authority',
                'Tamil elderly man — dhoti, angavastram, walking stick, dignified posture',
                'Tamil auto driver — checked lungi, towel on shoulder, mobile on dash, street-smart ease'
              ]
            }
          ]
        },
        {
          id: 'camera', label: 'Camera & Composition', nav: 'Camera & Composition', icon: '◦',
          desc: 'Control how scenes are filmed and framed.',
          fields: [
            {
              key: 'cameraStyle', label: 'Camera Style', single: true, opts: [
                'Cinematic, subtle movements, drone opening shots — subtle pan, dolly, tilt',
                'Cinematic 3D camera, motivated moves, rack focus, hero close-ups',
                'Sweeping epic drone pull-back, low tracking shot following hero movement, wide establishing reveal',
                'Slow ceremonial pan, nature-wide establishing, intimate folk close-up',
                'Intimate observational — slow creep push-in on faces, static wide held on environment, subtle handheld micro-sway',
                'Explosive whip-pan tracking shot, extreme slow-motion freeze on technique peak, dynamic spiral orbit around subject',
                'Comic panel snap-cut, freeze-frame pose hold, kinetic speed-line push, multi-frame stutter zoom',
                'Handheld, shaky, intimate, documentary feel',
                'Static wide shots, painterly tableau, minimal movement',
                'Fast cuts, kinetic energy, action-driven, snap-cut',
                'Slow orbit, dramatic reveals, epic scale',
                'POV immersive, first-person, reactive camera',
                'Low-angle heroic, high-angle vulnerable, deliberate framing',
                'Floating/drifting, dreamlike, weightless',
                'Rack focus, shallow depth of field, bokeh, slow push-in',
                'Split-screen, parallel narrative, dual frame',
                'Extreme close-up food cinematography, slow macro push-in, top-down flat-lay',
                'Timelapse, hyperlapse, condensed time',
                'Crash zoom, snap-cut, hyper-stylised',
                'Sweeping theatrical arcs, magical reveal crane swoop',
                'Slow horizontal pan across painted background',
                'Dutch tilt, angular frame, psychological unease',
                'Tracking shot, long take, continuous follow',
                'Mirror / reflection shot, symmetry play',
                'Aerial / top-down overhead, map-like perspective',
                'Whip pan, smash cut, MTV-style energy',
                'Freeze-frame burst with speed lines, comic panel break',
                'Underwater / submerged perspective, refracted light'
              ]
            },
            {
              key: 'composition', label: 'Composition Types', single: false, opts: [
                'Wide shot', 'Close-up', 'Over-the-shoulder', 'POV',
                "Bird's eye / top-down", 'Dutch angle', 'Rule of thirds',
                'Symmetrical / centred', 'Silhouette', 'Foreground framing',
                'Two-shot', 'Insert / detail shot', 'Extreme close-up',
                'Low angle hero shot', "Worm's eye view", 'Macro / micro detail',
                'Long shot / full body in environment', 'Medium shot',
                'Establishing shot, geography reveal', 'Reaction shot, listening face',
                'Over-the-shoulder reverse shot pair', '360° orbit around subject',
                'Match cut, visual rhyme between scenes', 'Iris in / iris out, vintage frame',
                'Split diopter, dual focus planes', 'Reflection / mirror composition',
                'Negative space dominant, subject isolated', 'Layered depth, foreground-mid-background',
                'Multi-panel split screen'
              ]
            }
          ]
        },
        {
          id: 'camera2', label: 'Opening Camera', nav: 'Opening Camera', icon: '◦',
          desc: 'Set the very first shot of each video.',
          fields: [
            { key: 'camOpenFull', label: 'Opening Camera', single: true, text: true, default: 'slow drone descent from high aerial to gentle eye level' }
          ]
        },
        {
          id: 'sound', label: 'Sound Design & Score', nav: 'Sound Design & Score', icon: '◦',
          desc: 'Music and sound carry the emotion — no voiceover needed. Layer score, diegetic texture, and ASMR for full immersion.',
          fields: [
            {
              key: 'soundDesign', label: 'Music & Score Style', single: true, opts: [
                'Minimal underscore, SFX & ASMR dominant',
                'ASMR only, no music',
                'Ambient soundtrack + subtle ASMR layers',
                'Epic orchestral score, minimal ambient',
                'Epic orchestral score + choir swells, full soundscape',
                'Lo-fi beats, gentle background music',
                'Traditional folk instruments, acoustic',
                'Electronic synth, futuristic tones',
                'Silence with occasional sharp sound effects',
                'Diegetic sound only — all sounds from within the world',
                'Choir, ethereal vocals, atmospheric pads',
                'Binaural 3D audio, spatial immersion',
                'Jazz-inflected mood, late-night café atmosphere',
                'Carnatic classical music, veena and mridangam',
                'Epic orchestral score, classical strings and percussion',
                'World percussion, tribal rhythms, hand drums',
                'Hip-hop beats, vinyl scratches, diegetic sound punches',
                'Adventure orchestral score — brass-led, percussive, nature-grounded with soaring strings',
                'Piano-led intimate score, diegetic ambient texture — rain, breath, everyday objects',
                'Hybrid orchestral-taiko score — traditional Japanese instruments fused with epic cinematic percussion and elemental SFX',
                'Minimal piano, sparse notes, emotional resonance',
                'Seamless ambient loop, no percussion, no melody',
                'Field recording only — raw environmental capture',
                'Dark ambient drone, tension pads, no melody',
                'Folk acoustic guitar, fiddle, pastoral warmth',
                'Hybrid orchestral + electronic, cinematic trailer style',
                'Gamelan, Southeast Asian percussion ensemble',
              ]
            },
            {
              key: 'soundExamples', label: 'Diegetic Sound Library', single: false, opts: [
                // Nature & Weather
                'heavy rain on glass', 'pouring rain on rooftops', 'thunder rolling in distance',
                'wind howling through trees', 'rustling dry leaves underfoot', 'crackling fire close-up',
                'rain hitting pond surface', 'river rushing over stones', 'waterfall mist',
                'ocean waves on pebble beach', 'tide washing over sand', 'ice cracking on frozen lake',
                'snow crunching underfoot', 'cicadas in summer heat', 'crickets at midnight',
                'wind through tall grass', 'fire pit popping', 'rain on banana leaves',
                'rain on palm leaves', 'water in bronze vessel',
                'mountain wind gusting', 'fog drifting over water',
                // Kitchen & Cooking
                'sizzling pan on stove', 'boiling water bubbling', 'kettle whistle',
                'knife chopping on wooden board', 'oil splattering in wok', 'mortar and pestle grinding',
                'bread tearing apart', 'bread crust tearing', 'crispy skin crackle', 'egg cracking on bowl rim',
                'batter poured into pan', 'garlic hitting hot oil', 'steam releasing from pot',
                'steam hissing', 'sand trickling',
                'wooden spoon scraping pan', 'vegetables in colander rinse', 'ceramic bowl clinking',
                'salt pinch dropping', 'spice jar shaken', 'grater on cheese block',
                'rice pouring into pot', 'pressure cooker whistle', 'ladle scooping curry',
                'roti on iron griddle', 'seeds popping in oil', 'hot tea poured into cup',
                'spoon stirring ceramic bowl', 'tea being poured', 'cat purring',
                // Ambience & Urban
                'heavy footsteps on wooden floor', 'soft footsteps on tatami', 'door creaking open', 'rain drumming on umbrella',
                'umbrella opening in rain',
                'water dripping from roof', 'broom sweeping stone path', 'pencil scratching on paper',
                'pages turning', 'clock ticking', 'birds calling overhead',
                'frogs croaking at dusk', 'insects humming at night', 'bamboo wind chimes',
                'logs splitting', 'shovel in soil', 'distant church bells',
                'crowd murmur in marketplace', 'horse hooves on cobblestone',
                'old radio static', 'typewriter clacking', 'distant train whistle',
                'glass shattering in slow motion', 'electric sparks crackling',
                'sword drawn from scabbard', 'mechanical gears grinding', 'subway train rushing by',
                'bubbles rising through water',
                // Indian / Tamil sounds
                'dhol drum rhythms',
                'chalk on stone path', 'coconut shell scraping', 'jasmine flowers dropped in basket',
                'toddy palm tapping', 'parai drum beats', 'ankle bells clinking',
                'coconut cracked open',
                'peacock calls at dawn', 'chai being poured',
                // Action / Thriller
                'gunshot echo in tunnel', 'metal door slamming', 'gravel crunching underfoot',
                'heartbeat pulse', 'breath fogging cold air', 'distant explosion rumble',
                'chain dragging on concrete', 'briefcase latch clicking', 'car tires screeching',
                'distant police siren',
                // Romantic / Soft
                'vinyl record crackle', 'coffee shop murmur', 'train window rain drops',
                'piano key soft press', 'breath on cold glass', 'letter paper folding',
                'footsteps on wet pavement', 'carousel music box', 'flower petals on water',
                'wind through curtain lace', 'fireflies blinking at dusk', 'pollen drifting in sunlight',
                // Additional
                'bicycle bell', 'dhol drum rhythms', 'water pot filling'
              ]
            }
          ]
        },
        {
          id: 'envmotion', label: 'Environmental Motion', nav: 'Environmental Motion', icon: '◦',
          desc: 'Choose what moves in the world around your characters.',
          fields: [
            {
              key: 'envMotion', label: 'Environmental Motion', single: false, opts: [
                'Wind', 'Rain', 'Rustling leaves', 'Steam', 'Crackling fire',
                'Flame and fire effects',
                'Snow falling', 'Rippling water', 'Swaying lanterns', 'Floating embers',
                'Dust particles in light', 'Fog drifting', 'Fireflies blinking',
                'Petals falling', 'Smoke curling', 'Lightning flash',
                'Aurora borealis shimmer', 'Floating debris in zero gravity',
                'Bubbles rising through water', 'Heat shimmer / mirage', 'Tide washing over sand',
                'Pollen drifting in sunlight', 'Candle flame flickering',
                'Leaves swirling in courtyard', 'Silk dupatta billowing in wind',
                'Snowflakes drifting in slow motion', 'Spider web vibrating in breeze',
                'Dandelion seeds floating', 'Ash falling from sky', 'Bioluminescent pulse underwater',
                'Clouds racing in timelapse', 'Wheat field undulating in wind',
                'Cherry blossom blizzard', 'Sand dune shifting', 'Lava flow glowing',
                'Starfield slowly rotating', 'Rain on still water surface rings',
                'Mist rising from valley at dawn', 'Tornado of leaves or petals',
                'Floating particles'
              ]
            }
          ]
        },
        {
          id: 'stories', label: 'Story Category', nav: 'Story Category', icon: '◦',
          desc: 'Choose the story category and genre to shape what kinds of stories are generated.',
          fields: [
            { key: 'myStoryMode', myStoryToggle: true },
            {
              key: 'storyCategory', label: 'Story Category', single: true, opts: [
                'Open / No Category — AI decides',
                // ── Scripture & Faith ──
                'Bible Stories — Old Testament',
                'Bible Stories — New Testament',
                'Bible Stories — Parables of Jesus',
                'Bible Stories — Acts of the Apostles',
                'Bible Stories — Psalms & Poetic Books',

                // ── Moral & Wisdom ──
                'Moral Stories — Universal values, right vs wrong',
                'Moral Stories — Children & family lessons',
                'Moral Stories — Workplace & community ethics',
                'Wisdom Stories — Ancient proverbs brought to life',
                'Wisdom Stories — Philosophical fables',
                'Wisdom Stories — Aesop-style fables',
                // ── Action & Adventure ──
                'Action Stories — High-stakes adventure & survival',
                'Action Stories — Warrior & battle epics',
                'Action Stories — Heist & undercover operations',
                'Action Stories — Disaster & rescue',
                'Action Stories — Martial arts & honour duels',
                // ── Mystery & Thriller ──
                'Detective Stories — Classic whodunit mystery',
                'Detective Stories — Noir crime & investigation',
                'Detective Stories — Psychological thriller',
                'Detective Stories — Cold case & forensic mystery',
                'Thriller Stories — Conspiracy & betrayal',
                'Thriller Stories — Spy & espionage',
                // ── Mythology & Folklore ──
                // ── History ──
                'Historical Stories — True events dramatised',
                'Historical Stories — Ancient civilisations',
                'Historical Stories — Forgotten heroes & unsung figures',
                'Historical Stories — Wars & their human cost',
                'Historical Stories — Trade routes & exploration',
                // ── Nature & Animals ──
                'Nature & Animal Stories — Wildlife drama',
                'Nature & Animal Stories — Talking animal fables',
                'Nature & Animal Stories — Ocean & marine life',
                'Nature & Animal Stories — Migration & seasons',
                'Nature & Animal Stories — Endangered species',
                // ── Supernatural & Horror ──
                'Ghost & Supernatural — Haunting & the unknown',
                'Ghost & Supernatural — Folklore demons & spirits',
                'Ghost & Supernatural — Unexplained phenomena',
                // ── Romance & Emotion ──
                'Romance Stories — Timeless love & longing',
                'Romance Stories — Forbidden love across cultures',
                'Romance Stories — Long-distance & reunion',
                'Romance Stories — Heartbreak & healing',
                // ── Comedy & Satire ──
                'Comedy & Satire — Humour with a message',
                'Comedy & Satire — Workplace absurdity',
                'Comedy & Satire — Cultural misunderstandings',
                // ── Science Fiction ──
                'Science Fiction — Future worlds & human questions',
                'Science Fiction — AI & consciousness',
                'Science Fiction — Space exploration & first contact',
                'Science Fiction — Dystopia & resistance',
                'Science Fiction — Time travel & paradox',
                // ── Children & Family ──
                'Children\'s Adventure — Young heroes & wonder',
                'Children\'s Adventure — Friendship & growing up',
                'Children\'s Adventure — Animals as companions',
                'Children\'s Stories — Bedtime & lullaby tales',
                'Family Stories — Multigenerational bonds',
                // ── Slice of Life & Human Drama ──
                'Slice of Life — Quiet everyday moments',
                'Slice of Life — Food, craft & daily rituals',
                'Drama — Redemption & second chances',
                'Drama — Immigration & belonging',
                'Drama — Disability & quiet strength',
                'Drama — Grief, loss & healing',
                // ── Fantasy ──
                'Fantasy — Epic quest & chosen hero',
                'Fantasy — Classic fairy tales (Grimm, Andersen, Perrault)',
                'Fantasy — Dark fairy tales & cursed worlds',
                'Fantasy — Magical realism & hidden worlds',
                'Fantasy — Dragons, kingdoms & prophecy',
              ]
            },
            {
              key: 'storyTone', label: 'Story Tone Guidance <span class="auto-set-badge">↺ auto-set by category</span>', single: true, opts: [
                'AI-determined — match the art style',
                'Uplifting & hopeful — end on light',
                'Bittersweet — beauty in loss or letting go',
                'Cautionary — a lesson learned through consequence',
                'Triumphant — earned victory after struggle',
                'Tragic — noble failure, meaningful sacrifice',
                'Mysterious — questions linger after the final scene',
                'Contemplative — no resolution, only reflection',
                'Joyful & playful — light-hearted throughout',
                'Tense & suspenseful — unease from first scene to last',
              ]
            },
            {
              key: 'storyAudience', label: 'Target Audience <span class="auto-set-badge">↺ auto-set by category</span>', single: true, opts: [
                'General audience — all ages',
                'Children (5–10) — simple language, visual clarity',
                'Tweens (10–14) — adventure, identity, friendship',
                'Young adults (15–25) — emotion, growth, discovery',
                'Adults — nuanced, layered, mature themes',
                'Family — parents and children together',
                'Faith-based audience — spiritual resonance',
                'Educational — curriculum-friendly storytelling',
              ]
            }
          ]
        },
        {
          id: 'vars', label: 'Global Variables', nav: 'Global Variables', icon: '◦',
          desc: 'Control output length, story count, narration mode, and animation settings.',
          fields: [
            { key: 'totalStories', label: 'Total Stories', single: true, number: true, default: 10, opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '15', '20'] },
            { key: 'productionOutput', label: 'Production Output', single: false, opts: ['image', 'image-combined', 'animation', 'voiceover-combined'], default: ['image', 'animation'] },
            { key: 'storyFraming', storyFraming: true },
            { key: 'episodeMode', label: 'Episode Mode', episodeToggle: true },
            { key: 'scenePacing', scenePacing: true },
            { key: 'storyLength', label: 'Story Length', single: true, opts: ['Mini', 'Short', 'Medium', 'Long', 'Epic'] },
            { key: 'narrationMode', label: 'Narration Mode', trimode: true, default: ['sfx-asmr', 'text-overlay'], opts: ['music', 'sfx-asmr', 'text-overlay', 'voiceover'] },
            { key: 'episodeFormatGroups', episodeFormatGroups: true },
            { key: 'scenesGroup', scenesGroup: true },
            { key: 'animDuration', label: 'Animation Duration (seconds)', single: true, number: true, default: 6, opts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '15', '20', '30', '60'] },
            { key: 'durationWidget', durationWidget: true }
          ]
        },
        {
          id: 'ytseo', label: 'YouTube SEO', nav: 'YouTube SEO', icon: '◦',
          desc: 'Configure title style, description length, and hashtag count for YouTube uploads.',
          fields: [
            { key: 'ytTitleStyle', label: 'YouTube Title Style', single: true, opts: ['click-worthy', 'minimal / poetic', 'question-based', 'number-led', 'keyword-first', 'emotional hook', 'mystery / curiosity gap'] },
            { key: 'ytDescChars', label: 'YouTube Description Max Chars', single: true, number: true, default: 500, opts: ['100', '150', '200', '250', '300', '350', '400', '450', '500', '600', '700', '800', '1000', '1500', '2000', '5000'] },
            { key: 'ytHashtags', label: 'YouTube Hashtag Count', single: true, number: true, default: 5, opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20'] }
          ]
        },
        {
          id: 'promptfmt', label: 'Prompt & References', nav: 'Prompt & References', icon: '◦',
          desc: 'Set how scene prompts are formatted and how character reference sheets are laid out.',
          fields: [
            { key: 'scenePromptsMode', label: 'Scene Prompt Format', single: true, opts: ['code block', 'numbered list', 'markdown table', 'JSON', 'plain text'] },
            { key: 'charRefViews', label: 'Character Reference Views', single: true, opts: ['front only', 'front + back', 'front + side', 'full body turnaround', 'turnaround + close-up face', 'turnaround + expression sheet', 'full sheet with expressions + poses'] }
          ]
        },
        {
          id: 'tools', label: 'Tools', nav: 'Tools', icon: '◦',
          desc: 'Select your generation tools. The prompt output will be formatted and structured for each selected tool.',
          fields: [{ key: '_toolsWidget', toolsWidget: true }]
        },
        {
          id: 'voice', label: 'Voice Design', nav: 'Voice Design', icon: '◦',
          desc: 'Auto-set when you pick a theme preset or story category. Override manually at any time.',
          fields: [
            {
              key: 'voiceGender', label: 'Voice Gender <span class="auto-set-badge">↺ auto-set by theme</span>', single: true, opts: [
                'Male', 'Female', 'Neutral / Androgynous'
              ]
            },
            {
              key: 'voiceRole', label: 'Narrator Role <span class="auto-set-badge">↺ auto-set by theme</span>', single: true, opts: [
                'Omniscient storyteller', 'Intimate witness',
                'Ancient voice', 'Companion narrator',
                'Oracle', 'Documentary observer', 'Inner monologue',
                'Hardboiled narrator', 'Warm community narrator',
                'Gentle storybook narrator', 'Curious young narrator',
                'Warm storyteller'
              ]
            },
            {
              key: 'voiceSampleText', label: 'Sample Script Line <span class="auto-set-badge">↺ auto-set by theme</span>', single: true, text: true,
              default: 'She stood at the edge of the world, watching the last light die on the water.'
            }
          ]
        },
        {
          id: 'settings', label: 'Settings', nav: 'Settings',
          desc: 'Export, import and reset your configuration.',
          fields: [{ key: '_settingsWidget', settingsWidget: true }]
        }
      ];
