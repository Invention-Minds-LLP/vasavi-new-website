export const NEPHROLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Department of Nephrology – Vasavi Hospitals",
  "url": "https://www.vasavihospitals.com/nephrology-hospital-in-bangalore",
  "medicalSpecialty": "Nephrology",
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Vasavi Hospitals",
    "url": "https://www.vasavihospitals.com/"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Kidney Disease Diagnosis and Management"
    },
    {
      "@type": "MedicalService",
      "name": "Hemodialysis"
    },
    {
      "@type": "MedicalService",
      "name": "Peritoneal Dialysis"
    },
    {
      "@type": "MedicalService",
      "name": "Kidney Transplantation"
    },
    {
      "@type": "MedicalService",
      "name": "Hypertension Management"
    },
    {
      "@type": "MedicalService",
      "name": "Diabetic Nephropathy Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Polycystic Kidney Disease Management"
    },
    {
      "@type": "MedicalService",
      "name": "Robotic-Assisted Kidney Surgery"
    }
  ],
  "department": {
    "@type": "MedicalOrganization",
    "name": "Nephrology Department",
    "member": [
      {
        "@type": "Physician",
        "name": "Dr. Sunil R"
      },
      {
        "@type": "Physician",
        "name": "Dr. Sreenidhi H. C"
      }
    ]
  }
}
