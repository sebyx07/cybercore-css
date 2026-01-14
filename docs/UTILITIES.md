# Utility Classes Reference

Quick reference for all CYBERCORE CSS utility classes.

## Modular Import

Import only the utilities you need:

```scss
// Import specific utilities
@use 'cybercore-css/utilities/display';
@use 'cybercore-css/utilities/flex';
@use 'cybercore-css/utilities/grid';
@use 'cybercore-css/utilities/spacing';
@use 'cybercore-css/utilities/text';
@use 'cybercore-css/utilities/backgrounds';
@use 'cybercore-css/utilities/borders';
@use 'cybercore-css/utilities/shadows';
@use 'cybercore-css/utilities/transforms';
@use 'cybercore-css/utilities/animation';
@use 'cybercore-css/utilities/transitions';
@use 'cybercore-css/utilities/position';
@use 'cybercore-css/utilities/sizing';
@use 'cybercore-css/utilities/layout';
@use 'cybercore-css/utilities/interactivity';
@use 'cybercore-css/utilities/filters';
@use 'cybercore-css/utilities/accessibility';
```

---

## Display

- `cyber-hidden` - display: none
- `cyber-block` - display: block
- `cyber-inline` - display: inline
- `cyber-inline-block` - display: inline-block
- `cyber-flex` - display: flex
- `cyber-inline-flex` - display: inline-flex
- `cyber-grid` - display: grid

---

## Flexbox

### Direction

- `cyber-flex-row` - flex-direction: row
- `cyber-flex-col` - flex-direction: column

### Wrap

- `cyber-flex-wrap` - flex-wrap: wrap
- `cyber-flex-nowrap` - flex-wrap: nowrap

### Align Items

- `cyber-items-start` - align-items: flex-start
- `cyber-items-center` - align-items: center
- `cyber-items-end` - align-items: flex-end
- `cyber-items-stretch` - align-items: stretch

### Justify Content

- `cyber-justify-start` - justify-content: flex-start
- `cyber-justify-center` - justify-content: center
- `cyber-justify-end` - justify-content: flex-end
- `cyber-justify-between` - justify-content: space-between
- `cyber-justify-around` - justify-content: space-around

### Gap

- `cyber-gap-xs` - gap: var(--space-xs)
- `cyber-gap-sm` - gap: var(--space-sm)
- `cyber-gap-md` - gap: var(--space-md)
- `cyber-gap-lg` - gap: var(--space-lg)
- `cyber-gap-xl` - gap: var(--space-xl)

### Flex Sizing

- `cyber-flex-1` - flex: 1 1 0%
- `cyber-flex-auto` - flex: 1 1 auto
- `cyber-flex-none` - flex: none

---

## Grid

### Fixed Column Grids (responsive)

- `cyber-grid--2` - 2-column grid (auto-fit on mobile)
- `cyber-grid--3` - 3-column grid (auto-fit on mobile)
- `cyber-grid--4` - 4-column grid (auto-fit on mobile)

### Auto-fit Grids

- `cyber-grid--auto-sm` - auto-fit, min 150px
- `cyber-grid--auto-md` - auto-fit, min 250px
- `cyber-grid--auto-lg` - auto-fit, min 350px

### Column Span

- `cyber-col-span-2` - grid-column: span 2
- `cyber-col-span-3` - grid-column: span 3
- `cyber-col-span-full` - grid-column: 1 / -1

---

## Spacing

### Margin (all sides)

- `cyber-m-0` - margin: 0
- `cyber-m-auto` - margin: auto
- `cyber-m-xs` - margin: var(--space-xs)
- `cyber-m-sm` - margin: var(--space-sm)
- `cyber-m-md` - margin: var(--space-md)
- `cyber-m-lg` - margin: var(--space-lg)

### Margin Horizontal

- `cyber-mx-auto` - margin-inline: auto
- `cyber-mx-sm` - margin-inline: var(--space-sm)
- `cyber-mx-md` - margin-inline: var(--space-md)
- `cyber-mx-lg` - margin-inline: var(--space-lg)

### Margin Vertical

- `cyber-my-sm` - margin-block: var(--space-sm)
- `cyber-my-md` - margin-block: var(--space-md)
- `cyber-my-lg` - margin-block: var(--space-lg)
- `cyber-my-xl` - margin-block: var(--space-xl)

### Margin Top

