# 🚀 IDE PROMPT — Build pay.crypto Website

---

## LOGO & BRAND IDENTITY (from provided assets)

The logo is: **"Pay.Ȼrypto"** — white text on pure black background, where the "C" in "Crypto" is replaced by a **golden Bitcoin/crypto ₵ symbol** (a C with two horizontal double-strikes through it).

**Brand motif:** A **4-pointed star ✦** (sparkle/star shape) appears in the bottom-right of the logo as a subtle brand accent. Use this star motif as a decorative element throughout the site — in section dividers, hero backgrounds, bullet points, and card accents.

**Logo files:**
- `/public/logo.png` → the horizontal text logo (Pay.Ȼrypto) — white text + gold C symbol on black
- `/public/logo-icon.png` → the icon-only version (just the gold ₵ coin symbol) — use as favicon and mobile icon

**Logo rendering in Navbar:**
```jsx
<img src="/logo.png" alt="Pay.Crypto" className="h-8 md:h-10" />
```

---

## PROJECT OVERVIEW

Build a complete, production-ready React website for **Pay.Crypto** — a premium crypto payment solutions brand targeting Indian businesses and individuals. The company offers three core services: **Payment Gateway**, **Peer-to-Peer (P2P)**, and **OTC (Over-The-Counter)** trading, exclusively for **USDT and USDC**.

This is a **frontend-only** React app (no backend). Contact form submissions are stored in `localStorage`. An admin dashboard (hidden URL) reads those submissions. No public authentication — only a single hidden admin login protected by an ENV variable password.

---

## TECH STACK

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts — Inter, Space Mono |
| Crypto rates | CoinGecko public API (for calculator) |
| State/Storage | React hooks + `localStorage` |
| Env vars | Vite `.env` (admin password ONLY) |

> Note: Font choice is Inter (geometric sans-serif) matching the clean logo aesthetic. No serif fonts — the brand is modern and precise, not editorial.

---

## DESIGN SYSTEM

### Color Palette (extracted from logo)
```
Background:        #000000   ← pure black (exact logo background)
Surface:           #0D0D0D   ← cards and elevated surfaces
Card:              #141414   ← card backgrounds
Gold Primary:      #C9A84C   ← warm muted gold from the logo coin
Gold Light:        #DDB96A   ← hover states, highlights
Gold Dark:         #A8892E   ← pressed states, deeper gold
Gold Muted:        rgba(201, 168, 76, 0.10)   ← subtle tinted backgrounds
Gold Border:       rgba(201, 168, 76, 0.22)   ← card and input borders
Text Primary:      #FFFFFF   ← pure white (exact logo text color)
Text Secondary:    #AAAAAA   ← subheadings, descriptive text
Text Muted:        #555555   ← timestamps, fine print
Border Dark:       #1E1E1E   ← subtle dividers
Star Accent:       #888888   ← the 4-pointed star ✦ decorative element
```

### Typography
- **All headings H1–H4:** `Inter` weight 700/800 — not serif. Match the logo's clean geometric feel.
- **Body / UI / labels:** `Inter` weight 400/500/600
- **Crypto values / amounts / codes:** `Space Mono` — monospaced, for numbers, rates, wallet-style data

### 4-Pointed Star Brand Motif ✦
The star (✦ Unicode U+2726) is a key brand element from the logo. Use it:
- As section dividers: `✦ — — — ✦`
- In the hero background (scattered, very low opacity, various sizes)
- As bullet points on feature lists
- In the ticker strip between items
- As a decorative accent on card top-left or headings
- Style it in `#C9A84C` gold for emphasis or `#333333` for subtle background decoration

### Tailwind Config Extensions (`tailwind.config.js`)
```js
extend: {
  colors: {
    gold: {
      DEFAULT: '#C9A84C',
      light: '#DDB96A',
      dark: '#A8892E',
      muted: 'rgba(201,168,76,0.10)',
      border: 'rgba(201,168,76,0.22)',
    },
    dark: {
      bg: '#000000',
      surface: '#0D0D0D',
      card: '#141414',
      border: '#1E1E1E',
    }
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['"Space Mono"', 'monospace'],
  },
  backgroundImage: {
    'gold-gradient': 'linear-gradient(135deg, #A8892E 0%, #C9A84C 45%, #DDB96A 100%)',
    'hero-stars': `
      radial-gradient(ellipse at 15% 40%, rgba(201,168,76,0.06) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 15%, rgba(201,168,76,0.04) 0%, transparent 50%)
    `,
  }
}
```

