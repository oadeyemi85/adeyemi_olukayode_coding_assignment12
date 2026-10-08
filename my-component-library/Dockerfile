# ==========================================
# Stage 1: Build the Production Application
# ==========================================
FROM node:18-alpine AS builder

# Set the working directory as required by the assignment rubric
WORKDIR /adeyemi_olukayode_ui_garden

# Copy package management files
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy all project source files
COPY . .

# Build the production static assets
RUN npm run build

# ==========================================
# Stage 2: Serve Production Build via Nginx
# ==========================================
FROM nginx:alpine AS runner

# Create working directory inside runner stage
WORKDIR /adeyemi_olukayode_ui_garden

# Serve the production build from the required working directory.
RUN echo 'server { \
    listen 8083; \
    location / { \
        root /adeyemi_olukayode_ui_garden/build; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Copy the production build into the required working directory
COPY --from=builder /adeyemi_olukayode_ui_garden/build ./build

# Expose port 8083 as specified in the assignment
EXPOSE 8083

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]