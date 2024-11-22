FROM node:18

# teve que ir no msm container pois na época eu não coloquei o url do backend como env. Agora está tudo localhost e não quero mudar o código

# BACKEND
WORKDIR /backend

COPY ./backend/package*.json ./
RUN npm install

COPY ./backend .

RUN npx prisma generate

# FRONTEND
WORKDIR /frontend

COPY frontend/package*.json .
RUN npm install

COPY frontend .

EXPOSE 3000
EXPOSE 9000

ENV DATABASE_URL=mysql://userTech:userTech@db:3306/techpassdb

CMD ["sh", "-c", "npm run start & cd ../backend && npm run start "]