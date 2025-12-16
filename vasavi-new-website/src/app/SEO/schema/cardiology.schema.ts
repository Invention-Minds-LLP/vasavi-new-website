export const CARDIOLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Department of Cardiology – Vasavi Hospitals",
  "url": "https://www.vasavihospitals.com/cardiology-hospital-in-bangalore",
  "medicalSpecialty": "Cardiology",
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Vasavi Hospitals",
    "url": "https://www.vasavihospitals.com/"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Heart Failure Management"
    },
    {
      "@type": "MedicalService",
      "name": "Heart Rhythm Disorders (Arrhythmia)"
    },
    {
      "@type": "MedicalService",
      "name": "Coronary Artery Disease Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "High Blood Pressure and Cholesterol Management"
    },
    {
      "@type": "MedicalService",
      "name": "Heart Valve Disorders Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Post-Heart Attack Recovery Care"
    },
    {
      "@type": "MedicalService",
      "name": "Preventive Cardiology and Heart Checkups"
    },
    {
      "@type": "MedicalService",
      "name": "Congenital Heart Defects Care"
    }
  ],
  "department": {
    "@type": "MedicalOrganization",
    "name": "Cardiology Department",
    "member": [
      {
        "@type": "Physician",
        "name": "Dr. Krishna Kumar B. R"
      },
      {
        "@type": "Physician",
        "name": "Dr. Girish Navasundi"
      },
      {
        "@type": "Physician",
        "name": "Dr. Praneeth"
      },
      {
        "@type": "Physician",
        "name": "Dr. Balaraj"
      }
    ]
  }
}
