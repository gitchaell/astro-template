# Astro Template (v1.0.0)

This repository provides an optimized starter template for web projects built with [Astro v5.2.5](https://astro.build/). Designed for developers seeking an efficient workflow and exceptional performance right from the start.

## Advanced Features

* **Astro v5.2.5:** Leverages the latest features of Astro, including support for island components and default performance optimization.
* **TypeScript v5.7.3:** Fully typed with TypeScript for robust and maintainable development. Custom configurations are included for an optimal development experience.
* **Tailwind CSS v4.0.4:** Utilizes Tailwind CSS for agile and responsive design. Configuration includes `prettier-plugin-tailwindcss` for consistent formatting.
* **Vercel Analytics v1.5.0:** Integration with Vercel Analytics for monitoring site performance in production.
* **Import Aliases:** Configured with import aliases in `tsconfig.json` for clean and concise import paths. For example, you can use `@/components/MyComponent` instead of lengthy relative paths.
* **Rigorous Linting and Formatting:** Configured with ESLint v9.20.0, Prettier v3.4.2, and Stylelint v16.14.1 to ensure code quality and consistency. Custom configurations and specific plugins for Astro, TypeScript, and Tailwind CSS are included.
* **Comprehensive Testing:** Includes Vitest v3.0.5 for unit testing and Playwright v1.50.1 for end-to-end (e2e) testing. Scripts are provided to run tests and generate detailed reports.
* **Git Hooks with lint-staged and commitlint:** Configured with `lint-staged` v15.4.3 to run linters and formatters only on modified files, and `commitlint` v19.7.1 to ensure consistent and semantic commit messages.
* **i18n (Internationalization):** Implemented using Astro's folder-based routing for easy management of localized content.
* **Husky:** Implemented to easily manage git hooks.
* **OpenGraph Tags:** Included for enhanced social media sharing and SEO.

## Technologies and Dependencies

* **Astro:** v5.2.5
* **TypeScript:** v5.7.3
* **Tailwind CSS:** v4.0.4
* **Vercel Analytics:** v1.5.0
* **ESLint:** v9.20.0
* **Prettier:** v3.4.2
* **Stylelint:** v16.14.1
* **Vitest:** v3.0.5
* **Playwright:** v1.50.1
* **lint-staged:** v15.4.3
* **commitlint:** v19.7.1
* **Husky:** Last stable version.

## Advanced Configuration

* **Import Aliases in `tsconfig.json`:**

    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/components/*": ["src/components/*"],
          "@/layouts/*": ["src/layouts/*"],
          "@/pages/*": ["src/pages/*"],
          // ... other aliases
        }
      }
    }
    ```

* **ESLint Configuration (`.eslintrc.cjs`):** Specific plugins for Astro, TypeScript, and Prettier are included, as well as custom configurations for rigorous static analysis.
* **Stylelint Configuration (`stylelint.config.cjs`):** `stylelint-config-tailwindcss` and `stylelint-prettier` are used to ensure compatibility with Tailwind CSS and Prettier.
* **i18n Configuration:** Language folders are located in the src/pages directory.
* **Husky Configuration:** Configuration files are located in the .husky directory.
* **OpenGraph Tags:** Reside inside of the layout files.

## Commands for Advanced Developers

* `npm run dev`: Starts the Astro development server with hot module replacement (HMR).
* `npm run build`: Builds the project for production, optimizing performance and generating static assets.
* `npm run preview`: Previews the production build locally.
* `npm run format`: Formats the code with Prettier, ensuring style consistency.
* `npm run lint`: Runs ESLint and Stylelint to analyze the code for errors and warnings.
* `npm run lint:fix`: Runs ESLint and Stylelint with the `--fix` option to automatically correct errors.
* `npm run test`: Runs unit tests with Vitest.
* `npm run test:e2e`: Runs e2e tests with Playwright.
* `npm run test:e2e:report`: Displays the Playwright e2e test report.

## Author

**Michaell Alavedra**

* Email: f.michaell.a.m@gmail.com
* Website: [https://michaellalavedra.com](https://michaellalavedra.com)

## License

[MIT License](LICENSE)
