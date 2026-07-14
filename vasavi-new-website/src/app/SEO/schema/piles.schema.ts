// Same @graph pattern used by appendectomy/gallstone/hernia schemas -
// MedicalProcedure + FAQPage built from the 8 FAQs shown on the piles
// landing page. NOTE: this schema deliberately has NO "offers"/price block.
// The pre-rebuild page's "₹1,80,000*" figure was leftover boilerplate
// copy-pasted from the Appendectomy template's commented-out hero (the
// surrounding text literally said "appendix surgery packages") - not a
// real, confirmed piles price. Per explicit user decision, pricing is
// omitted entirely rather than invented or reused from an unrelated page.
export const PILES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Piles (Haemorrhoids) Surgery - Haemorrhoidectomy',
      url: 'https://www.vasavihospitals.com/piles-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Anus / Rectum',
      howPerformed: [
        'Laser Haemorrhoidectomy',
        'Conventional (Open) Haemorrhoidectomy',
      ],
      followup: 'Post-operative follow-up and recovery care as advised by the surgeon',
      provider: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
      },
      performedBy: [
        { '@type': 'Physician', name: 'Dr. Mohan Ram. P' },
      ],
      indication: [
        'Piles',
        'Haemorrhoids',
        'Anal Bleeding',
        'Prolapsed Haemorrhoids',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can piles be treated without surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Early-stage (Grade 1-2) piles are often managed with dietary changes, medication, sitz baths, and minor office procedures like banding. But once piles reach Grade 3-4 - prolapsing out with bowel movements or staying out permanently - conservative treatment stops giving lasting relief, and surgery (laser or conventional) becomes the option that reliably resolves the problem. Your surgeon can confirm your grade with a simple examination.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for piles surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore offers both Laser Haemorrhoidectomy and Conventional surgery, performed by experienced general surgeons with a dedicated day-care and short-stay recovery setup. It is a trusted choice for piles treatment in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is piles surgery covered under health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Piles (Haemorrhoidectomy) surgery is covered under most health insurance plans and government schemes, including corporate group insurance, when it is medically indicated. Our dedicated insurance team checks your eligibility upfront and handles the entire cashless approval process for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does piles surgery take? How many days in hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laser Haemorrhoidectomy is typically a day-care procedure - many patients go home the same day or after one night. Conventional (open) surgery may need a slightly longer 1-2 day stay depending on the grade and extent of the procedure. Your surgeon will confirm what to expect for your specific case.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Laser treatment for piles better than conventional surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laser Haemorrhoidectomy is minimally invasive, generally causes less pain, less bleeding, and allows a faster return to normal activity - making it a popular choice for most grades of piles. Conventional (open) surgery remains a proven, effective option, particularly useful for very advanced or complex cases. Your surgeon will recommend the best approach after examining your condition.',
          },
        },
        {
          '@type': 'Question',
          name: 'When can I return to normal activities after piles surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients resume light daily activities within a few days and desk work within a week to 10 days, with laser patients typically recovering a little faster than conventional surgery patients. Your surgeon will guide you on diet, hygiene and activity precautions during the first couple of weeks to support healing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I keep ignoring piles symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Piles are not usually an overnight emergency - but they are progressive. Ignoring early symptoms can lead to worsening grade, chronic bleeding that causes anaemia over time, recurring pain, and in some cases a thrombosed (clotted) pile that is suddenly very painful. Getting evaluated early, while the condition is still mild, means simpler treatment and faster recovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will piles come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both laser and conventional haemorrhoidectomy have high success rates for resolving the piles that are treated. Recurrence risk is reduced significantly by following your surgeon\'s advice on fibre-rich diet, adequate water intake, and avoiding prolonged straining or sitting - habits that helped cause piles in the first place.',
          },
        },
      ],
    },
  ],
};