- `cyber-mt-0` - margin-top: 0
- `cyber-mt-xs` - margin-top: var(--space-xs)
- `cyber-mt-sm` - margin-top: var(--space-sm)
- `cyber-mt-md` - margin-top: var(--space-md)
- `cyber-mt-lg` - margin-top: var(--space-lg)
- `cyber-mt-xl` - margin-top: var(--space-xl)

### Margin Bottom

- `cyber-mb-0` - margin-bottom: 0
- `cyber-mb-xs` - margin-bottom: var(--space-xs)
- `cyber-mb-sm` - margin-bottom: var(--space-sm)
- `cyber-mb-md` - margin-bottom: var(--space-md)
- `cyber-mb-lg` - margin-bottom: var(--space-lg)
- `cyber-mb-xl` - margin-bottom: var(--space-xl)

### Padding (all sides)

- `cyber-p-0` - padding: 0
- `cyber-p-xs` - padding: var(--space-xs)
- `cyber-p-sm` - padding: var(--space-sm)
- `cyber-p-md` - padding: var(--space-md)
- `cyber-p-lg` - padding: var(--space-lg)
- `cyber-p-xl` - padding: var(--space-xl)

### Padding Horizontal

- `cyber-px-0` - padding-inline: 0
- `cyber-px-sm` - padding-inline: var(--space-sm)
- `cyber-px-md` - padding-inline: var(--space-md)
- `cyber-px-lg` - padding-inline: var(--space-lg)

### Padding Vertical

- `cyber-py-0` - padding-block: 0
- `cyber-py-sm` - padding-block: var(--space-sm)
- `cyber-py-md` - padding-block: var(--space-md)
- `cyber-py-lg` - padding-block: var(--space-lg)
- `cyber-py-xl` - padding-block: var(--space-xl)

---

## Text

### Alignment

- `cyber-text-left` - text-align: left
- `cyber-text-center` - text-align: center
- `cyber-text-right` - text-align: right

### Colors

- `cyber-text-primary` - color: var(--color-text-primary)
- `cyber-text-secondary` - color: var(--color-text-secondary)
- `cyber-text-muted` - color: var(--color-text-muted)
- `cyber-text-cyan` - color: var(--cyber-cyan-500)
- `cyber-text-magenta` - color: var(--cyber-magenta-500)
- `cyber-text-yellow` - color: var(--cyber-yellow-500)
- `cyber-text-green` - color: var(--cyber-green-500)

### Text Glow

- `cyber-text-glow` - cyan text with glow
- `cyber-text-glow--magenta` - magenta text with glow
- `cyber-text-glow--yellow` - yellow text with glow
- `cyber-text-glow--green` - green text with glow
- `cyber-text-glow-cyan` - cyan text with glow (flat naming)
- `cyber-text-glow-magenta` - magenta text with glow (flat naming)
- `cyber-text-glow-yellow` - yellow text with glow (flat naming)
- `cyber-text-glow-green` - green text with glow (flat naming)

### Font Weight

- `cyber-font-normal` - font-weight: 400
- `cyber-font-medium` - font-weight: 500
- `cyber-font-semibold` - font-weight: 600
- `cyber-font-bold` - font-weight: 700

### Font Family

- `cyber-font-display` - font-family: var(--font-display)
- `cyber-font-body` - font-family: var(--font-body)
- `cyber-font-mono` - font-family: var(--font-mono)

### Text Transform

- `cyber-uppercase` - text-transform: uppercase (with letter-spacing)
- `cyber-lowercase` - text-transform: lowercase
- `cyber-capitalize` - text-transform: capitalize

### Text Overflow

- `cyber-truncate` - single-line truncate with ellipsis
- `cyber-line-clamp-2` - clamp to 2 lines
- `cyber-line-clamp-3` - clamp to 3 lines

---

## Backgrounds

### Colors

- `cyber-bg-transparent` - background-color: transparent
- `cyber-bg-current` - background-color: currentcolor
- `cyber-bg-primary` - background-color: var(--color-bg-primary)
- `cyber-bg-secondary` - background-color: var(--color-bg-secondary)
- `cyber-bg-tertiary` - background-color: var(--color-bg-tertiary)
- `cyber-bg-elevated` - background-color: var(--color-bg-elevated)

### Accent Colors

