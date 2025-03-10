const products = [
    // Apparel Products
    {
        id: 1,
        name: "Luffy Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Monkey D. Luffy.",
        images: [
            "products/Apparel/luffy-tee.jpg",
            "products/Apparel/luffy-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 2,
        name: "Attack on Titan Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            "products/Apparel/aot-tee.jpg",
            "products/Apparel/aot-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 3,
        name: "Goku Silhouette Tee",
        price: 35.00,
        description: "A t-shirt featuring Goku from Dragon Ball Series.",
        images: [
            "products/Apparel/goku-tee.jpg",
            "products/Apparel/goku-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 4,
        name: "Okarun Tee",
        price: 35.00,
        description: "A t-shirt featuring Okarun from Dandadan.",
        images: [
            "products/Apparel/okarun-tee.jpg",
            "products/Apparel/okarun-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 5,
        name: "Sakamoto Days Tee",
        price: 35.00,
        description: "A tee from Sakamoto Days",
        images: [
            "products/Apparel/sakamoto-tee.jpg",
            "products/Apparel/sakamoto-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 6,
        name: "Turbo Granny Tee",
        price: 35.00,
        description: "A Turbo Granny t-shirt from Dandadan.",
        images: [
            "products/Apparel/tg-tee.jpg",
            "products/Apparel/tg-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 7,
        name: "Saitama Tee",
        price: 35.00,
        description: "A Saitama t-shirt from One Punch Man.",
        images: [
            "products/Apparel/saitama-tee.jpg",
            "products/Apparel/saitama-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 8,
        name: "Neko Luffy Tee",
        price: 35.00,
        description: "A Neko Luffy t-shirt.",
        images: [
            "products/Apparel/neko-luffy-tee.jpg",
            "products/Apparel/neko-luffy-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 19,
        name: "Scouting Legion Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            "products/Apparel/aot-logo-tee.jpg",
            "products/Apparel/aot-logo-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 20,
        name: "Pikachu Tee",
        price: 35.00,
        description: "A Pikachu-themed t-shirt.",
        images: [
            "products/Apparel/pikachu-tee.jpg",
            "products/Apparel/pikachu-tee2.jpg"
        ],
        category: "Apparel"

    },
    {
        id: 21,
        name: "Hunter x Hunter Tee",
        price: 35.00,
        description: "A Hunter x Hunter-themed t-shirt.",
        images: [
            "products/Apparel/hxh-tee.jpg",
            "products/Apparel/hxh-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 22,
        name: "My Life Story Tee",
        price: 35.00,
        description: "A Jujutsu Kaisen-themed t-shirt.",
        images: [
            "products/Apparel/myLifeStory-tee.jpg",
            "products/Apparel/myLifeStory-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 23,
        name: "Neko Ramen Tee",
        price: 35.00,
        description: "A Naruto-themed t-shirt.",
        images: [
            "products/Apparel/neko-ramen-tee.jpg",
            "products/Apparel/neko-ramen-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 24,
        name: "Brook Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Brook.",
        images: [
            "products/Apparel/brook-tee.jpg",
            "products/Apparel/brook-tee2.jpg",
            "products/Apparel/brook-tee3.jpg"
        ],
        category: "Apparel"
    },

    //Dry Fit Tees
    {
        id: 25,
        name: "Ichigo (Mugetsu) Dry Fit Tee",
        price: 50.00,
        description: "A Bleach-themed dry fit t-shirt.",
        images: [
            "products/DryFit/ichigo-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 26,
        name: "Death Note Dry Fit Tee",
        price: 50.00,
        description: "A Death Note-themed dry fit t-shirt.",
        images: [
            "products/DryFit/death-note-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 27,
        name: "Eren Yeager Dry Fit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/eren-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 28,
        name: "Goku & Vegeta Dry Fit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            "products/DryFit/goku-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 29,
        name: "Jin Kazuma Dry Fit Tee",
        price: 50.00,
        description: "A Tekken-themed dry fit t-shirt.",
        images: [
            "products/DryFit/jin-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 30,
        name: "Ikkaku Dry Fit Tee",
        price: 50.00,
        description: "A Bleach-themed dry fit t-shirt.",
        images: [
            "products/DryFit/ikkaku-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 31,
        name: "Arcane LoL Dry Fit Tee",
        price: 50.00,
        description: "An Arcane-themed dry fit t-shirt.",
        images: [
            "products/DryFit/arcane-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 32,
        name: "Arcane Jinx Dry Fit Tee",
        price: 50.00,
        description: "An Arcane Jinx-themed dry fit t-shirt.",
        images: [
            "products/DryFit/jinx-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 33,
        name: "Kratos Dry Fit Tee",
        price: 50.00,
        description: "A God of War-themed dry fit t-shirt.",
        images: [
            "products/DryFit/kratos-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 34,
        name: "Akuma Dry Fit Tee",
        price: 50.00,
        description: "A Street Fighter-themed dry fit t-shirt.",
        images: [
            "products/DryFit/akuma-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 35,
        name: "Mitsuri Dry Fit Tee",
        price: 50.00,
        description: "A Demon Slayer-themed dry fit t-shirt.",
        images: [
            "products/DryFit/mitsuri-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 36,
        name: "Momo Dry Fit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/momo-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 37,
        name: "Yujiro Hanma Dry Fit Tee",
        price: 50.00,
        description: "A Baki-themed dry fit t-shirt.",
        images: [
            "products/DryFit/yujiro-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 38,
        name: "Natsu Dry Fit Tee",
        price: 50.00,
        description: "A Fairy Tail-themed dry fit t-shirt.",
        images: [
            "products/DryFit/natsu-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 39,
        name: "Nezuku Dry Fit Tee",
        price: 50.00,
        description: "A Demon Slayer dry fit t-shirt.",
        images: [
            "products/DryFit/nezuko-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 40,
        name: "Okarun Dry Fit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/okarun-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 41,
        name: "Vegeta Dry Fit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            "products/DryFit/vegeta-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 42,
        name: "Rias Gremory Dry Fit Tee",
        price: 50.00,
        description: "A High School DxD-themed dry fit t-shirt.",
        images: [
            "products/DryFit/rias-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 43,
        name: "One Piece Dry Fit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/one-piece-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 44,
        name: "Alternate One Piece Dry Fit Tee",
        price: 50.00,
        description: "An alternate One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/one-piece-dryfit2.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 45,
        name: "Alternate Sasuke Dry Fit Tee",
        price: 50.00,
        description: "An alternate Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/sasuke-dryfit2.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 46,
        name: "Sasuke Dry Fit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/sasuke-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 47,
        name: "Naruto Dry Fit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/naruto-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 48,
        name: "Zoro Dry Fit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/zoro-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 49,
        name: "Levi Dry Fit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/levi-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 50,
        name: "Hellsing Dry Fit Tee",
        price: 50.00,
        description: "A Hellsing-themed dry fit t-shirt.",
        images: [
            "products/DryFit/hellsing-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 51,
        name: "Crash Bandicoot Dry Fit Tee",
        price: 50.00,
        description: "A Crash Bandicoot-themed dry fit t-shirt.",
        images: [
            "products/DryFit/crash-dryfit.jpg"
        ],
        category: "Dry Fit"
    },

    // Figures Products
    {
        id: 9,
        name: "Luffy Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Luffy from One Piece.",
        images: [
            "products/Figures/luffy-funko.jpg",
            "products/Figures/luffy-funko2.jpg",
            "products/Figures/luffy-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 10,
        name: "Aipom Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Aipom from Pokémon.",
        images: [
            "products/Figures/aipom-funko.jpg",
            "products/Figures/aipom-funko2.jpg",
            "products/Figures/aipom-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 11,
        name: "Gambit Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop of Gambit from X-Men.",
        images: [
            "products/Figures/gambit-funko.jpg",
            "products/Figures/gambit-funko2.jpg",
            "products/Figures/gambit-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 12,
        name: "Goku Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop of Goku.",
        images: [
            "products/Figures/goku-funko.jpg",
            "products/Figures/goku-funko2.jpg",
            "products/Figures/goku-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 13,
        name: "Meliodas Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop figure of Meliodas from Seven Deadly Sins.",
        images: [
            "products/Figures/melodias-funko.jpg",
            "products/Figures/melodias-funko2.jpg",
            "products/Figures/melodias-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 14,
        name: "Mina Ashido Funko Pop",
        price: 25.00,
        description: "A Funko Pop figure of Mina from My Hero Academia.",
        images: [
            "products/Figures/mina-funko.jpg",
            "products/Figures/mina-funko2.jpg",
            "products/Figures/mina-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 15,
        name: "Tengen Uzui Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop figure of Tengen Uzui from Demon Slayer.",
        images: [
            "products/Figures/tengen-funko.jpg",
            "products/Figures/tengen-funko2.jpg",
            "products/Figures/tengen-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 16,
        name: "Venom Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Venom.",
        images: [
            "products/Figures/venom-funko.jpg",
            "products/Figures/venom-funko2.jpg",
            "products/Figures/venom-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 17,
        name: "Wonder Woman Funko Pop",
        price: 35.00, // Updated price
        description: "A Funko Pop figure of Wonder Woman.",
        images: [
            "products/Figures/ww-funko.jpg",
            "products/Figures/ww-funko2.jpg",
            "products/Figures/ww-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 18,
        name: "Boruto Funko Pop",
        price: 50.00, // Updated price
        description: "A Funko Pop figure of Boruto.",
        images: [
            "products/Figures/boruto-funko.jpg",
            "products/Figures/boruto-funko2.jpg",
            "products/Figures/boruto-funko3.jpg"
        ],
        category: "Figures"
    },

    //Accesories

    //Keychains
    {
        id: 52,
        name: "Chopper Hat Keychain",
        price: 18.00,
        description: "A keychain of Chopper's hat",
        images: [
            "products/Keychains/chopper-hat-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 53,
        name: "Freiza Keychain",
        price: 18.00,
        description: "A keychain of Frieza from the Dragon Ball series",
        images: [
            "products/Keychains/frieza-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 54,
        name: "Goku Black Keychain",
        price: 18.00,
        description: "A keychain of Chopper's hat",
        images: [
            "products/Keychains/goku-black-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 55,
        name: "Goku Keychain",
        price: 18.00,
        description: "A keychain of Goku from the Dragon Ball Series",
        images: [
            "products/Keychains/goku-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 56,
        name: "Luffy Jolly Roger Keychain",
        price: 18.00,
        description: "A keychain of Luffy's Jolly Roger",
        images: [
            "products/Keychains/luffy-jolly-roger-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 57,
        name: "Luffy Jolly Roger Keychain",
        price: 18.00,
        description: "A keychain of Luffy's Jolly Roger",
        images: [
            "products/Keychains/luffy-jolly-roger-keychain2.jpg"
        ],
        category: "Keychains"

    },
    {
        id: 58,
        name: "One Piece Keychain",
        price: 15.00,
        description: "A keychain featuring the One Piece logo.",
        images: [
            "products/Keychains/one-piece-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 59,
        name: "Mihawk's Yoru Keychain",
        price: 20.00,
        description: "A keychain of Mihawk's Yoru sword from One Piece.",
        images: [
            "products/Keychains/op-yoru-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 60,
        name: "Son Goku Keychain",
        price: 17.00,
        description: "A keychain of Son Goku in his iconic pose.",
        images: [
            "products/Keychains/son-goku-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 61,
        name: "Thousand Sunny Keychain",
        price: 22.00,
        description: "A keychain of the Thousand Sunny ship from One Piece.",
        images: [
            "products/Keychains/thousand-sunny-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 62,
        name: "Vegeta Keychain",
        price: 18.00,
        description: "A keychain of Vegeta in his Saiyan armor.",
        images: [
            "products/Keychains/vegeta-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 63,
        name: "Zoro Keychain",
        price: 19.00,
        description: "A keychain of Roronoa Zoro with his swords.",
        images: [
            "products/Keychains/zoro-keychain.jpg"
        ],
        category: "Keychains"
    },
    {
        id: 90,
        name: "Crocodile Hook Necklace",
        price: 23.00,
        description: "A necklace featuring Crocodile's hook hand.",
        images: [
            "products/Necklaces/crocodile-hook-necklace.jpg"
        ],
        category: "Necklaces"
    },
    {
        id: 64,
        name: "7 Deadly Sins Mug",
        price: 18.00,
        images: ["products/Mugs/7-deadly-sins-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 65,
        name: "Attack on Titan Mug",
        price: 18.00,
        images: ["products/Mugs/aot-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 66,
        name: "Attack on Titan Mug 2",
        price: 18.00,
        images: ["products/Mugs/aot-mug2.jpg"],
        category: "Mugs"
    },
    {
        id: 67,
        name: "Asta Mug",
        price: 18.00,
        images: ["products/Mugs/asta-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 68,
        name: "Death Note Mug",
        price: 18.00,
        images: ["products/Mugs/death-note-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 69,
        name: "Demon Slayer Mug",
        price: 18.00,
        images: ["products/Mugs/demon-slayer-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 70,
        name: "Dorohedoro Mug",
        price: 18.00,
        images: ["products/Mugs/dorohedoro-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 71,
        name: "Genshin Impact Mug",
        price: 18.00,
        images: ["products/Mugs/genshin-impact-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 72,
        name: "Hashira Mug",
        price: 18.00,
        images: ["products/Mugs/hashira-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 73,
        name: "Levi Mug",
        price: 18.00,
        images: ["products/Mugs/levi-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 74,
        name: "Love is War Mug",
        price: 18.00,
        images: ["products/Mugs/love-is-war-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 75,
        name: "Luffy Mug",
        price: 18.00,
        images: ["products/Mugs/luffy-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 76,
        name: "Mashle Mug",
        price: 18.00,
        images: ["products/Mugs/mashle-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 77,
        name: "My Neighbor Totoro Mug",
        price: 18.00,
        images: ["products/Mugs/my-neighbor-totoro-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 78,
        name: "Naruto Mug",
        price: 18.00,
        images: ["products/Mugs/naruto-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 79,
        name: "Nezuko Mug",
        price: 18.00,
        images: ["products/Mugs/nezuko-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 80,
        name: "One Piece Wanted Poster Mug",
        price: 18.00,
        images: ["products/Mugs/op-wanted-poster-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 81,
        name: "Sailor Moon Mug",
        price: 18.00,
        images: ["products/Mugs/sailor-moon-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 82,
        name: "Solo Leveling Mug",
        price: 18.00,
        images: ["products/Mugs/solo-leveling-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 83,
        name: "Team 7 Mug",
        price: 18.00,
        images: ["products/Mugs/team-7-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 84,
        name: "Tokyo Ghoul Mug",
        price: 18.00,
        images: ["products/Mugs/tokyo-ghoul-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 85,
        name: "Tokyo Revengers Mug",
        price: 18.00,
        images: ["products/Mugs/tokyo-revengers-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 86,
        name: "Undead Unluck Mug",
        price: 18.00,
        images: ["products/Mugs/undead-unluck-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 87,
        name: "Vegeta Mug",
        price: 18.00,
        images: ["products/Mugs/vegeta-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 88,
        name: "Zom 100 Mug",
        price: 18.00,
        images: ["products/Mugs/zom-100-mug.jpg"],
        category: "Mugs"
    },
    {
        id: 89,
        name: "Zoro Mug",
        price: 18.00,
        images: ["products/Mugs/zoro-mug.jpg"],
        category: "Mugs"
    },

    {
        id: 91,
        name: "King Kai Kanji Necklace",
        price: 23.00,
        description: "King Kai's Kanji.",
        images: [
            "products/Necklaces/king-kai-necklace.jpg"
        ],
        category: "Necklaces"
    },
    {
        id: 92,
        name: "Thousand Sunny Necklace",
        price: 23.00,
        description: "A One Piece mug featuring the Thousand Sunny.",
        images: [
            "products/Necklaces/thousand-sunny-necklace.jpg"
        ],
        category: "Necklaces"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); // Get the product ID from the URL

    // Find the product from the hardcoded array based on the ID
    const product = products.find(item => item.id === productId);

    if (product) {
        // Update product information dynamically
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
        document.getElementById("product-description").textContent = product.description;

        const productImage = document.getElementById("product-image");
        productImage.src = product.images[0]; // Set the first image as the default product image

        // Create thumbnails dynamically for the product images
        const imageThumbnailsContainer = document.getElementById("image-thumbnails");
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement("img");
            thumbnail.src = image;
            thumbnail.classList.add("thumbnail");
            thumbnail.alt = `${product.name} image ${index + 1}`;

            // Add active class for the first image
            if (index === 0) {
                thumbnail.classList.add("active");
            }

            // Add thumbnail to the container
            imageThumbnailsContainer.appendChild(thumbnail);

            // Event listener for changing the main image on thumbnail click
            thumbnail.addEventListener("click", () => {
                productImage.src = image;
                document.querySelectorAll(".thumbnail").forEach(thumb => {
                    thumb.classList.remove("active");
                });
                thumbnail.classList.add("active");
            });
        });
    } else {
        // If the product is not found, display an error
        console.error("Product not found!");
    }
});
