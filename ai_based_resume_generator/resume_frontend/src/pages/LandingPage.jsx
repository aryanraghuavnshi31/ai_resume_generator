import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              Create Your Perfect Resume with AI
            </h1>
            <p className="py-6 text-lg">
              Build a professional resume in minutes. Just describe yourself,
              and our AI will do the rest!
            </p>
            <Link to={"/generate-resume"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title">AI-Powered</h3>
                <p>
                  Our AI analyzes your input and generates a tailored resume for
                  you.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="card-title">Multiple Templates</h3>
                <p>
                  Choose from a variety of professionally designed resume
                  templates.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="card-title">Job-Specific Resumes</h3>
                <p>
                  Optimize your resume for specific job roles and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "This AI resume maker saved me so much time! My resume looks
                  professional and got me multiple interviews."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Doe</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I love the templates and the ease of use. Highly recommend
                  this tool to anyone looking for a job."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jane Smith</h4>
                    <p>Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-lg">
            Join thousands of users who have landed their dream jobs with our AI
            resume maker.
          </p>
          <button className="btn btn-primary">Get Started Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Your go-to tool for creating professional resumes with AI.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <a href="#" className="link link-hover">
                About Us
              </a>
              <a href="#" className="link link-hover">
                Features
              </a>
              <a href="#" className="link link-hover">
                Contact
              </a>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="link link-hover">
                Privacy Policy
              </a>
              <a href="#" className="link link-hover">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
