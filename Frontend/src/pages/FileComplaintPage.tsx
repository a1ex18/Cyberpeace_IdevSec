import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Spinner from "../components/Spinner";
import { ComplaintClassification, ComplaintPayload, FraudType } from "../types/complaint";
import { submitComplaint } from "../services/api";
import { useComplaintForm } from "../hooks/useComplaintForm";
import toast from "react-hot-toast";

const fraudOptions: FraudType[] = [
  "UPI",
  "Phishing",
  "Job Scam",
  "Investment Scam",
  "Sextortion",
  "Other"
];

const initialPayload: ComplaintPayload = {
  fullName: "",
  phoneNumber: "",
  email: "",
  fraudType: "UPI",
  amountLost: "",
  description: "",
  evidenceFile: null
};

const FileComplaintPage = () => {
  const [payload, setPayload] = useState<ComplaintPayload>(initialPayload);
  const [loading, setLoading] = useState(false);
  const [classification, setClassification] = useState<ComplaintClassification | null>(null);

  const { errors, isValid } = useComplaintForm(payload);

  const updateField = <K extends keyof ComplaintPayload>(key: K, value: ComplaintPayload[K]) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isValid) {
      toast.error("Please correct the highlighted fields.");
      return;
    }

    try {
      setLoading(true);
      setClassification(null);
      const result = await submitComplaint(payload);
      setClassification(result);
      toast.success("Complaint submitted successfully.");
    } catch (error) {
      toast.error("Unable to submit complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="card p-6" onSubmit={handleSubmit} noValidate>
          <h2 className="section-title">File a Cybercrime Complaint</h2>
          <p className="mt-1 text-xs text-navy-700">
            Provide accurate details to help AI triage and route the complaint efficiently.
          </p>

          <div className="mt-6 grid gap-4">
            <div>
              <label className="label" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                className="input"
                value={payload.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                aria-invalid={!!errors.fullName}
                aria-describedby="fullName-error"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-alert" id="fullName-error">{errors.fullName}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  className="input"
                  value={payload.phoneNumber}
                  onChange={(event) => updateField("phoneNumber", event.target.value)}
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby="phoneNumber-error"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-alert" id="phoneNumber-error">{errors.phoneNumber}</p>
                )}
              </div>
              <div>
                <label className="label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  value={payload.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-alert" id="email-error">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="fraudType">Fraud Type</label>
                <select
                  id="fraudType"
                  className="input"
                  value={payload.fraudType}
                  onChange={(event) => updateField("fraudType", event.target.value as FraudType)}
                  aria-invalid={!!errors.fraudType}
                  aria-describedby="fraudType-error"
                >
                  {fraudOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.fraudType && (
                  <p className="mt-1 text-xs text-alert" id="fraudType-error">{errors.fraudType}</p>
                )}
              </div>
              <div>
                <label className="label" htmlFor="amountLost">Amount Lost</label>
                <input
                  id="amountLost"
                  type="number"
                  className="input"
                  value={payload.amountLost}
                  onChange={(event) =>
                    updateField(
                      "amountLost",
                      event.target.value === "" ? "" : Number(event.target.value)
                    )
                  }
                  aria-invalid={!!errors.amountLost}
                  aria-describedby="amountLost-error"
                />
                {errors.amountLost && (
                  <p className="mt-1 text-xs text-alert" id="amountLost-error">{errors.amountLost}</p>
                )}
              </div>
            </div>

            <div>
              <label className="label" htmlFor="description">Description</label>
              <textarea
                id="description"
                className="input min-h-[120px]"
                value={payload.description}
                onChange={(event) => updateField("description", event.target.value)}
                aria-invalid={!!errors.description}
                aria-describedby="description-error"
              />
              {errors.description && (
                <p className="mt-1 text-xs text-alert" id="description-error">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="evidenceFile">Upload Evidence</label>
              <input
                id="evidenceFile"
                type="file"
                className="input"
                onChange={(event) => updateField("evidenceFile", event.target.files?.[0] ?? null)}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner /> Submitting
              </span>
            ) : (
              "Submit Complaint"
            )}
          </button>
        </form>

        <div className="card p-6">
          <h2 className="section-title">AI Classification</h2>
          <p className="mt-1 text-xs text-navy-700">
            Automated classification and prioritization results appear here after submission.
          </p>

          {classification ? (
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-navy-700">Fraud Type</span>
                <span className="font-semibold text-navy-900">{classification.fraudType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-700">Urgency Level</span>
                <span className="font-semibold text-navy-900">{classification.urgencyLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-700">Risk Score</span>
                <span className="font-semibold text-navy-900">{classification.riskScore}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-700">Estimated Processing Priority</span>
                <span className="font-semibold text-navy-900">{classification.estimatedPriority}</span>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-gray-200 bg-white p-6 text-sm text-navy-700">
              No classification yet. Submit a complaint to receive AI prioritization.
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default FileComplaintPage;