---

## CONTACT INFO (PUBLIC — hardcode directly in components)

```
Instagram:  https://www.instagram.com/paycryptocurrency.ai
WhatsApp:   +91 72190 49821  (international: 917219049821)
Email:      support@pay.crypto        ← placeholder, update when live
Phone:      +91 72190 49821           ← same as WhatsApp number
```

These are **public** — embed directly in Footer, Contact page, and wherever appropriate. Do NOT put these in `.env`.

---

## ENVIRONMENT VARIABLES

### `.env` (ONLY the admin password goes here — never commit)
```env
VITE_ADMIN_PASSWORD_HASH=cGF5Y3J5cHRvYWRtaW4yMDI1
# This is base64("paycryptoadmin2025") — change before going live.
# To generate: open browser console and run: btoa("yournewpassword")
```

### `.env.example` (commit this as documentation)
```env
VITE_ADMIN_PASSWORD_HASH=YOUR_BASE64_ENCODED_PASSWORD_HERE
# Generate: btoa("yourpassword") in browser console
```

> Everything else (WhatsApp, Instagram, emails) is hardcoded in components — it's public info.

---

## HARDCODED CONSTANTS FILE — `src/constants/contact.js`

```js
export const CONTACT = {
  whatsapp: "917219049821",
  whatsappDisplay: "+91 72190 49821",
  phone: "+91 72190 49821",
  email: "support@pay.crypto",
  instagram: "https://www.instagram.com/paycryptocurrency.ai",
  instagramHandle: "@paycryptocurrency.ai",
  twitter: "",          // add when available
  linkedin: "",         // add when available
  whatsappMessage: "Hi Pay.Crypto, I have a query regarding your services.",
}
```

Import this constant wherever contact details are needed.

---

## FILE STRUCTURE

