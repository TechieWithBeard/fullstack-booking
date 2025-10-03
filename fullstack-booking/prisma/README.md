npx prisma studio
npx prisma migrate deploy --schema=prisma/schema.prisma
npx prisma migrate dev --name init_booking --schema=prisma/schema.prisma
npx prisma migrate dev --name init_booking

<!-- starting docker -->

docker-compose up -d