- `cyber-bg-cyan` - background-color: var(--cyber-cyan-500)
- `cyber-bg-cyan-subtle` - 15% cyan background
- `cyber-bg-magenta` - background-color: var(--cyber-magenta-500)
- `cyber-bg-magenta-subtle` - 15% magenta background
- `cyber-bg-yellow` - background-color: var(--cyber-yellow-500)
- `cyber-bg-yellow-subtle` - 15% yellow background
- `cyber-bg-green` - background-color: var(--cyber-green-500)
- `cyber-bg-green-subtle` - 15% green background

### Void Scale

- `cyber-bg-void-900` - background-color: var(--cyber-void-900)
- `cyber-bg-void-800` - background-color: var(--cyber-void-800)
- `cyber-bg-void-700` - background-color: var(--cyber-void-700)

### Gradients

- `cyber-bg-gradient-cyan` - cyan gradient (135deg)
- `cyber-bg-gradient-magenta` - magenta gradient (135deg)
- `cyber-bg-gradient-yellow` - yellow gradient (135deg)
- `cyber-bg-gradient-green` - green gradient (135deg)
- `cyber-bg-gradient-cyber` - cyan to magenta gradient

### Background Size

- `cyber-bg-auto` - background-size: auto
- `cyber-bg-cover` - background-size: cover
- `cyber-bg-contain` - background-size: contain

### Background Position

- `cyber-bg-center` - background-position: center
- `cyber-bg-top` - background-position: top
- `cyber-bg-bottom` - background-position: bottom
- `cyber-bg-left` - background-position: left
- `cyber-bg-right` - background-position: right

### Background Repeat

- `cyber-bg-repeat` - background-repeat: repeat
- `cyber-bg-no-repeat` - background-repeat: no-repeat
- `cyber-bg-repeat-x` - background-repeat: repeat-x
- `cyber-bg-repeat-y` - background-repeat: repeat-y

### Background Attachment

- `cyber-bg-fixed` - background-attachment: fixed
- `cyber-bg-local` - background-attachment: local
- `cyber-bg-scroll` - background-attachment: scroll

### Background Clip

- `cyber-bg-clip-border` - background-clip: border-box
- `cyber-bg-clip-padding` - background-clip: padding-box
- `cyber-bg-clip-content` - background-clip: content-box
- `cyber-bg-clip-text` - background-clip: text

---

## Borders

### Border Width

- `cyber-border-0` - border-width: 0
- `cyber-border` - border-width: 1px
- `cyber-border-2` - border-width: 2px
- `cyber-border-4` - border-width: 4px

### Directional Border Width

- `cyber-border-t` - border-top-width: 1px
- `cyber-border-r` - border-right-width: 1px
- `cyber-border-b` - border-bottom-width: 1px
- `cyber-border-l` - border-left-width: 1px
- `cyber-border-t-0` - border-top-width: 0
- `cyber-border-r-0` - border-right-width: 0
- `cyber-border-b-0` - border-bottom-width: 0
- `cyber-border-l-0` - border-left-width: 0

### Border Style

- `cyber-border-solid` - border-style: solid
- `cyber-border-dashed` - border-style: dashed
- `cyber-border-dotted` - border-style: dotted
- `cyber-border-none` - border-style: none

### Border Color

- `cyber-border-default` - border-color: var(--color-border-default)
- `cyber-border-subtle` - border-color: var(--color-border-subtle)
- `cyber-border-cyan` - border-color: var(--cyber-cyan-500)
- `cyber-border-magenta` - border-color: var(--cyber-magenta-500)
- `cyber-border-yellow` - border-color: var(--cyber-yellow-500)
- `cyber-border-green` - border-color: var(--cyber-green-500)
- `cyber-border-transparent` - border-color: transparent

### Border Radius

- `cyber-rounded-none` - border-radius: 0
- `cyber-rounded-sm` - border-radius: var(--radius-sm)
- `cyber-rounded` - border-radius: var(--radius-md)
- `cyber-rounded-md` - border-radius: var(--radius-md)
- `cyber-rounded-lg` - border-radius: var(--radius-lg)
- `cyber-rounded-xl` - border-radius: var(--radius-xl)
- `cyber-rounded-full` - border-radius: 9999px

### Directional Border Radius

- `cyber-rounded-t` - top corners rounded
- `cyber-rounded-r` - right corners rounded
- `cyber-rounded-b` - bottom corners rounded
- `cyber-rounded-l` - left corners rounded
- `cyber-rounded-t-none` - top corners square
- `cyber-rounded-b-none` - bottom corners square

