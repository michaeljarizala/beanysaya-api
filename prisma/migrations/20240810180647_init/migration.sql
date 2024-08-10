-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "total" INTEGER NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "expiration" VARCHAR(5) NOT NULL,
    "cvv" INTEGER NOT NULL,
    "isPaid" BOOLEAN DEFAULT false,
    "isFulfilled" BOOLEAN DEFAULT false,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
