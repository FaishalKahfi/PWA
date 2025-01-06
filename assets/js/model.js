const model = {
    categories: {
        makanan: {
            nasi: ["Nasi Goreng", "Nasi Uduk", "Nasi Biryani", "Nasi Kebuli"],
            mie: ["Mie Goreng", "Mie Ayam", "Bakmi", "Mie Kuah", "Kwetiau"],
            ayam: ["Ayam Goreng", "Ayam Bakar", "Ayam Penyet", "Ayam Bawang Putih"],
            daging: ["Steak", "Sate", "Rendang"],
            seafood: ["Ikan", "Udang", "Cumi-cumi", "Kerang"]
        },
        minuman: {
            kopi: ["Espresso", "Americano", "Latte", "Cappuccino", "Kopi Susu Gula Aren", "Kopi Tubruk"],
            teh: ["Teh Hitam", "Teh Hijau", "Teh Herbal", "Teh Blackcurrant"],
            juice: ["Jus Jeruk", "Jus Alpukat", "Jus Mangga", "Jus Kiwi", "Jus Buah Naga"],
            non_kopi: ["Cokelat Panas", "Teh Tarik", "Milk Tea", "Matcha"]
        }
    },
    menu: [
        // Kategori Makanan - Nasi
        { id: 1, name: "Nasi Goreng", category: "makanan", subcategory: "nasi", price: 20000, image: "nasi_goreng.jpg" },
        { id: 2, name: "Nasi Uduk", category: "makanan", subcategory: "nasi", price: 15000, image: "nasi_uduk.jpg" },
        { id: 3, name: "Nasi Biryani", category: "makanan", subcategory: "nasi", price: 35000, image: "nasi_biryani.jpg" },
        { id: 4, name: "Nasi Kebuli", category: "makanan", subcategory: "nasi", price: 40000, image: "nasi_kebuli.jpg" },

        // Kategori Makanan - Mie
        { id: 5, name: "Mie Goreng", category: "makanan", subcategory: "mie", price: 20000, image: "mie_goreng.jpg" },
        { id: 6, name: "Mie Ayam", category: "makanan", subcategory: "mie", price: 25000, image: "mie_ayam.jpg" },
        { id: 7, name: "Bakmi", category: "makanan", subcategory: "mie", price: 22000, image: "bakmi.jpg" },
        { id: 8, name: "Mie Kuah", category: "makanan", subcategory: "mie", price: 21000, image: "mie_kuah.jpg" },
        { id: 9, name: "Kwetiau", category: "makanan", subcategory: "mie", price: 24000, image: "kwetiau.jpg" },

        // Kategori Makanan - Ayam
        { id: 10, name: "Ayam Goreng", category: "makanan", subcategory: "ayam", price: 25000, image: "ayam_goreng.jpg" },
        { id: 11, name: "Ayam Bakar", category: "makanan", subcategory: "ayam", price: 27000, image: "ayam_bakar.jpg" },
        { id: 12, name: "Ayam Penyet", category: "makanan", subcategory: "ayam", price: 26000, image: "ayam_penyet.jpg" },
        { id: 13, name: "Ayam Bawang Putih", category: "makanan", subcategory: "ayam", price: 28000, image: "ayam_bawang_putih.jpg" },

        // Kategori Makanan - Daging
        { id: 14, name: "Steak", category: "makanan", subcategory: "daging", price: 70000, image: "steak.jpg" },
        { id: 15, name: "Sate", category: "makanan", subcategory: "daging", price: 30000, image: "sate.jpg" },
        { id: 16, name: "Rendang", category: "makanan", subcategory: "daging", price: 50000, image: "rendang.jpg" },

        // Kategori Makanan - Seafood
        { id: 17, name: "Ikan Bakar", category: "makanan", subcategory: "seafood", price: 35000, image: "ikan.jpg" },
        { id: 18, name: "Udang", category: "makanan", subcategory: "seafood", price: 45000, image: "udang.jpg" },
        { id: 19, name: "Cumi Goreng", category: "makanan", subcategory: "seafood", price: 40000, image: "cumi_cumi.jpg" },
        { id: 20, name: "Kerang", category: "makanan", subcategory: "seafood", price: 38000, image: "kerang.jpg" },

        // Kategori Minuman - Kopi
        { id: 21, name: "Espresso", category: "minuman", subcategory: "kopi", price: 15000, image: "espresso.jpg" },
        { id: 22, name: "Americano", category: "minuman", subcategory: "kopi", price: 17000, image: "americano.jpg" },
        { id: 23, name: "Latte", category: "minuman", subcategory: "kopi", price: 20000, image: "latte.jpg" },
        { id: 24, name: "Cappuccino", category: "minuman", subcategory: "kopi", price: 20000, image: "cappuccino.jpg" },
        { id: 25, name: "Kopi Susu Gula Aren", category: "minuman", subcategory: "kopi", price: 18000, image: "kopi_susu_gula_aren.jpg" },
        { id: 26, name: "Kopi Tubruk", category: "minuman", subcategory: "kopi", price: 12000, image: "kopi_tubruk.jpg" },

        // Kategori Minuman - Teh
        { id: 27, name: "Teh Hitam", category: "minuman", subcategory: "teh", price: 10000, image: "teh_hitam.jpg" },
        { id: 28, name: "Teh Hijau", category: "minuman", subcategory: "teh", price: 12000, image: "teh_hijau.jpg" },
        { id: 29, name: "Teh Herbal", category: "minuman", subcategory: "teh", price: 15000, image: "teh_herbal.jpg" },
        { id: 30, name: "Teh Blackcurrant", category: "minuman", subcategory: "teh", price: 18000, image: "teh_blackcurrant.jpg" },

        // Kategori Minuman - Juice
        { id: 31, name: "Jus Jeruk", category: "minuman", subcategory: "juice", price: 15000, image: "jus_jeruk.jpg" },
        { id: 32, name: "Jus Alpukat", category: "minuman", subcategory: "juice", price: 20000, image: "jus_alpukat.jpg" },
        { id: 33, name: "Jus Mangga", category: "minuman", subcategory: "juice", price: 18000, image: "jus_mangga.jpg" },
        { id: 34, name: "Jus Kiwi", category: "minuman", subcategory: "juice", price: 22000, image: "jus_kiwi.jpg" },
        { id: 35, name: "Jus Buah Naga", category: "minuman", subcategory: "juice", price: 20000, image: "jus_buah_naga.jpg" },

        // Kategori Minuman - non_kopi
        { id: 36, name: "Cokelat Panas", category: "minuman", subcategory: "non_kopi", price: 15000, image: "cokelat_panas.jpg" },
        { id: 37, name: "Teh Tarik", category: "minuman", subcategory: "non_kopi", price: 18000, image: "teh_tarik.jpg" },
        { id: 38, name: "Milk Tea", category: "minuman", subcategory: "non_kopi", price: 20000, image: "milk_tea.jpg" },
        { id: 39, name: "Matcha", category: "minuman", subcategory: "non_kopi", price: 22000, image: "matcha.jpg" }
    ],
    cart: []
};