### Ring (outline alternative)

- `cyber-ring` - 2px cyan ring
- `cyber-ring-magenta` - 2px magenta ring
- `cyber-ring-yellow` - 2px yellow ring
- `cyber-ring-green` - 2px green ring
- `cyber-ring-0` - no ring

---

## Shadows & Opacity

### Box Shadow

- `cyber-shadow-none` - box-shadow: none
- `cyber-shadow-sm` - small shadow
- `cyber-shadow` - default shadow
- `cyber-shadow-md` - medium shadow
- `cyber-shadow-lg` - large shadow
- `cyber-shadow-xl` - extra large shadow
- `cyber-shadow-2xl` - 2x large shadow
- `cyber-shadow-inner` - inner shadow

### Glow Shadows

- `cyber-shadow-glow` - cyan glow
- `cyber-shadow-glow-magenta` - magenta glow
- `cyber-shadow-glow-yellow` - yellow glow
- `cyber-shadow-glow-green` - green glow

### Opacity

- `cyber-opacity-0` - opacity: 0%
- `cyber-opacity-5` - opacity: 5%
- `cyber-opacity-10` - opacity: 10%
- `cyber-opacity-20` - opacity: 20%
- `cyber-opacity-25` - opacity: 25%
- `cyber-opacity-30` - opacity: 30%
- `cyber-opacity-40` - opacity: 40%
- `cyber-opacity-50` - opacity: 50%
- `cyber-opacity-60` - opacity: 60%
- `cyber-opacity-70` - opacity: 70%
- `cyber-opacity-75` - opacity: 75%
- `cyber-opacity-80` - opacity: 80%
- `cyber-opacity-90` - opacity: 90%
- `cyber-opacity-95` - opacity: 95%
- `cyber-opacity-100` - opacity: 100%

### Backdrop Blur

- `cyber-backdrop-blur-none` - backdrop-filter: blur(0)
- `cyber-backdrop-blur-sm` - backdrop-filter: blur(4px)
- `cyber-backdrop-blur` - backdrop-filter: blur(8px)
- `cyber-backdrop-blur-md` - backdrop-filter: blur(12px)
- `cyber-backdrop-blur-lg` - backdrop-filter: blur(16px)
- `cyber-backdrop-blur-xl` - backdrop-filter: blur(24px)

---

## Transforms

### Scale

- `cyber-scale-0` - transform: scale(0)
- `cyber-scale-50` - transform: scale(0.5)
- `cyber-scale-75` - transform: scale(0.75)
- `cyber-scale-90` - transform: scale(0.9)
- `cyber-scale-95` - transform: scale(0.95)
- `cyber-scale-100` - transform: scale(1)
- `cyber-scale-105` - transform: scale(1.05)
- `cyber-scale-110` - transform: scale(1.1)
- `cyber-scale-125` - transform: scale(1.25)
- `cyber-scale-150` - transform: scale(1.5)
- `cyber-scale-x-0` - transform: scaleX(0)
- `cyber-scale-x-100` - transform: scaleX(1)
- `cyber-scale-y-0` - transform: scaleY(0)
- `cyber-scale-y-100` - transform: scaleY(1)

### Rotate

- `cyber-rotate-0` - transform: rotate(0deg)
- `cyber-rotate-45` - transform: rotate(45deg)
- `cyber-rotate-90` - transform: rotate(90deg)
- `cyber-rotate-180` - transform: rotate(180deg)
- `cyber--rotate-45` - transform: rotate(-45deg)
- `cyber--rotate-90` - transform: rotate(-90deg)
- `cyber--rotate-180` - transform: rotate(-180deg)

### Translate

- `cyber-translate-x-0` - transform: translateX(0)
- `cyber-translate-x-full` - transform: translateX(100%)
- `cyber--translate-x-full` - transform: translateX(-100%)
- `cyber-translate-y-0` - transform: translateY(0)
- `cyber-translate-y-full` - transform: translateY(100%)
- `cyber--translate-y-full` - transform: translateY(-100%)

### Skew

