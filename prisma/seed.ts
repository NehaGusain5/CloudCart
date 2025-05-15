import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 12)
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Create sample user
  const userPassword = await hash('user123', 12)
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: userPassword,
      role: 'USER',
    },
  })

  // Create categories
  const categories = [
    { name: 'T-Shirts', image: '/images/c-tshirts.jpg', description: 'Trendy and comfortable t-shirts for men and women' },
    { name: 'Jeans', image: '/images/c-jeans.jpg', description: 'Stylish denim collection for all occasions' },
    { name: 'Shoes', image: '/images/c-shoes.jpg', description: 'Premium footwear for every step' },
    { name: 'Bags', image: '/images/c-bags.jpg', description: 'Fashionable bags for daily use' },
    { name: 'Watches', image: '/images/c-watches.jpg', description: 'Elegant timepieces for every wrist' },
    { name: 'Tops', image: '/images/c-tops.jpg', description: 'Stylish tops and blouses for women' },
    { name: 'Ethnic', image: '/images/c-ethinic.jpg', description: 'Traditional Indian ethnic wear' },
    { name: 'Hoodies', image: '/images/c-hoddies.webp', description: 'Comfortable and trendy hoodies' },
  ]

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    })
  }

  // Create products
  const tshirtCategory = await prisma.category.findFirst({ where: { name: 'T-Shirts' } })
  const jeansCategory = await prisma.category.findFirst({ where: { name: 'Jeans' } })
  const shoesCategory = await prisma.category.findFirst({ where: { name: 'Shoes' } })
  const bagsCategory = await prisma.category.findFirst({ where: { name: 'Bags' } })
  const watchesCategory = await prisma.category.findFirst({ where: { name: 'Watches' } })
  const topsCategory = await prisma.category.findFirst({ where: { name: 'Tops' } })
  const ethnicCategory = await prisma.category.findFirst({ where: { name: 'Ethnic' } })
  const hoodiesCategory = await prisma.category.findFirst({ where: { name: 'Hoodies' } })

  // T-Shirts
  if (tshirtCategory) {
    await prisma.product.create({
      data: {
        name: 'Classic T-Shirt',
        description: 'Premium cotton round neck t-shirt with perfect fit and comfort. Ideal for daily wear.',
        price: 599,
        stock: 100,
        images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
        categoryId: tshirtCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Men Trendy T-Shirt',
        description: 'Stylish graphic printed t-shirt made with high-quality cotton. Perfect for casual outings.',
        price: 799,
        stock: 75,
        images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
        categoryId: tshirtCategory.id,
      },
    })
  }

  // Jeans
  if (jeansCategory) {
    await prisma.product.create({
      data: {
        name: 'Slim Fit Blue Jeans',
        description: 'Classic slim fit denim jeans with perfect stretch. Suitable for all-day comfort.',
        price: 1499,
        stock: 50,
        images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
        categoryId: jeansCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Denim Jeans',
        description: 'Premium quality denim jeans with modern wash. Perfect fit for casual wear.',
        price: 1699,
        stock: 40,
        images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
        categoryId: jeansCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Women Jeans',
        description: 'Comfortable and stylish jeans for women with perfect stretch and fit.',
        price: 1899,
        stock: 35,
        images: ['/images/p23-1.jpg', '/images/p23-2.jpg'],
        categoryId: jeansCategory.id,
      },
    })
  }

  // Shoes
  if (shoesCategory) {
    await prisma.product.create({
      data: {
        name: 'Classic Sneakers',
        description: 'Versatile sneakers perfect for casual wear. Features comfortable cushioning.',
        price: 1999,
        stock: 60,
        images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
        categoryId: shoesCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Running Shoes',
        description: 'Professional running shoes with advanced cushioning technology.',
        price: 2499,
        stock: 45,
        images: ['/images/p32-1.jpg', '/images/p32-2.jpg'],
        categoryId: shoesCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'School Shoes',
        description: 'Durable and comfortable school shoes with long-lasting quality.',
        price: 1299,
        stock: 40,
        images: ['/images/p33-1.webp', '/images/p33-2.webp'],
        categoryId: shoesCategory.id,
      },
    })
  }

  // Bags
  if (bagsCategory) {
    await prisma.product.create({
      data: {
        name: 'Leather Tote Bag',
        description: 'Spacious and elegant tote bag perfect for work and daily use.',
        price: 2999,
        stock: 30,
        images: ['/images/p61-1.jpg', '/images/p61-2.jpg'],
        categoryId: bagsCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Tote Bag for Women',
        description: 'Stylish and practical tote bag with multiple compartments.',
        price: 1499,
        stock: 55,
        images: ['/images/p62-1.jpg', '/images/p62-2.jpg'],
        categoryId: bagsCategory.id,
      },
    })
  }

  // Watches
  if (watchesCategory) {
    await prisma.product.create({
      data: {
        name: 'Classic Analog Watch',
        description: 'Premium analog watch with genuine leather strap and water resistance.',
        price: 3499,
        stock: 25,
        images: ['/images/p72-1.jpg', '/images/p72-2.jpg', '/images/p72-3.jpg'],
        categoryId: watchesCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health monitoring and notifications.',
        price: 4999,
        stock: 35,
        images: ['/images/p71-1.jpg', '/images/p71-2.jpg', '/images/p71-3.jpg'],
        categoryId: watchesCategory.id,
      },
    })
  }

  // Tops
  if (topsCategory) {
    await prisma.product.create({
      data: {
        name: 'Floral Blouse',
        description: 'Elegant floral print blouse perfect for any occasion.',
        price: 899,
        stock: 40,
        images: ['/images/p52-1.jpg', '/images/p52-2.jpg'],
        categoryId: topsCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Casual Top',
        description: 'Comfortable and stylish casual top for everyday wear.',
        price: 799,
        stock: 50,
        images: ['/images/p51-1.jpg', '/images/p51-2.jpg', '/images/p51-3.jpg'],
        categoryId: topsCategory.id,
      },
    })
  }

  // Ethnic
  if (ethnicCategory) {
    await prisma.product.create({
      data: {
        name: 'Traditional Kurta',
        description: 'Elegant traditional kurta with intricate embroidery work.',
        price: 1999,
        stock: 30,
        images: ['/images/p81-1.jpg', '/images/p81-2.jpg'],
        categoryId: ethnicCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Ethnic Blue Color Suit',
        description: 'Beautiful ethnic suit set with modern design elements.',
        price: 2499,
        stock: 25,
        images: ['/images/p82-1.jpg', '/images/p82-2.jpg'],
        categoryId: ethnicCategory.id,
      },
    })
  }

  // Hoodies
  if (hoodiesCategory) {
    await prisma.product.create({
      data: {
        name: 'Acid Washed Black Printed Hoodie',
        description: 'Trendy oversized hoodie with acid wash effect. Perfect for street style.',
        price: 1799,
        stock: 45,
        images: ['/images/p41-1.jpg', '/images/p41-2.jpg', '/images/p41-3.webp'],
        categoryId: hoodiesCategory.id,
      },
    })
    await prisma.product.create({
      data: {
        name: 'Men Hoodie',
        description: 'Classic comfortable hoodie with premium cotton blend fabric.',
        price: 1499,
        stock: 35,
        images: ['/images/p42-1.jpg', '/images/p42-2.jpg'],
        categoryId: hoodiesCategory.id,
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 