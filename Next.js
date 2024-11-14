# Create a new Next.js project
npx create-next-app@latest chinmaya-kitchen-dashboard --typescript --tailwind --eslint

# Navigate to project directory
cd chinmaya-kitchen-dashboard

# Install required dependencies
npm install @radix-ui/react-tabs @radix-ui/react-slot lucide-react clsx class-variance-authority
npm install @/components/ui/button @/components/ui/card @/components/ui/tabs

# Create component directories
mkdir -p components/ui