- `cyber-skew-x-0` - transform: skewX(0deg)
- `cyber-skew-x-3` - transform: skewX(3deg)
- `cyber-skew-x-6` - transform: skewX(6deg)
- `cyber-skew-x-12` - transform: skewX(12deg)
- `cyber--skew-x-3` - transform: skewX(-3deg)
- `cyber--skew-x-6` - transform: skewX(-6deg)
- `cyber--skew-x-12` - transform: skewX(-12deg)
- `cyber-skew-y-0` - transform: skewY(0deg)
- `cyber-skew-y-3` - transform: skewY(3deg)
- `cyber-skew-y-6` - transform: skewY(6deg)

### Transform Origin

- `cyber-origin-center` - transform-origin: center
- `cyber-origin-top` - transform-origin: top
- `cyber-origin-top-right` - transform-origin: top right
- `cyber-origin-right` - transform-origin: right
- `cyber-origin-bottom-right` - transform-origin: bottom right
- `cyber-origin-bottom` - transform-origin: bottom
- `cyber-origin-bottom-left` - transform-origin: bottom left
- `cyber-origin-left` - transform-origin: left
- `cyber-origin-top-left` - transform-origin: top left

---

## Animation

### Animation Classes

- `cyber-animate-pulse` - pulsing opacity animation
- `cyber-animate-float` - floating up/down animation
- `cyber-boot` - flicker-in boot sequence animation
- `cyber-animate-glow` - pulsing glow animation
- `cyber-animate-spin` - continuous 360deg rotation
- `cyber-animate-ping` - expanding ping animation
- `cyber-animate-bounce` - bouncing animation

### Animation Control

- `cyber-animate-none` - animation: none
- `cyber-animate-paused` - animation-play-state: paused
- `cyber-animate-running` - animation-play-state: running

### Animation Delay

- `cyber-delay-100` - animation-delay: 100ms
- `cyber-delay-200` - animation-delay: 200ms
- `cyber-delay-300` - animation-delay: 300ms
- `cyber-delay-500` - animation-delay: 500ms
- `cyber-delay-1000` - animation-delay: 1000ms

### Animation Duration

- `cyber-duration-fast` - animation-duration: 150ms
- `cyber-duration-normal` - animation-duration: 300ms
- `cyber-duration-slow` - animation-duration: 500ms
- `cyber-duration-slower` - animation-duration: 1000ms

---

## Transitions

### Transition Property

- `cyber-transition-none` - transition-property: none
- `cyber-transition-all` - transition all properties
- `cyber-transition` - transition common properties
- `cyber-transition-colors` - transition color properties
- `cyber-transition-opacity` - transition opacity only
- `cyber-transition-shadow` - transition box-shadow only
- `cyber-transition-transform` - transition transform only

### Transition Duration

- `cyber-duration-0` - transition-duration: 0s
- `cyber-duration-75` - transition-duration: 75ms
- `cyber-duration-100` - transition-duration: 100ms
- `cyber-duration-150` - transition-duration: 150ms
- `cyber-duration-200` - transition-duration: 200ms
- `cyber-duration-300` - transition-duration: 300ms
- `cyber-duration-500` - transition-duration: 500ms
- `cyber-duration-700` - transition-duration: 700ms
- `cyber-duration-1000` - transition-duration: 1000ms
- `cyber-duration-fast` - transition-duration: var(--duration-fast)
- `cyber-duration-base` - transition-duration: var(--duration-base)
- `cyber-duration-slow` - transition-duration: var(--duration-slow)

### Transition Timing

- `cyber-ease-linear` - linear timing
- `cyber-ease-in` - ease-in timing
- `cyber-ease-out` - ease-out timing
- `cyber-ease-in-out` - ease-in-out timing
- `cyber-ease-bounce` - bounce easing
- `cyber-ease-smooth` - smooth easing

### Transition Delay

- `cyber-delay-0` - transition-delay: 0s
- `cyber-delay-75` - transition-delay: 75ms
- `cyber-delay-100` - transition-delay: 100ms
- `cyber-delay-150` - transition-delay: 150ms
- `cyber-delay-200` - transition-delay: 200ms
- `cyber-delay-300` - transition-delay: 300ms
- `cyber-delay-500` - transition-delay: 500ms
- `cyber-delay-700` - transition-delay: 700ms
- `cyber-delay-1000` - transition-delay: 1000ms

---

## Position

### Position Type

- `cyber-static` - position: static
- `cyber-relative` - position: relative
- `cyber-absolute` - position: absolute
- `cyber-fixed` - position: fixed
- `cyber-sticky` - position: sticky

### Inset

