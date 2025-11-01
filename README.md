# Avant Coding Test - Next.js Project

This is a Next.js application built with TypeScript and React 19 and Storybook, featuring a modular component-based architecture for building responsive web pages.

## Getting Started

### Prerequisites

This project requires Node.js version 20 or higher.

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

To build and run the application for production:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Storybook

To run Storybook for component development and testing:

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

To build Storybook for production:

```bash
npm run build-storybook
```

## Project Architecture

### Data Management

This project uses `app/data/mock-data.ts` as the central data source that simulates API responses. The mock data returns a JSON structure that replicates what would typically come from a real API endpoint.

**Key features of the data layer:**

- **Centralized Data Source**: All component data is managed through `mock-data.ts`
- **API Simulation**: The data structure mimics real API responses with proper typing
- **Flexible Content**: Supports different section types (hero, textBlock, featureGrid, testimonial, ctaBanner)
- **Type Safety**: Full TypeScript support with defined interfaces in `app/lib/services/types.ts`

### Component Rendering System

The application uses a **switch-case pattern** in `app/page.tsx` to dynamically render components based on the data structure:

```typescript
{
  pageData.sections.map((section, index) => {
    switch (section.type) {
      case "hero":
        return <Hero key={`${section.type}-${index}`} data={section} />;
      case "textBlock":
        return <TextBlock key={`${section.type}-${index}`} data={section} />;
      case "featureGrid":
        return <FeatureGrid key={`${section.type}-${index}`} data={section} />;
      case "testimonial":
        return <Testimonials key={`${section.type}-${index}`} data={section} />;
      case "ctaBanner":
        return <CtaBanner key={`${section.type}-${index}`} data={section} />;
      default:
        return null;
    }
  });
}
```

This approach provides:

- **Dynamic Content Rendering**: Components are rendered based on data configuration
- **Flexible Page Structure**: Easy to reorder, add, or remove sections
- **Maintainable Code**: Clear separation between data and presentation

### Component Architecture

Each component follows a consistent modular structure:

```
components/
├── ComponentName/
│   ├── ComponentName.tsx      # Component logic and JSX
│   ├── ComponentName.module.css # Component-specific styles
│   └── index.ts              # Export file
```

**Components:**

- **Hero**: Main banner section with heading, subheading, image, and CTA
- **TextBlock**: Simple text content sections
- **FeatureGrid**: Grid layout for showcasing features with icons
- **Testimonials**: Customer testimonial carousel/grid
- **CtaBanner**: Call-to-action banner sections
- **Button**: Reusable button component

### CSS Modules & Styling

**CSS Modules Implementation:**

- Each component has its own `.module.css` file
- **Style Isolation**: Prevents CSS leakage between components
- **Scoped Styling**: Class names are automatically scoped to components
- **Maintainable**: Easy to modify component styles without affecting others

**Mobile-First Responsive Design:**

- All components are built with mobile-first approach
- Progressive enhancement for larger screens
- Better performance on mobile devices
- Easier maintenance and debugging

**Accessibility Considerations:**

- Semantic HTML structure in all components
- Proper ARIA labels and attributes
- Keyboard navigation support
- Screen reader compatibility

**Future considerations:**

- With a design system, implement CSS variables across typography, line height and layout spacing and colours
- The design was a mix of taking examples from https://avant.org.au/ homepage and from the top of my head quickly, trying to keep to the estimated time limit, with an actual design this could look visually much cleaner and nicer.

## Project Structure

```
avant-coding-test/
├── .storybook/              # Storybook configuration
│   ├── main.ts             # Storybook main configuration
│   ├── preview.ts          # Global parameters and decorators
│   └── vitest.setup.ts     # Vitest setup for Storybook tests
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── Button/
│   │   ├── CtaBanner/
│   │   ├── FeatureGrid/
│   │   ├── Hero/
│   │   ├── Testimonials/
│   │   └── TextBlock/
│   ├── data/
│   │   └── mock-data.ts     # Mock API data
│   ├── lib/
│   │   └── services/
│   │       ├── api.ts       # API service functions
│   │       └── types.ts     # TypeScript type definitions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── public/
│   └── images/              # Static image assets
├── stories/                 # Storybook stories
│   └── Hero.stories.ts     # Component stories for Storybook
├── package.json
├── vitest.config.ts         # Vitest configuration
└── vitest.shims.d.ts       # Vitest type definitions
```

## Technologies Used

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript** - Type safety and better developer experience
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code linting and formatting
- **Storybook 10.0.2** - Tool for building UI components in isolation
- **Vitest** - Testing framework for component testing

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Future Enhancements

To transition from mock data to real API:

1. Update the data fetching in `page.tsx`:

```typescript
// Uncomment and modify
const pageData = await fetchPageData();
```

2. Implement API calls in `app/lib/services/api.ts`
3. Update the component to be async

This architecture makes it easy to switch from mock data to real API endpoints when ready for production deployment.
