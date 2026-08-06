# IK.KO Energy Ltd - Corporate Website & LPG Gas Delivery Portal

Official web application for **IK.KO Energy Ltd**, Owerri's premier Liquefied Petroleum Gas (LPG) supplier, cylinder sales outlet, and clean energy conversion provider in Imo State, Nigeria.

---

## 🌟 Key Features

- **🚚 Doorstep Gas Delivery**: Fast cylinder refilling and delivery service across Owerri and surrounding Imo State locations.
- **⚖️ Digital Scale Refilling**: Calibrated electronic scale refilling guaranteeing 100% full, unadulterated cooking gas weight.
- **📦 Cylinders & Accessories Store**: Complete catalog of SON-certified LPG cylinders (3kg, 6kg, 9kg, 12.5kg, 25kg, 50kg), auto shut-off regulators, stainless steel burners, 3-layer reinforced hoses, and heavy brass fittings.
- **🧮 Interactive Gas Usage Calculator**: Instant calculator tool for households and commercial kitchens to estimate monthly gas consumption and cost.
- **🚗 Petrol-to-Gas Engine Conversion**: Specialized dual-fuel CNG/LPG conversion for petrol generators, tricycles, and vehicles, saving up to 60% on fuel expenses.
- **💬 Direct Order Modal & Quick Call/WhatsApp**: One-click ordering, call dispatch, and instant WhatsApp chat integration.
- **✉️ Direct Messaging & Location Map**: Integrated contact form powered by EmailJS and interactive Google Maps direction guide to MCC Road, Golden Gate, Owerri.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool & Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: `motion/react`
- **Icons**: `lucide-react`
- **Email Notifications**: EmailJS (`@emailjs/browser`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18.0.0 or higher
- npm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/example/ikko-energy.git
   cd ikko-energy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub / GitLab / Bitbucket**:
   ```bash
   git add .
   git commit -m "Initial commit for IK.KO Energy website"
   git push origin main
   ```

2. **Import Project into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New** > **Project**.
   - Select your GitHub repository.

3. **Configure Project Settings**:
   - **Framework Preset**: Vite (automatically detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variables**:
   Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

5. **Deploy**:
   - Click **Deploy**. Vercel will build and assign a production HTTPS domain to your app.

---

## 📍 Company Contact & Location

- **Company Name**: IK.KO Energy Ltd
- **Location**: MCC Road, Golden Gate, Umuoba Uratta, Owerri, Imo State, Nigeria
- **Phone**: [+234 707 333 3969](tel:07073333969)
- **Email**: [ik.koenergyltd@gmail.com](mailto:ik.koenergyltd@gmail.com)
- **Business Hours**: 
  - Mon - Sat: 7:30 AM - 7:00 PM
  - Sun: 10:00 AM - 5:00 PM