- `cyber-inset-0` - inset: 0
- `cyber-inset-auto` - inset: auto
- `cyber-inset-x-0` - left: 0; right: 0
- `cyber-inset-y-0` - top: 0; bottom: 0

### Top

- `cyber-top-0` - top: 0
- `cyber-top-auto` - top: auto
- `cyber-top-half` - top: 50%
- `cyber-top-full` - top: 100%

### Right

- `cyber-right-0` - right: 0
- `cyber-right-auto` - right: auto
- `cyber-right-half` - right: 50%
- `cyber-right-full` - right: 100%

### Bottom

- `cyber-bottom-0` - bottom: 0
- `cyber-bottom-auto` - bottom: auto
- `cyber-bottom-half` - bottom: 50%
- `cyber-bottom-full` - bottom: 100%

### Left

- `cyber-left-0` - left: 0
- `cyber-left-auto` - left: auto
- `cyber-left-half` - left: 50%
- `cyber-left-full` - left: 100%

### Centering

- `cyber-translate-x-half` - transform: translateX(50%)
- `cyber-translate-x-neg-half` - transform: translateX(-50%)
- `cyber-translate-y-half` - transform: translateY(50%)
- `cyber-translate-y-neg-half` - transform: translateY(-50%)
- `cyber-center-x` - center horizontally (left: 50% + translateX(-50%))
- `cyber-center-y` - center vertically (top: 50% + translateY(-50%))
- `cyber-center-xy` - center both axes

---

## Sizing

### Width

- `cyber-w-auto` - width: auto
- `cyber-w-full` - width: 100%
- `cyber-w-screen` - width: 100vw
- `cyber-w-min` - width: min-content
- `cyber-w-max` - width: max-content
- `cyber-w-fit` - width: fit-content
- `cyber-w-half` - width: 50%
- `cyber-w-third` - width: 33.3333%
- `cyber-w-two-thirds` - width: 66.6667%
- `cyber-w-quarter` - width: 25%
- `cyber-w-three-quarters` - width: 75%
- `cyber-w-xs` - width: 20rem
- `cyber-w-sm` - width: 24rem
- `cyber-w-md` - width: 28rem
- `cyber-w-lg` - width: 32rem
- `cyber-w-xl` - width: 36rem

### Max Width

- `cyber-max-w-none` - max-width: none
- `cyber-max-w-full` - max-width: 100%
- `cyber-max-w-screen` - max-width: 100vw
- `cyber-max-w-xs` - max-width: 20rem
- `cyber-max-w-sm` - max-width: 24rem
- `cyber-max-w-md` - max-width: 28rem
- `cyber-max-w-lg` - max-width: 32rem
- `cyber-max-w-xl` - max-width: 36rem
- `cyber-max-w-2xl` - max-width: 42rem
- `cyber-max-w-3xl` - max-width: 48rem
- `cyber-max-w-4xl` - max-width: 56rem
- `cyber-max-w-5xl` - max-width: 64rem
- `cyber-max-w-6xl` - max-width: 72rem
- `cyber-max-w-7xl` - max-width: 80rem

### Min Width

- `cyber-min-w-0` - min-width: 0
- `cyber-min-w-full` - min-width: 100%
- `cyber-min-w-min` - min-width: min-content
- `cyber-min-w-max` - min-width: max-content

### Height

- `cyber-h-auto` - height: auto
- `cyber-h-full` - height: 100%
- `cyber-h-screen` - height: 100vh
- `cyber-h-min` - height: min-content
- `cyber-h-max` - height: max-content
- `cyber-h-fit` - height: fit-content
- `cyber-h-half` - height: 50%
- `cyber-h-third` - height: 33.3333%
- `cyber-h-two-thirds` - height: 66.6667%

### Min Height

- `cyber-min-h-0` - min-height: 0
- `cyber-min-h-full` - min-height: 100%
- `cyber-min-h-screen` - min-height: 100vh

### Max Height

- `cyber-max-h-full` - max-height: 100%
- `cyber-max-h-screen` - max-height: 100vh
- `cyber-max-h-none` - max-height: none

---

## Layout

### Overflow

- `cyber-overflow-auto` - overflow: auto
- `cyber-overflow-hidden` - overflow: hidden
- `cyber-overflow-visible` - overflow: visible
- `cyber-overflow-scroll` - overflow: scroll
- `cyber-overflow-x-auto` - overflow-x: auto
- `cyber-overflow-x-hidden` - overflow-x: hidden
- `cyber-overflow-x-scroll` - overflow-x: scroll
- `cyber-overflow-y-auto` - overflow-y: auto
- `cyber-overflow-y-hidden` - overflow-y: hidden
- `cyber-overflow-y-scroll` - overflow-y: scroll

