# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
