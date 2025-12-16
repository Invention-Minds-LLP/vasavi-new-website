export const UROLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Department of Urology – Vasavi Hospitals",
  "url": "https://www.vasavihospitals.com/urology-hospital-in-bangalore",
  "medicalSpecialty": "Urology",
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Vasavi Hospitals",
    "url": "https://www.vasavihospitals.com/"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Kidney Stones Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Prostate Disorders Management"
    },
    {
      "@type": "MedicalService",
      "name": "Urinary Tract Infections (UTIs) Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Bladder Disorders Care"
    },
    {
      "@type": "MedicalService",
      "name": "Male Infertility and Sexual Dysfunction Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Urologic Cancer Care"
    },
    {
      "@type": "MedicalService",
      "name": "Pediatric Urology Care"
    },
    {
      "@type": "MedicalService",
      "name": "Robotic Urological Surgery"
    }
  ],
  "department": {
    "@type": "MedicalOrganization",
    "name": "Urology Department",
    "member": [
      {
        "@type": "Physician",
        "name": "Dr. Ramesh Hanumegowda"
      },
      {
        "@type": "Physician",
        "name": "Dr. Supreeth Nagaraju"
      }
    ]
  }
}
