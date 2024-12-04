# Use the official Node.js 18 image as a parent image
FROM public.ecr.aws/docker/library/node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
# RUN pnpm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the app
CMD ["pnpm", "dev"]
