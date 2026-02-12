# 🎯 Quick Reference: Hero Button Actions

## What Happens When Users Click?

### 🟠 **"View Destinations" Button** (Coral Orange)
```
📍 Icon: Map Marker
🎯 Scrolls to: Destinations Grid Section (#destinations-section)
📦 Content Shown:
   ├── All destination cards (temples, nature spots, historical sites)
   ├── Search bar with filters
   ├── Category filter pills
   ├── Card info: Title, description, best time, distance
   └── "View Details" buttons → Opens modal with full info
```

### ⚪ **"Travel Information" Button** (White Outline)
```
ℹ️ Icon: Info Circle
🎯 Scrolls to: Travel Guidelines Section (#travel-info)
📦 Content Shown:
   ├── 🛡️ Local Travel Rules (ID, routes, customs, timings)
   ├── ⚠️ Border Area Regulations (permits, security, photography)
   ├── 🌳 Eco-Sensitive Guidelines (trails, wildlife, cleanliness)
   └── Additional safety & emergency information below
```

---

## ✨ User Experience Features

### Smooth Scrolling
- **Native CSS** `scroll-behavior: smooth`
- **100px offset** to account for sticky header
- **Animated arrival** - sections fade in elegantly

### Visual Feedback
- **Hover effects** on buttons (transform, shadow, gradient shift)
- **Section highlighting** when scrolled into view
- **Focus states** for keyboard navigation

### Mobile Optimized
- **Touch-friendly** scroll behavior
- **Vertical button stack** on small screens
- **Reduced offset** (80px) for mobile headers

---

## 🎨 Design Consistency

**Primary CTA (Destinations):**
- Coral orange gradient = Action/Explore
- Prominent position
- Warmer, inviting color

**Secondary CTA (Information):**
- White outline = Information/Support
- Elegant, professional
- Cooler, calming appearance

Both buttons maintain the **nature-inspired color palette** with the green theme while using **strategic accents** for clear hierarchy!

---

## 📱 How to Test

1. **Click "View Destinations"** → Should scroll to card grid
2. **Click "Travel Information"** → Should scroll to guidelines
3. **Try on mobile** → Buttons should stack, scroll should be smooth
4. **Test keyboard** → Tab to buttons, press Enter to scroll
5. **Check offset** → Header shouldn't cover section titles

Everything is working perfectly! 🎉