### Z-Index

- `cyber-z-0` - z-index: 0
- `cyber-z-10` - z-index: 10
- `cyber-z-20` - z-index: 20
- `cyber-z-30` - z-index: 30
- `cyber-z-40` - z-index: 40
- `cyber-z-50` - z-index: 50
- `cyber-z-auto` - z-index: auto
- `cyber-z-dropdown` - z-index: 1000
- `cyber-z-sticky` - z-index: 1020
- `cyber-z-fixed` - z-index: 1030
- `cyber-z-modal-backdrop` - z-index: 1040
- `cyber-z-modal` - z-index: 1050
- `cyber-z-popover` - z-index: 1060
- `cyber-z-tooltip` - z-index: 1070

### Object Fit

- `cyber-object-contain` - object-fit: contain
- `cyber-object-cover` - object-fit: cover
- `cyber-object-fill` - object-fit: fill
- `cyber-object-none` - object-fit: none
- `cyber-object-scale-down` - object-fit: scale-down

### Object Position

- `cyber-object-center` - object-position: center
- `cyber-object-top` - object-position: top
- `cyber-object-bottom` - object-position: bottom
- `cyber-object-left` - object-position: left
- `cyber-object-right` - object-position: right

### Aspect Ratio

- `cyber-aspect-auto` - aspect-ratio: auto
- `cyber-aspect-square` - aspect-ratio: 1 / 1
- `cyber-aspect-video` - aspect-ratio: 16 / 9
- `cyber-aspect-4-3` - aspect-ratio: 4 / 3
- `cyber-aspect-3-2` - aspect-ratio: 3 / 2
- `cyber-aspect-2-1` - aspect-ratio: 2 / 1

### Visibility

- `cyber-visible` - visibility: visible
- `cyber-invisible` - visibility: hidden
- `cyber-collapse` - visibility: collapse

---

## Interactivity

### Cursor

- `cyber-cursor-auto` - cursor: auto
- `cyber-cursor-default` - cursor: default
- `cyber-cursor-pointer` - cursor: pointer
- `cyber-cursor-wait` - cursor: wait
- `cyber-cursor-text` - cursor: text
- `cyber-cursor-move` - cursor: move
- `cyber-cursor-help` - cursor: help
- `cyber-cursor-not-allowed` - cursor: not-allowed
- `cyber-cursor-none` - cursor: none
- `cyber-cursor-crosshair` - cursor: crosshair
- `cyber-cursor-grab` - cursor: grab
- `cyber-cursor-grabbing` - cursor: grabbing
- `cyber-cursor-zoom-in` - cursor: zoom-in
- `cyber-cursor-zoom-out` - cursor: zoom-out

### Pointer Events

- `cyber-pointer-events-none` - pointer-events: none
- `cyber-pointer-events-auto` - pointer-events: auto

### User Select

- `cyber-select-none` - user-select: none
- `cyber-select-text` - user-select: text
- `cyber-select-all` - user-select: all
- `cyber-select-auto` - user-select: auto

### Touch Action

- `cyber-touch-auto` - touch-action: auto
- `cyber-touch-none` - touch-action: none
- `cyber-touch-pan-x` - touch-action: pan-x
- `cyber-touch-pan-y` - touch-action: pan-y
- `cyber-touch-manipulation` - touch-action: manipulation

### Scroll Behavior

- `cyber-scroll-auto` - scroll-behavior: auto
- `cyber-scroll-smooth` - scroll-behavior: smooth

### Scroll Snap

- `cyber-snap-start` - scroll-snap-align: start
- `cyber-snap-end` - scroll-snap-align: end
- `cyber-snap-center` - scroll-snap-align: center
- `cyber-snap-none` - scroll-snap-type: none
- `cyber-snap-x` - scroll-snap-type: x mandatory
- `cyber-snap-y` - scroll-snap-type: y mandatory
- `cyber-snap-both` - scroll-snap-type: both mandatory

### Resize

- `cyber-resize-none` - resize: none
- `cyber-resize-y` - resize: vertical
- `cyber-resize-x` - resize: horizontal
- `cyber-resize` - resize: both

---

