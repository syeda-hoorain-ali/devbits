const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 mt-8 md:mt-12">
      <h1 className="text-4xl font-bold underline decoration-primary underline-offset-8 mb-4">About DevBits</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <strong>DevBits</strong>, your go-to platform for insightful,
        informative, and beginner-friendly articles about web development.
        Whether you&apos;re just starting out or looking to deepen your
        understanding, our mission is to simplify the world of development and
        bring you closer to mastering the tools and technologies shaping the web
        today.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <p className="text-lg leading-relaxed mb-6">
        At <strong>DevBits</strong>, we focus on delivering high-quality content
        that covers a wide range of topics, from the basics of{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript</strong>, to more advanced concepts in{" "}
        <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>Node.js</strong>, and <strong>TypeScript</strong>. Each article
        is designed with practical examples, ensuring that you can follow along,
        experiment, and apply what you&apos;ve learned.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Goal</h2>
      <p className="text-lg leading-relaxed mb-6">
        Our primary goal is to make learning web development an accessible and
        enjoyable experience for everyone. Whether you&apos;re a student, a developer
        transitioning to new technologies, or simply passionate about coding,{" "}
        <strong>DevBits</strong> provides resources and tutorials that meet you
        where you are.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Choose DevBits?</h2>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
        <li>Clear and concise explanations of complex topics</li>
        <li>Real-world examples to enhance understanding</li>
        <li>Content for both beginners and experienced developers</li>
        <li>Regular updates on the latest web technologies</li>
      </ul>

      <p className="text-lg leading-relaxed mb-6">
        We&apos;re here to help you grow your skills and succeed in the ever-evolving
        world of web development. Join us on this journey and let’s build the
        web, one bit at a time.
      </p>
    </main>
  );
};

export default AboutPage;
