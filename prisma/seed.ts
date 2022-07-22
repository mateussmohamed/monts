import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  const bitcoin = await db.currency.upsert({
    where: { abbreviation: 'BTC' },
    update: {},
    create: {
      name: 'Bitcoin',
      abbreviation: 'BTC'
    }
  })

  const brita = await db.currency.upsert({
    where: { abbreviation: 'BRT' },
    update: {},
    create: {
      name: 'Brita',
      abbreviation: 'BRT'
    }
  })

  const ethereum = await db.currency.upsert({
    where: { abbreviation: 'ETH' },
    update: {},
    create: {
      name: 'Ethereum',
      abbreviation: 'ETH'
    }
  })

  const litecoin = await db.currency.upsert({
    where: { abbreviation: 'LTC' },
    update: {},
    create: {
      name: 'Litecoin',
      abbreviation: 'LTC'
    }
  })

  const tether = await db.currency.upsert({
    where: { abbreviation: 'USDT' },
    update: {},
    create: {
      name: 'Tether',
      abbreviation: 'USDT'
    }
  })

  console.log('Creating default currencies')
  console.log({ bitcoin, brita, ethereum, litecoin, tether })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