## Filters

### Blur

- `cyber-blur-none` - filter: blur(0)
- `cyber-blur-sm` - filter: blur(4px)
- `cyber-blur` - filter: blur(8px)
- `cyber-blur-md` - filter: blur(12px)
- `cyber-blur-lg` - filter: blur(16px)
- `cyber-blur-xl` - filter: blur(24px)
- `cyber-blur-2xl` - filter: blur(40px)
- `cyber-blur-3xl` - filter: blur(64px)

### Brightness

- `cyber-brightness-0` - filter: brightness(0)
- `cyber-brightness-50` - filter: brightness(0.5)
- `cyber-brightness-75` - filter: brightness(0.75)
- `cyber-brightness-90` - filter: brightness(0.9)
- `cyber-brightness-95` - filter: brightness(0.95)
- `cyber-brightness-100` - filter: brightness(1)
- `cyber-brightness-105` - filter: brightness(1.05)
- `cyber-brightness-110` - filter: brightness(1.1)
- `cyber-brightness-125` - filter: brightness(1.25)
- `cyber-brightness-150` - filter: brightness(1.5)
- `cyber-brightness-200` - filter: brightness(2)

### Contrast

- `cyber-contrast-0` - filter: contrast(0)
- `cyber-contrast-50` - filter: contrast(0.5)
- `cyber-contrast-75` - filter: contrast(0.75)
- `cyber-contrast-100` - filter: contrast(1)
- `cyber-contrast-125` - filter: contrast(1.25)
- `cyber-contrast-150` - filter: contrast(1.5)
- `cyber-contrast-200` - filter: contrast(2)

### Grayscale

- `cyber-grayscale-0` - filter: grayscale(0)
- `cyber-grayscale` - filter: grayscale(100%)
- `cyber-grayscale-50` - filter: grayscale(50%)

### Hue Rotate

- `cyber-hue-rotate-0` - filter: hue-rotate(0deg)
- `cyber-hue-rotate-15` - filter: hue-rotate(15deg)
- `cyber-hue-rotate-30` - filter: hue-rotate(30deg)
- `cyber-hue-rotate-60` - filter: hue-rotate(60deg)
- `cyber-hue-rotate-90` - filter: hue-rotate(90deg)
- `cyber-hue-rotate-180` - filter: hue-rotate(180deg)
- `cyber--hue-rotate-15` - filter: hue-rotate(-15deg)
- `cyber--hue-rotate-30` - filter: hue-rotate(-30deg)
- `cyber--hue-rotate-60` - filter: hue-rotate(-60deg)
- `cyber--hue-rotate-90` - filter: hue-rotate(-90deg)

### Invert

- `cyber-invert-0` - filter: invert(0)
- `cyber-invert` - filter: invert(100%)

### Saturate

- `cyber-saturate-0` - filter: saturate(0)
- `cyber-saturate-50` - filter: saturate(0.5)
- `cyber-saturate-100` - filter: saturate(1)
- `cyber-saturate-150` - filter: saturate(1.5)
- `cyber-saturate-200` - filter: saturate(2)

### Sepia

- `cyber-sepia-0` - filter: sepia(0)
- `cyber-sepia` - filter: sepia(100%)

### Drop Shadow

- `cyber-drop-shadow-none` - no drop shadow
- `cyber-drop-shadow-sm` - small drop shadow
- `cyber-drop-shadow` - default drop shadow
- `cyber-drop-shadow-md` - medium drop shadow
- `cyber-drop-shadow-lg` - large drop shadow
- `cyber-drop-shadow-xl` - extra large drop shadow
- `cyber-drop-shadow-2xl` - 2x large drop shadow
- `cyber-drop-shadow-glow-cyan` - cyan glow drop shadow
- `cyber-drop-shadow-glow-magenta` - magenta glow drop shadow
- `cyber-drop-shadow-glow-yellow` - yellow glow drop shadow
- `cyber-drop-shadow-glow-green` - green glow drop shadow

---

## Accessibility

- `cyber-sr-only` - visually hidden, accessible to screen readers
- `cyber-sr-only-focusable` - hidden until focused (for skip links)
- `cyber-not-sr` - hidden from screen readers (speak: none)
- `cyber-focus-visible` - outline on keyboard focus only
- `cyber-motion-safe` - disable animations when reduced motion preferred
- `cyber-motion-reduce` - disable animations when motion is acceptable
