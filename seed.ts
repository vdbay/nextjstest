import {
  HeroWidgetSchema,
  MarkdownWidgetSchema,
} from "@/lib/validators/widget";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const aboutPage = await prisma.page.upsert({
    where: { slug: "about" },
    update: {
      slug: "about",
      title: "Our Company",
    },
    create: {
      slug: "about",
      title: "Our Company",
    },
  });

  const heroData = HeroWidgetSchema.parse({
    title: "Our Company",
    imageSrc:
      "https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee/content/2.jpg",
    imageAlt: "Khasfee Imperiale",
  });

  const aboutHeroSection = await prisma.section.upsert({
    where: { slug: "about-hero" },
    update: {
      type: "hero",
      slug: "about-hero",
      title: "Our Company",
      data: JSON.stringify(heroData),
    },
    create: {
      type: "hero",
      slug: "about-hero",
      title: "Our Company",
      data: JSON.stringify(heroData),
    },
  });

  const markdownData = MarkdownWidgetSchema.parse({
    content: `# Tentang Khasfee Imperiale

**Khasfee Imperiale** adalah brand perawatan kulit mewah yang mengusung filosofi *“elegance through nature.”* Kami percaya bahwa kulit yang sehat dan bercahaya tidak membutuhkan kompromi antara kualitas, kemewahan, dan keberlanjutan.

Didirikan sebagai bisnis keluarga, Khasfee tumbuh dari komitmen terhadap kejujuran formulasi, efektivitas bahan alami, dan pelayanan yang personal. Setiap produk kami diformulasikan dengan teliti menggunakan bahan-bahan alami berkualitas tinggi dan diproduksi dalam batch terbatas untuk menjaga kesegaran dan efektivitas.

---

## Visi Kami

Menjadi pelopor lokal dalam industri skincare mewah berbasis alami, dengan sistem afiliasi yang mendorong pertumbuhan bersama dan membuka peluang ekonomi untuk komunitas kami.

## Misi Kami

- Menyediakan produk yang aman, efektif, dan elegan untuk semua jenis kulit.
- Memberdayakan individu melalui sistem afiliasi dengan komisi hingga **17%**.
- Membangun hubungan jangka panjang dengan pelanggan dan reseller berbasis kepercayaan dan transparansi.
- Mengintegrasikan teknologi dan otomasi untuk efisiensi operasional skala nasional.

---

## Nilai-nilai Kami

🌿 **Keaslian** – Hanya menggunakan bahan yang kami percaya dan bisa kami pertanggungjawabkan.  
💼 **Profesionalisme** – Mulai dari formulasi hingga pengiriman, semua dijalankan dengan standar tinggi.  
🤝 **Kebersamaan** – Kami tumbuh bersama pelanggan dan mitra, bukan hanya sebagai brand, tapi sebagai ekosistem.  
🚀 **Inovasi Terbuka** – Menggabungkan teknologi, efisiensi, dan skema bisnis berbasis komunitas.

---

Terima kasih telah menjadi bagian dari perjalanan kami.  
Kami percaya bahwa setiap orang berhak tampil percaya diri—alami, mewah, dan tanpa kompromi.

**#KhasfeeImperiale**  
`,
  });

  const aboutMarkdownSection = await prisma.section.upsert({
    where: { slug: "about-markdown" },
    update: {
      type: "markdown",
      slug: "about-markdown",
      title: "Khasfee Imperiale",
      data: JSON.stringify(markdownData),
    },
    create: {
      type: "markdown",
      slug: "about-markdown",
      title: "Khasfee Imperiale",
      data: JSON.stringify(markdownData),
    },
  });

  await prisma.page_section.upsert({
    where: { id: 1001 },
    update: {
      id: 1001,
      page_id: aboutPage.id,
      section_id: aboutHeroSection.id,
      order: 1,
    },
    create: {
      id: 1001,
      page_id: aboutPage.id,
      section_id: aboutHeroSection.id,
      order: 1,
    },
  });

  await prisma.page_section.upsert({
    where: { id: 1002 },
    update: {
      id: 1002,
      page_id: aboutPage.id,
      section_id: aboutMarkdownSection.id,
      order: 2,
    },
    create: {
      id: 1002,
      page_id: aboutPage.id,
      section_id: aboutMarkdownSection.id,
      order: 2,
    },
  });

  console.log("✅ Seed completed.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
