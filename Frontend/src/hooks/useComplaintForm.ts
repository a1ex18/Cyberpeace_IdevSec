import { useMemo } from "react";
import { ComplaintPayload } from "../types/complaint";

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  fraudType?: string;
  amountLost?: string;
  description?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/;

export const useComplaintForm = (values: ComplaintPayload) => {
  const errors = useMemo<ValidationErrors>(() => {
    const next: ValidationErrors = {};

    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!phoneRegex.test(values.phoneNumber)) next.phoneNumber = "Enter a valid phone number.";
    if (!emailRegex.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.fraudType) next.fraudType = "Select a fraud type.";
    if (values.amountLost === "" || values.amountLost < 0) next.amountLost = "Enter a valid amount.";
    if (!values.description.trim()) next.description = "Please provide a description.";

    return next;
  }, [values]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  return { errors, isValid };
};