```
pay-crypto/
├── public/
│   ├── logo.png              ← horizontal "Pay.Crypto" logo (white + gold)
│   ├── logo-icon.png         ← icon-only gold ₵ symbol (for favicon)
│   └── favicon.ico           ← use logo-icon.png converted
├── src/
│   ├── assets/
│   ├── constants/
│   │   └── contact.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── GoldButton.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── StarDivider.jsx       ← the ✦ brand divider
│   │   │   └── Ticker.jsx
│   │   ├── CryptoCalculator.jsx
│   │   ├── ContactForm.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PaymentGateway.jsx
│   │   ├── P2P.jsx
│   │   ├── OTC.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfUse.jsx
│   │   ├── Disclaimer.jsx
│   │   ├── CookiesPolicy.jsx
│   │   └── admin/
│   │       ├── AdminLogin.jsx
│   │       └── AdminDashboard.jsx
│   ├── context/
│   │   └── AdminContext.jsx
│   ├── utils/
│   │   └── auth.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                      ← ONLY admin password hash, never commit
├── .env.example              ← commit this
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ROUTING (`App.jsx`)

```
/                       → Home
/payment-gateway        → PaymentGateway
/p2p                    → P2P
/otc                    → OTC
/contact                → Contact
/privacy-policy         → PrivacyPolicy
/terms-of-use           → TermsOfUse
/disclaimer             → Disclaimer
/cookies-policy         → CookiesPolicy
/secure-admin           → AdminLogin       (hidden, not in navbar or footer)
/secure-admin/dashboard → AdminDashboard   (protected, redirect if not authed)
*                       → NotFound (404)
```

---

## NAVBAR COMPONENT — `Navbar.jsx`

### Layout
```
[Nav links left]        [LOGO CENTER]        [Nav links right + CTA]
```

### Left Nav Links
- Home
- Payment Gateway
- P2P

### Right Nav Links
- OTC
- Contact
- [Get Started] → gold gradient pill button → links to `/contact`

### Behavior
- Logo **absolutely centered** in navbar
- Sticky on scroll: after 60px, apply `backdrop-blur-md bg-black/85 border-b border-[#1E1E1E]`
- On mobile (<768px): hamburger (three lines in gold), full-screen overlay menu with links stacked vertically
- Active link indicator: gold bottom underline or text in `#C9A84C`
- Logo height: `h-8 md:h-10`

---

## FOOTER COMPONENT — `Footer.jsx`

### Layout (3 columns + bottom bar)

**Column 1:** Logo + tagline
- `<img src="/logo.png" />` (logo, white version)
- Tagline: "The future of crypto payments — fast, borderless, unstoppable."
- Social row: Instagram icon → `CONTACT.instagram` | WhatsApp icon → `wa.me/CONTACT.whatsapp`

**Column 2:** Quick Links
- Home · Payment Gateway · P2P · OTC · Contact Us

**Column 3:** Legal & Contact
- Privacy Policy · Terms of Use · Disclaimer · Cookies Policy
- `✦ {CONTACT.email}`
- `✦ {CONTACT.phoneDisplay}`

**Bottom bar:**
- Gold gradient divider line above (1px, transparent → gold → transparent)
- `© 2025 Pay.Crypto. All rights reserved.`
- Right side: small `✦` star in gold

---

## `StarDivider.jsx` — Brand Element Component

```jsx
// Reusable section divider using the brand's star motif
// Usage: <StarDivider /> between sections or <StarDivider size="sm" />
export const StarDivider = ({ size = "md" }) => (
  <div className="flex items-center justify-center gap-3 py-2">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.3)]" />
    <span className={`text-gold ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>✦</span>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.3)]" />
  </div>
)
```

Use `<StarDivider />` between every major section on every page.

---

## HOME PAGE — `Home.jsx`

### Section 1: Hero
- `min-h-screen` with `background: #000000`
- Background effect: scattered `✦` stars at very low opacity (0.03–0.06), various sizes (8px to 24px), positioned with absolute positioning and pseudo-random positions — these do NOT move, they are static scattered decorations. Plus two subtle radial gold glows (hero-stars gradient).
- **H1 (Inter 800, clamp 52px–88px):**
  ```
  Crypto Payments.
  Redefined. ✦
  ```
  Where `✦` is inline in gold at ~60% the size of the heading text
- The word "Redefined." gets the gold gradient text treatment:
  ```css
  background: linear-gradient(135deg, #A8892E, #C9A84C, #DDB96A);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  ```
