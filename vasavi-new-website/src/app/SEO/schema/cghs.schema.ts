// CGHS services page schema.
//
// Same @graph pattern as the surgery schemas, but the primary entity is a
// MedicalWebPage + Hospital rather than a MedicalProcedure - CGHS is a
// government health scheme, not a procedure.
//
// DELIBERATE OMISSIONS (please keep them omitted):
//  - No "offers"/price block. CGHS package rates are notified by the
//    Government of India, not set by the hospital. Publishing them in
//    structured data would be both wrong to own and instantly stale.
//  - No claim of formal empanelment status in the markup, matching the
//    on-page copy ("CGHS services available at Vasavi Hospital"). If the
//    client later confirms current empanelment in writing, the phrasing can
//    be tightened here and on the page at the same time.
//
// The FAQPage entry mirrors the 8 FAQs rendered on the page - keep the two
// in sync if either is edited, or the rich result will be flagged as
// mismatched content.
export const CGHS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'CGHS Services at Vasavi Hospital, Bangalore',
      url: 'https://www.vasavihospitals.com/cghs-hospital-in-bangalore',
      description:
        'CGHS services at Vasavi Hospital, Bangalore - cardiology, orthopaedics, urology, nephrology, pulmonology and advanced surgical care for CGHS beneficiaries, supported by a dedicated CGHS Helpdesk.',
      inLanguage: 'en-IN',
      about: {
        '@type': 'GovernmentService',
        name: 'Central Government Health Scheme (CGHS)',
        serviceType: 'Government health scheme',
        provider: {
          '@type': 'GovernmentOrganization',
          name: 'Ministry of Health and Family Welfare, Government of India',
        },
        audience: {
          '@type': 'Audience',
          audienceType:
            'Serving central government employees, pensioners, family pensioners and their eligible dependants',
        },
      },
      mainEntity: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
        telephone: '+91-80-71500500',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kumaraswamy Layout, Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Cardiology & Cardiac Care' },
          { '@type': 'MedicalProcedure', name: 'Urology Services' },
          { '@type': 'MedicalProcedure', name: 'Orthopaedics & Joint Replacement' },
          { '@type': 'MedicalProcedure', name: 'Pulmonology' },
          { '@type': 'MedicalProcedure', name: 'Internal Medicine' },
          { '@type': 'MedicalProcedure', name: 'Gastroenterology & Gastrointestinal Surgery' },
          { '@type': 'MedicalProcedure', name: 'General Surgery' },
          { '@type': 'MedicalProcedure', name: 'Nephrology & Dialysis' },
          { '@type': 'MedicalProcedure', name: 'Robotic & Minimally Invasive Surgery' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CGHS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CGHS stands for the Central Government Health Scheme, run by the Ministry of Health & Family Welfare, Government of India. It provides comprehensive healthcare to serving central government employees, pensioners, and their eligible dependants. Beneficiaries hold a CGHS card and receive primary care at CGHS Wellness Centres, with referrals to empanelled hospitals for specialist consultations, diagnostics, and surgical treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is eligible to use CGHS services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eligibility is decided by CGHS, not by the hospital. It generally covers serving central government employees drawing from central civil estimates, central government pensioners and family pensioners, and their eligible dependants, along with certain other categories notified by the government. Your CGHS Wellness Centre is the correct authority to confirm your specific eligibility and card status.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents should I bring to the hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Please carry your valid CGHS card, the referral or permission letter issued by your CGHS Wellness Centre, and a government photo ID. It also helps to bring previous prescriptions, reports, discharge summaries, and your current medication list so the specialist has your full history. Our CGHS Helpdesk can confirm exactly what is needed for your particular consultation or procedure before you travel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a referral before visiting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For planned specialist consultations, investigations, and procedures, CGHS beneficiaries are normally referred by their CGHS Wellness Centre. Emergencies are handled differently - in an emergency, please come directly to our Emergency Department or call us, and our team will guide you and your family through the documentation afterwards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which treatments and specialties are available for CGHS beneficiaries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospital offers CGHS services across cardiology, urology, orthopaedics and joint replacement, pulmonology, internal medicine, gastroenterology and GI surgery, general surgery, nephrology and dialysis, and robotic and minimally invasive surgery, along with a range of specialised surgical procedures. Availability for a specific procedure can be confirmed by our CGHS Helpdesk.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is treatment charged under CGHS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Treatment for CGHS beneficiaries at empanelled hospitals is billed as per the package rates notified by the Government of India for the scheme. These rates are set and published by CGHS, not by the hospital. Our helpdesk can explain the billing and documentation process for your specific case and tell you what to expect before you proceed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do in an emergency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In a medical emergency, do not wait for paperwork. Come straight to our 24x7 Emergency Department or call 08071500500. Our emergency team will begin treatment immediately, and our CGHS desk will help your family complete the required documentation afterwards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Vasavi Hospital located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospital is located in Kumaraswamy Layout, Bangalore - easily reachable from the nearby Metro station and BMTC bus stand, with parking available on site. Call our CGHS Helpdesk if you need directions or help planning your visit.',
          },
        },
      ],
    },
  ],
};
