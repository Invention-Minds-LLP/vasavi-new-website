export const PULMONOLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Department of Pulmonology – Vasavi Hospitals",
  "url": "https://www.vasavihospitals.com/lung-specialist-in-bangalore",
  "medicalSpecialty": "Pulmonology",
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Vasavi Hospitals",
    "url": "https://www.vasavihospitals.com/"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Pulmonary Function Testing"
    },
    {
      "@type": "MedicalService",
      "name": "Bronchoscopy"
    },
    {
      "@type": "MedicalService",
      "name": "Asthma Management"
    },
    {
      "@type": "MedicalService",
      "name": "Sleep Apnea Diagnosis and Management"
    },
    {
      "@type": "MedicalService",
      "name": "Lung Cancer Screening"
    },
    {
      "@type": "MedicalService",
      "name": "Allergy Testing and Treatment"
    }
  ],
  "department": {
    "@type": "MedicalOrganization",
    "name": "Pulmonology Department",
    "member": [
      {
        "@type": "Physician",
        "name": "Dr. Manjunath P. H"
      }
    ]
  }
}
