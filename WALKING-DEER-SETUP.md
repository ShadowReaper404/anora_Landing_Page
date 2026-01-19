# How to Add Walking Deer Animation

## Option 1: Lottie Animation (Best Quality - Recommended)

### Step 1: Install Lottie
```bash
npm install lottie-react
```

### Step 2: Get Free Walking Deer Animation
1. Go to **[LottieFiles.com](https://lottiefiles.com)**
2. Search for: "walking deer" or "deer animation" or "forest animals"
3. Find a free animation you like
4. Click **Download** → Select **Lottie JSON**

**Recommended Animations:**
- Search: "deer walking" - Natural walking animations
- Search: "reindeer" - Colorful, cute animations
- Search: "forest animal" - Peaceful nature animations

### Step 3: Add to Your Project
1. Save the downloaded JSON file as `walking-deer.json`
2. Place it in `src/assets/walking-deer.json`

### Step 4: Update SplashScreen.tsx
Uncomment these lines in `src/components/SplashScreen.tsx`:
```tsx
import Lottie from "lottie-react";
import walkingDeerAnimation from "@/assets/walking-deer.json";
```

And uncomment the Lottie component (already in the file).

---

## Option 2: GIF Animation (Simple)

### Step 1: Download GIF
**Free Resources:**
- **Giphy.com** - Search "deer walking animation"
- **Tenor.com** - Animated GIFs
- **FreeAnimations.org** - Royalty-free GIFs

### Step 2: Add to Project
1. Save as `walking-deer.gif`
2. Place in `src/assets/`

### Step 3: Update Code
Replace the `<AnimatedDeer />` in SplashScreen.tsx with:
```tsx
import walkingDeerGif from "@/assets/walking-deer.gif";

// In component:
<img 
  src={walkingDeerGif} 
  alt="Walking deer" 
  className="w-full h-full object-contain"
/>
```

---

## Option 3: Video Animation

### Step 1: Download Video
**Free Resources:**
- **Pexels.com/videos** - Search "deer animation"
- **Pixabay.com/videos** - Free stock videos
- **Mixkit.co** - Free animation clips

### Step 2: Add to Project
1. Save as `walking-deer.mp4`
2. Place in `src/assets/`

### Step 3: Update Code
Replace the `<AnimatedDeer />` with:
```tsx
import walkingDeerVideo from "@/assets/walking-deer.mp4";

// In component:
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-full object-contain"
>
  <source src={walkingDeerVideo} type="video/mp4" />
</video>
```

---

## Recommended: Lottie Animation
**Why?**
- ✅ Scalable (no pixelation)
- ✅ Small file size (5-50KB vs 500KB+ for GIF)
- ✅ Smooth 60fps animation
- ✅ Customizable colors
- ✅ Best quality

**Top Free Lottie Deer Animations to Try:**
1. Search "deer" on lottiefiles.com - sort by "Popular"
2. Look for animations with walking/movement
3. Download the JSON file
4. Drop it in your project!

---

## Need Help?
After you choose an option and download a file, let me know and I'll help integrate it!
