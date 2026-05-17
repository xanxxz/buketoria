-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('new', 'processing', 'done', 'canceled');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "productName" TEXT NOT NULL,
    "price" INTEGER,
    "citySlug" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "comment" TEXT,
    "address" TEXT,
    "deliveryTime" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
