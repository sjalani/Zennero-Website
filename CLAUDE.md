# Zennero Website - Project Notes

## Current Status
- ✅ Repository cleaned up and optimized (removed 24,615 build artifact files)
- ✅ Proper .gitignore implemented for Next.js project
- ✅ Successfully deployed to GitHub with clean history
- 🔧 **FIXING**: Netlify build errors (ESLint issues)

## Upcoming Tasks

### 🎨 Color Experiment Plan
**Objective**: Test new brand colors across the website

**New Color Palette to Test**:
- **Orange/Amber** (`#FF9B29`) - For logo and primary branding
- **Deep Blue/Navy** (`#1A237E`) - For logo text and navigation
- **Purple/Indigo** (`#4A379A`) - For additional text and accent elements

**Current Colors (to be replaced)**:
- `--zennero-primary`: #ff4082 (Pink) → **#FF9B29** (Orange)
- `--zennero-accent`: #2c3454 (Dark Blue-gray) → **#1A237E** (Deep Blue)
- `--zennero-secondary`: #36AC8B (Teal) → **#4A379A** (Purple)

**Implementation Strategy**:
1. Create new branch: `color-experiment-orange-blue-purple`
2. Update CSS variables in `src/app/globals.css`
3. Test visual impact across all components
4. Compare with original design before merging

### 🚨 Current Build Issues (Priority)
**Critical Errors**:
- [ ] Remove unused `NextRequest` imports from route files
- [ ] Replace `<img>` tags with Next.js `<Image>` components

**Files to Fix**:
- `src/app/poll/[...slug]/route.ts` - Remove unused NextRequest import
- `src/app/register/route.ts` - Remove unused NextRequest import  
- `src/components/Header.tsx` - Lines 51, 177 (favicon images)
- `src/components/Footer.tsx` - Line 58 (favicon image)

## Project Architecture

### Current Tech Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Netlify with GitHub integration

### Color System Structure
Colors are defined as CSS variables in `src/app/globals.css`:
```css
:root {
  --zennero-primary: #ff4082;
  --zennero-accent: #2c3454;
  --zennero-secondary: #36AC8B;
  /* ... other colors */
}
```

Applied via Tailwind classes like:
- `bg-zennero-primary`
- `text-zennero-accent`
- `border-zennero-secondary`

## Development Workflow
1. Always create feature branches for experiments
2. Test builds locally before pushing
3. Use proper TypeScript imports (avoid unused imports)
4. Follow Next.js best practices (Image component vs img tags)
5. Maintain clean git history

## Performance Optimizations Applied
- ✅ Removed 921MB → 801MB repository size
- ✅ Build artifacts properly ignored
- ⏳ **Next**: Optimize images with Next.js Image component
- ⏳ **Next**: Implement proper font optimization

---
*Last updated: Repository cleanup and build error identification*