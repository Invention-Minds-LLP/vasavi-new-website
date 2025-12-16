export const ENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Department of ENT – Vasavi Hospitals",
  "url": "https://www.vasavihospitals.com/ent-hospital-in-bangalore",
  "medicalSpecialty": "Otolaryngology",
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Vasavi Hospitals",
    "url": "https://www.vasavihospitals.com/"
  },
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Ear Examination and Treatment"
    },
    {
      "@type": "MedicalService",
      "name": "Nasal and Sinus Surgeries"
    },
    {
      "@type": "MedicalService",
      "name": "Throat and Voice Disorder Management"
    },
    {
      "@type": "MedicalService",
      "name": "Head and Neck Surgery"
    },
    {
      "@type": "MedicalService",
      "name": "Sleep Apnea and Snoring Solutions"
    },
    {
      "@type": "MedicalService",
      "name": "Allergy and Immunotherapy"
    },
    {
      "@type": "MedicalService",
      "name": "Skin Prick Test and SLIT Test"
    }
  ],
  "department": {
    "@type": "MedicalOrganization",
    "name": "ENT Department",
    "member": [
      {
        "@type": "Physician",
        "name": "Dr. Kumaresh Krishnamoorthy"
      },
      {
        "@type": "Physician",
        "name": "Dr. Yashaswi Srikakula"
      },
      {
        "@type": "Physician",
        "name": "Dr. Sphoorthy G Itigi"
      }
    ]
  }
}
