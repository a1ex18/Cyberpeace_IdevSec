import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const HomePage = () => {
  return (
    <PageTransition>
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-700">CyberShield AI</p>
          <h1 className="mt-3 text-3xl font-semibold text-navy-900 sm:text-4xl">
            CyberShield AI – Intelligent Cybercrime Reporting System
          </h1>
          <p className="mt-4 text-sm text-navy-700">
            An AI-driven platform that prioritizes cybercrime complaints, mitigates surge traffic, and accelerates
            response coordination for law enforcement agencies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/file-complaint" className="btn-primary">
              File Complaint
            </Link>
            <Link to="/admin" className="btn-secondary">
              Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="card flex flex-col gap-5 p-8">
          <div>
            <p className="text-sm font-semibold text-navy-900">AI-powered complaint intake</p>
            <p className="mt-1 text-xs text-navy-700">
              Automated risk scoring and classification ensures urgent incidents receive immediate attention.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-900">Surge protection</p>
            <p className="mt-1 text-xs text-navy-700">
              Smart load balancing and AI queues support rapid spikes in public reporting.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-900">Secure government-grade workflow</p>
            <p className="mt-1 text-xs text-navy-700">
              Built for compliance, audit readiness, and multi-unit coordination.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
