# DevBits

DevBits is a blogging platform that provides valuable articles and tutorials on various web development topics, including HTML, CSS, JavaScript, TypeScript, React, and more. It aims to empower developers of all levels by offering insightful and easy-to-understand content.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse blogs on various web development topics.
- "On This Page" navigation for easy access to article sections.
- Responsive design for seamless experience across all devices.
- Dynamic routing for blog pages.
- Admin panel to add, edit, and delete blog posts.
- Dark mode and light mode toggle using `next-themes` and `shadcn`.

## Demo

Check out the live demo: [DevBits Live](https://devbits.vercel.app)

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, shadcn
- **Backend:** MongoDB, Mongoose, Next.js API routes
- **Other Tools:** Axios, Zod, Firebase (for image storage)

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/syeda-hoorain-ali/devbits.git
   ```

2. Navigate to the project directory:

   ```bash
   cd devbits
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables) section).

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Environment Variables

Create a `.env` file in the root directory and include the following variables:

```env
MONGODB_URI=<your_mongodb_connection_string>
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

Replace the placeholders with your actual values.

## Usage

- To create new blog posts, navigate to the admin panel.
- Use the "On This Page" navigation to quickly jump to specific sections in each article.
- Toggle between light and dark mode as per your preference.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project.
2. Create your feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://shadcn.dev/)
- And all contributors who helped improve this project!