- **Subheadline (Inter 400, 18–20px, #AAAAAA):**
  "The lowest fees. 15-minute settlements. No bank freezes. India's most trusted USDT & USDC solution."
- Two CTA buttons (row, gap-4):
  - `[Get Started →]` — gold gradient background, black text, rounded-full, px-8 py-3
  - `[How It Works]` — transparent bg, gold border (1px rgba(201,168,76,0.5)), gold text, rounded-full, px-8 py-3
- Trust line below buttons (Inter 400, 13px, #555555):
  `✦  Trusted by 500+ businesses across India`
- Framer Motion: H1 fades up (y: 30→0, opacity 0→1, duration 0.7), subheadline after 0.15s, buttons after 0.3s, trust line after 0.45s

### Section 2: Ticker / Marquee Strip
- 2px gold divider line above and below the strip
- Background: `#0D0D0D`
- Continuous scroll left, ~35s, infinite, no pause on hover (keep it ambient)
- Content (repeated twice for seamless loop):
  `✦ 15-Min Settlement  ✦ Lowest Fees in India  ✦ No Bank Freeze  ✦ 24 × 7 Available  ✦ High INR Liquidity  ✦ USDT & USDC Only  ✦ Verified P2P Trades  ✦ Institutional OTC  ✦ Zero Chargebacks  ✦ Instant Settlements`
- Text style: Inter 500, 13px, #AAAAAA; `✦` in #C9A84C gold

### Section 3: Three Service Cards
Heading: `What We Offer`
Subheading: `Three services. One seamless experience.`
`<StarDivider />` below heading

Grid: 1 col mobile → 3 col desktop, gap-6

**Card 1 — Payment Gateway**
- Icon: `<Zap />` from lucide in gold
- Title: "Payment Gateway"
- Body: "Accept USDT & USDC on your platform instantly. Built for startups, e-commerce brands, and enterprises across India."
- Bottom: `[Explore →]` → `/payment-gateway` (ghost gold link)

**Card 2 — Peer-to-Peer**
- Icon: `<ArrowLeftRight />` in gold
- Title: "Peer-to-Peer Trading"
- Body: "Buy or sell USDT & USDC directly with verified counterparts. Fast, transparent, and hassle-free."
- Bottom: `[Explore →]` → `/p2p`

**Card 3 — OTC Trading**
- Icon: `<BarChart3 />` in gold
- Title: "OTC Trading"
- Body: "High-volume private settlements with deep liquidity. Ideal for institutions, HNIs, and large corporates."
- Bottom: `[Explore →]` → `/otc`

Card styles: `bg-[#141414] border border-[rgba(201,168,76,0.2)] rounded-2xl p-7`
Hover: `border-[rgba(201,168,76,0.5)] shadow-[0_0_30px_rgba(201,168,76,0.06)]`
Framer Motion: `staggerChildren 0.12s, each card fadeUp`

### Section 4: USP Stats (6 items)
Section heading: `Why Pay.Crypto ✦`

Grid 2-col mobile → 3-col desktop, gap-4:

| Big number (Space Mono, gold) | Label (Inter, #AAAAAA) |
|---|---|
| 15 Min | Settlement Time |
| ~0.X% | Platform Fees |
| 24 / 7 | Always Online |
| ₹0 | Bank Freeze Risk |
| 500+ | Businesses Served |
| 2 Coins | USDT & USDC Only |

Each stat: `bg-[#141414] border border-[#1E1E1E] rounded-xl p-6`, gold top border 2px, hover gold border

### Section 5: Crypto Calculator
`<StarDivider />`
Section heading: `USDT ↔ USDC Converter`
Subtext: `Real-time rates. Zero commitment.`
Center: `<CryptoCalculator />`

### Section 6: How It Works
Heading: `From Zero to Crypto-Ready`

Three steps (horizontal on desktop, vertical on mobile):

```
[1] Choose Service → [→] [2] Submit Details → [→] [3] Go Live
```

Step numbers in Space Mono, gold. Arrow icons between steps (hidden on mobile).

Step 1: "Choose Your Service" — Pick from Gateway, P2P, or OTC based on your needs
Step 2: "Share Your Details" — Fill a short form and tell us about your business
Step 3: "We Set You Up" — Our team onboards you within 24 business hours

### Section 7: Who We Serve
Heading: `Built For Everyone`

4-card grid: Businesses & E-commerce | Individual Traders | Importers / Exporters | Institutions & HNIs

### Section 8: CTA Banner
Full-width, gold gradient background, black text:
Big heading: `Start in Minutes. Scale Forever.`
Subtext: `No setup fees. No hidden charges. Just crypto, done right.`
`[Contact Us →]` button → `/contact` — dark button on gold background

---

## PAYMENT GATEWAY PAGE — `PaymentGateway.jsx`

### Hero
H1: "Crypto Payment Gateway"
Sub: "Accept USDT & USDC payments in 15 minutes. Instant settlements. Zero chargebacks. No bank risks."

### Features (6-card grid)
1. ✦ Instant Settlement — 15-minute fund processing
2. ✦ No Chargebacks — Crypto payments are irreversible and final
3. ✦ Lowest Fees — Flat, transparent pricing with no surprise deductions
4. ✦ Multi-Platform — Web, mobile, or custom API integration
5. ✦ Developer-Friendly — Clean REST API with sandbox environment
6. ✦ 24/7 Monitoring — Always-on operations and support team

### Integration Steps (4-step horizontal flow)
Create Account → Get Credentials → Integrate SDK / API → Accept Payments Live

### Who Uses It
E-commerce stores · SaaS companies · Digital agencies · Freelancers · International sellers

### Contact Form
`<ContactForm serviceType="payment-gateway" />`

---

## P2P PAGE — `P2P.jsx`

### Hero
H1: "Peer-to-Peer Trading"
Sub: "Buy or sell USDT & USDC directly. Verified counterparts. Competitive rates."

### Live Rates Banner
Fetch from CoinGecko: `https://api.coingecko.com/api/v3/simple/price?ids=tether,usd-coin&vs_currencies=inr`
Display: `1 USDT = ₹XX.XX  |  1 USDC = ₹XX.XX  |  Updated X mins ago`
Style: Space Mono font, gold values, #0D0D0D surface, auto-refresh every 60s

### How P2P Works (4 steps)
Post Requirement → Get Matched → Lock Rate → Settle in 15 Min

### Why Choose Our P2P
✦ Verified traders only · ✦ INR & Crypto both accepted · ✦ No hidden spread · ✦ Escrow-backed security · ✦ 24/7 availability

### Contact Form
`<ContactForm serviceType="p2p" />`

---

## OTC PAGE — `OTC.jsx`

### Hero
H1: "OTC — Over-The-Counter"
Sub: "High-volume crypto settlements. Private. Fast. Institutional-grade."

### Who Is OTC For
Institutions & Investment Funds · HNIs · Corporate Treasury Teams · Large Importers & Exporters

### OTC Benefits (feature list with ✦ bullets)
✦ No market slippage on large volumes
✦ Personal quote desk with dedicated manager
✦ Private settlement with your chosen counterparty
✦ Custom settlement timelines available
✦ Full confidentiality and compliance

### Minimum Volume Notice (Space Mono styled box)
```
Minimum OTC Volume: $10,000 USDT or USDC equivalent
```
Box: gold border, dark surface, monospace font

### Contact Form
`<ContactForm serviceType="otc" />`

---

## CONTACT PAGE — `Contact.jsx`

### Hero
H1: "Get in Touch ✦"
Sub: "Our team responds within 24 hours. Ready to help you get started."

### Two-column layout (stacks on mobile)

**Left — Contact Details**
Four info cards:
- 📧 Email: `support@pay.crypto`
- 📱 WhatsApp: `+91 72190 49821` (clickable link)
- 📸 Instagram: `@paycryptocurrency.ai` (clickable link to Instagram)
- ⏰ Hours: Available 24 × 7, 365 days

**Right — Contact Form**
`<ContactForm serviceType="general" />` — query field is user-editable here

### WhatsApp Float Button — ONLY ON THIS PAGE
`<WhatsAppButton />` — render it inside `Contact.jsx` return JSX, not globally in App.jsx

---

## CONTACT FORM COMPONENT — `ContactForm.jsx`

### Props
```js
serviceType: "payment-gateway" | "p2p" | "otc" | "general"
```

### Fields
| Field | Type | Required |
|---|---|---|
| Full Name | text | Yes |
| Personal Email | email | Yes |
| Business Email ID | email | No (optional) |
| Phone Number | tel | Yes (+91 hint in placeholder) |
| Company / Business Name | text | No |
| Query Type | text, read-only | Auto-filled |
| Message / Notes | textarea | Yes, min 20 chars |

### Query Auto-fill Map
```js
const queryMap = {
  "payment-gateway": "Payment Gateway Integration Query",
  "p2p":             "Peer-to-Peer (P2P) Trading Query",
  "otc":             "OTC Trading Query",
  "general":         ""    // user types freely
}
```
`general` query field is editable. All others are read-only with a lock icon.

### On Submit
1. Validate required fields, show inline errors
2. Build submission object:
```js
{
  id: `pc_${Date.now()}`,
  serviceType,
  queryType,
  name,
  personalEmail,
  businessEmail: businessEmail || null,
  phone,
  company: company || null,
  message,
  submittedAt: new Date().toISOString(),
  status: "new"
}
```
3. Load `localStorage.getItem("pay_crypto_leads")` → parse → push → save
4. Show success state (replace form with success message):
   ```
   ✦ Message Received
   We'll get back to you within 24 hours.
   [Submit Another]
   ```
5. Success message style: centered, gold ✦ icon, white heading

### Field Styles
- Input: `bg-[#0D0D0D] border border-[#1E1E1E] focus:border-[rgba(201,168,76,0.5)] text-white rounded-xl px-4 py-3 w-full`
- Gold focus ring: `focus:ring-1 focus:ring-[rgba(201,168,76,0.2)]`
- Error: `border-red-500` + `text-red-400 text-xs mt-1`
- Submit button: full-width, gold gradient, black text, rounded-full, py-3.5, font-semibold

---

## CRYPTO CALCULATOR COMPONENT — `CryptoCalculator.jsx`

### API
```
GET https://api.coingecko.com/api/v3/simple/price?ids=tether,usd-coin&vs_currencies=inr,usd
```

### UI Layout
```
┌─────────────────────────────────────────────┐
│  USDT Amount         ↕        USDC Amount   │
│  [_______]      [swap btn]    [_______]     │
│                                              │
│  1 USDT ≈ ₹XX.XX  |  1 USDC ≈ ₹XX.XX      │
│               Updated: X secs ago ●         │
│                                              │
│  INR Equivalent: ₹ XX,XXX.XX               │
│                                              │
│      [  Inquire About This Trade →  ]       │
└─────────────────────────────────────────────┘
```

### Logic
- User types USDT → calculate USDC (USDT / USDC price ratio) and INR equivalent
- User types USDC → calculate USDT and INR equivalent
- Swap button flips the active input field
- Refresh rates every 60s, show spinning `●` indicator while fetching
- On API fail: show last known rates + "(rates may be delayed)" in muted text
- CTA button: navigates to `/contact` or opens contact section

### Styles
- Container: `bg-[#141414] border border-[rgba(201,168,76,0.2)] rounded-2xl p-8 max-w-xl mx-auto`
- Amount inputs: Space Mono font, large (24px), gold text color when populated
- Swap button: circular, gold border, ↕ arrow icon, hover: gold bg

---

## WHATSAPP BUTTON — `WhatsAppButton.jsx`

```jsx
import { CONTACT } from '../constants/contact'

const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

// Render: fixed, bottom-6 right-6, z-50
// Circle button, 56px diameter, background: #25D366 (WhatsApp green)
// WhatsApp SVG icon in white, 28px
// Pulsing ring animation: keyframe that expands a ring outward, 2s infinite
// Opens in _blank
// Tooltip on hover: "Chat on WhatsApp"
```

**CRITICAL:** Only render `<WhatsAppButton />` inside `Contact.jsx`, NOT in `App.jsx`.

---

## ADMIN SYSTEM

### `utils/auth.js`
```js
export const encodePassword = (pwd) => btoa(pwd)

export const checkPassword = (input) =>
  btoa(input) === import.meta.env.VITE_ADMIN_PASSWORD_HASH

export const setAdminSession = () =>
  sessionStorage.setItem('pc_admin_auth', '1')

export const clearAdminSession = () =>
  sessionStorage.removeItem('pc_admin_auth')

export const isAdminAuthed = () =>
  sessionStorage.getItem('pc_admin_auth') === '1'
```

### Admin Login — `/secure-admin`
- Minimal dark page, no navbar or footer
- Center-aligned card (max-width: 360px)
- `<img src="/logo.png" />` at top of card
- H2: "Secure Access" (no mention of "admin")
- Single password field (type="password"), Enter key submits
- `[Unlock →]` button, gold gradient
- Wrong password: shake animation + red text "Incorrect credentials"
- 3 failed attempts → 30-second cooldown with countdown display
- On success: `setAdminSession()` → `navigate('/secure-admin/dashboard')`

### Admin Dashboard — `/secure-admin/dashboard`
- Check `isAdminAuthed()` on mount → redirect to `/secure-admin` if false
- Minimal dark interface, no public navbar/footer
- Top bar: Pay.Crypto logo (small) + "Submissions Dashboard" + `[Logout]` button
- `[Logout]` clears session → redirect to `/secure-admin`

**Stats row (4 cards):**
- Total Leads | New (unread) | Today's Leads | This Week's Leads

**Filter tabs:**
All | Payment Gateway | P2P | OTC | General | 🔴 New Only

**Table columns:**
`#` | Service | Name | Email | Phone | Company | Submitted | Status | Actions

**Row interactions:**
- Click row → expand inline accordion showing full message/notes
- Status badge: "New" (#C9A84C gold pill) | "Read" (#333 gray pill)
- Mark Read button (eye icon)
- Delete button (trash icon) with confirm dialog: "Are you sure? This cannot be undone."

**Action buttons:**
- `[⬇ Export CSV]` → generates CSV of all filtered submissions, triggers download
- `[🗑 Clear All]` → shows modal, user must type "DELETE" to confirm

**Pagination:** 20 rows per page

---

## POLICY PAGES (shared layout)

All four policy pages use this layout:
- Page hero: H1 centered, `#000000` background, gold `✦` accent
- `<StarDivider />` below hero
- Single column content: `max-w-3xl mx-auto px-6`
- Body text: Inter 400, 16px, `#AAAAAA`, line-height 1.75
- Section headings (H2): Inter 700, 22px, `#FFFFFF`, preceded by `✦` in gold
- Last updated: `Inter 400, 13px, #555555` below page title
- Gold gradient divider lines between H2 sections

### Privacy Policy `/privacy-policy`
Sections: Information We Collect · How We Use It · Data Storage · Cookies · Third Parties · Your Rights · Contact for Privacy · Policy Updates

### Terms of Use `/terms-of-use`
Sections: Acceptance of Terms · Service Description · User Obligations · Prohibited Use · IP Rights · Liability Limitation · Governing Law (India) · Amendments · Contact

### Disclaimer `/disclaimer`
Sections: No Financial Advice · Crypto Risk Disclosure · No Guarantee · Third-Party Links · Accuracy Disclaimer · Jurisdictional Notice · India Regulatory Note (SEBI / RBI context)

### Cookies Policy `/cookies-policy`
Sections: What Are Cookies · Types We Use (essential, analytics, preference) · Managing Cookies · Third-Party Cookies · Updates

> Write all policy content with realistic, professional language appropriate for a crypto payment business operating in India. Reference RBI, SEBI, and FEMA where relevant. Include PMLA (Prevention of Money Laundering Act) compliance language in Terms.

---

## ANIMATIONS (Framer Motion Patterns)

```js
// Standard fade-up (use on all section headings and content blocks)
const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
}

// Stagger wrapper (use on card grids)
const staggerWrap = {
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

// Card hover
const cardHover = {
  whileHover: { scale: 1.015, y: -3 },
  transition: { duration: 0.2 }
}

// Admin login shake on wrong password
const shake = {
  x: [0, -8, 8, -8, 8, 0],
  transition: { duration: 0.4 }
}
```

Apply `fadeUp` to: every section heading, every feature card, every stat, every step
Apply `staggerWrap` to: all 3-column and 4-column grids

---

## `index.css` — GLOBAL STYLES

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background-color: #000000;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection {
    background-color: rgba(201, 168, 76, 0.25);
    color: #FFFFFF;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #000000; }
  ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 3px; }
}

@layer components {
  .btn-gold {
    @apply bg-gradient-to-r from-[#A8892E] via-[#C9A84C] to-[#DDB96A]
           text-black font-semibold rounded-full px-8 py-3 
           transition-all duration-200 
           hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] 
           active:scale-[0.97];
  }
  .btn-ghost {
    @apply border border-[rgba(201,168,76,0.4)] text-[#C9A84C]
           rounded-full px-8 py-3 font-semibold
           transition-all duration-200
           hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.05)]
           active:scale-[0.97];
  }
  .card {
    @apply bg-[#141414] border border-[rgba(201,168,76,0.18)]
           rounded-2xl transition-all duration-200
           hover:border-[rgba(201,168,76,0.45)]
           hover:shadow-[0_0_40px_rgba(201,168,76,0.05)];
  }
  .input-field {
    @apply bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl px-4 py-3 w-full
           text-white placeholder:text-[#555555]
           focus:outline-none focus:border-[rgba(201,168,76,0.5)]
           focus:ring-1 focus:ring-[rgba(201,168,76,0.2)]
           transition-all duration-200;
  }
  .section-py { @apply py-20 md:py-28; }
  .container-xl { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
}

/* Gold text gradient utility */
.text-gold-gradient {
  background: linear-gradient(135deg, #A8892E 0%, #C9A84C 40%, #DDB96A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Ticker marquee */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track { animation: marquee 35s linear infinite; }

/* WhatsApp pulse ring */
@keyframes wa-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
.wa-pulse { animation: wa-pulse 2s infinite; }
```

---

## PACKAGE.JSON DEPENDENCIES

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.24.0",
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
```

---

## INDEX.HTML — SEO & FAVICON

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/logo-icon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pay.Crypto — India's Fastest Crypto Payment Gateway</title>
  <meta name="description" content="Accept USDT & USDC in 15 minutes. India's lowest-fee crypto payment gateway, P2P trading, and OTC services. No bank freeze. 24/7 available." />
  <meta name="keywords" content="crypto payment gateway india, USDT payment, USDC payment, P2P crypto india, OTC crypto india, crypto settlement" />
  <meta property="og:title" content="Pay.Crypto — Crypto Payments Redefined ✦" />
  <meta property="og:description" content="15-minute settlements. Lowest fees. No bank freeze. USDT & USDC specialists." />
  <meta property="og:image" content="/logo.png" />
  <meta name="theme-color" content="#C9A84C" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## SCROLL TO TOP + 404

### `ScrollToTop.jsx` (render in App.jsx above Routes)
```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
```

### `NotFound.jsx` (route: `*`)
- Dark page, centered
- Large `✦` in gold (64px)
- H1: "404 — Page Not Found"
- Body: "The page you're looking for doesn't exist."
- `[← Back to Home]` gold button

---

## IMPLEMENTATION ORDER

1. `npm create vite@latest pay-crypto -- --template react`
2. Install all dependencies listed above
3. Configure Tailwind, `index.css`, add Google Fonts to `index.html`
4. Create `src/constants/contact.js` with all public contact info
5. Create `utils/auth.js`
6. Build `Navbar.jsx` and `Footer.jsx` — the layout shell
7. Build `App.jsx` with all routes + `ScrollToTop` + `ProtectedRoute`
8. Build `StarDivider.jsx` and other UI primitives
9. Build `Home.jsx` section by section (longest page)
10. Build `CryptoCalculator.jsx` (needs CoinGecko API integration)
11. Build `ContactForm.jsx` + localStorage logic
12. Build `WhatsAppButton.jsx`
13. Build `PaymentGateway.jsx`, `P2P.jsx`, `OTC.jsx`
14. Build `Contact.jsx` (with WhatsAppButton rendered here only)
15. Build 4 policy pages
16. Build `AdminLogin.jsx` + `AdminDashboard.jsx`
17. Build `NotFound.jsx`
18. Final pass: responsive, animations, accessibility, console errors

---

## FINAL CHECKLIST

- [ ] Logo centered in navbar on all pages
- [ ] ✦ star motif used consistently across site
- [ ] Exact gold color `#C9A84C` used from logo — not a different gold
- [ ] Instagram link: `https://www.instagram.com/paycryptocurrency.ai`
- [ ] WhatsApp: `+91 72190 49821` (hardcoded in `contact.js`)
- [ ] WhatsApp float button: ONLY on `/contact` page
- [ ] Admin password: ONLY from `.env` as base64 hash
- [ ] All other contact info: public, in `contact.js`
- [ ] Contact forms save to `localStorage` key `"pay_crypto_leads"`
- [ ] Admin dashboard reads + displays all form submissions
- [ ] CSV export works
- [ ] Crypto calculator fetches live USDT/USDC/INR rates
- [ ] Ticker/marquee strip on home page
- [ ] All 3 service pages with own contact forms (pre-filled query)
- [ ] 4 policy pages with proper India-relevant legal language
- [ ] Mobile responsive (hamburger nav, stacked grids)
- [ ] Framer Motion animations on all sections
- [ ] `ScrollToTop` on route change
- [ ] 404 page
- [ ] `.env.example` committed, `.env` in `.gitignore`
- [ ] `index.html` SEO meta tags set

---

*End of prompt. Build the complete Pay.Crypto React website as specified above.*
