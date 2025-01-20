docker compose up -d
echo "- Waiting for database"
./scripts/wait-for-it.sh "postgresql://postgres:postgres@localhost:5433/postgres"
echo "- Database ready"
npx prisma migrate dev --name init
npm run test 
docker-compose down 