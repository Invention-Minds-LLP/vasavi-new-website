import { Routes } from '@angular/router';
import { Anesthesiology } from './anesthesiology/anesthesiology';
import { Bariatricsurgery } from './bariatricsurgery/bariatricsurgery';
import { Dentistry } from './dentistry/dentistry';
import { Dermatology } from './dermatology/dermatology';
import { DiabetesEndocrinology } from './diabetes-endocrinology/diabetes-endocrinology';
import { EmergencyCriticalCare } from './emergency-critical-care/emergency-critical-care';
import { InternalMedicine } from './internal-medicine/internal-medicine';
import { LiverHpbCare } from './liver-hpb-care/liver-hpb-care';
import { MedicalGastroenterology } from './medical-gastroenterology/medical-gastroenterology';
import { MedicalOncology } from './medical-oncology/medical-oncology';
import { MinimallyInvasiveSurgery } from './minimally-invasive-surgery/minimally-invasive-surgery';
import { Neonatology } from './neonatology/neonatology';
import { Neurology } from './neurology/neurology';
import { Neurosurgery } from './neurosurgery/neurosurgery';
import { NutritionDietetics } from './nutrition-dietetics/nutrition-dietetics';
import { Opthalmology } from './opthalmology/opthalmology';
import { OralMaxillofacialSurgery } from './oral-maxillofacial-surgery/oral-maxillofacial-surgery';
import { Pediatrics } from './pediatrics/pediatrics';
import { Physiotherapy } from './physiotherapy/physiotherapy';
import { PlasticSurgery } from './plastic-surgery/plastic-surgery';
import { Psychiatry } from './psychiatry/psychiatry';
import { Radiology } from './radiology/radiology';
import { SurgicalGastroenterology } from './surgical-gastroenterology/surgical-gastroenterology';
import { VascularScience } from './vascular-science/vascular-science';
import { ContactFom } from './contact-fom/contact-fom';
import { SubNavbar } from './sub-navbar/sub-navbar';
import { Cta } from './cta/cta';
import { SurgicalOncology } from './surgical-oncology/surgical-oncology';
import { Cardiology } from './cardiology/cardiology';
import { Ent } from './ent/ent';
import { Nephrology } from './nephrology/nephrology';
import { ObstetricsGynaecology } from './obstetrics-gynaecology/obstetrics-gynaecology';
import { Oncology } from './oncology/oncology';
import { Orthopedic } from './orthopedic/orthopedic';
import { Pulmonology } from './pulmonology/pulmonology';
import { Urology } from './urology/urology';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Awards } from './awards/awards';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home } from './home/home';
import { Package } from './package/package';
import { ThankyouPage } from './thankyou-page/thankyou-page';
import { Doctor } from './doctor/doctor';
import { Chatbot } from './chatbot/chatbot';
import { RoboticHerniaComponent } from './surgery-packages/robotic-hernia/robotic-hernia.component';
import { RoboticTkrComponent } from './surgery-packages/robotic-tkr/robotic-tkr.component';
import { RoboticThrComponent } from './surgery-packages/robotic-thr/robotic-thr.component';
import { RoboticCholecystectomyComponent } from './surgery-packages/robotic-cholecystectomy/robotic-cholecystectomy.component';
import { RoboticAppendectomy } from './surgery-packages/robotic-appendectomy/robotic-appendectomy';
import { RoboticHysterectomy } from './surgery-packages/robotic-hysterectomy/robotic-hysterectomy';

import { RoboticHernia } from './ads-pages/robotic-hernia/robotic-hernia';
import { SinusSurgery } from './surgery-packages/sinus-surgery/sinus-surgery';
import { AdenoidRemoval } from './surgery-packages/adenoid-removal/adenoid-removal';
import { ACLReconstructio } from './surgery-packages/acl-reconstructio/acl-reconstructio';
import { FistulaSurgery } from './surgery-packages/fistula-surgery/fistula-surgery';
import { ProstateRemoval } from './surgery-packages/prostate-removal/prostate-removal';
import { Haemorrhoidectomy } from './surgery-packages/haemorrhoidectomy/haemorrhoidectomy';
import { Tonsillectomy } from './surgery-packages/tonsillectomy/tonsillectomy';

// export const routes: Routes = [
//     {path: 'anesthesiology' , component: Anesthesiology},
//     {path:'bariatric-surgery', component:Bariatricsurgery},
//     {path:'dentistry', component:Dentistry},
//     {path:'dermatology', component:Dermatology},
//     {path:'diabetes-endocrinology', component:DiabetesEndocrinology},
//     {path:'emergency-critical-care', component:EmergencyCriticalCare},
//     {path:'internal-medicine', component:InternalMedicine},
//     {path:'liver-hpb-care', component:LiverHpbCare},
//     {path:'medical-gastroenterology', component:MedicalGastroenterology},
//     {path:'medical-oncology', component:MedicalOncology},
//     {path:'minimally-invasive-surgery', component:MinimallyInvasiveSurgery},
//     {path:'neonatology', component:Neonatology},
//     {path:'neurology', component:Neurology},
//     {path:'neurosurgery', component:Neurosurgery},
//     {path:'nutrition-dietetics', component:NutritionDietetics},
//     {path:'opthalmology', component:Opthalmology},
//     {path:'oral-maxillofacial-surgery', component:OralMaxillofacialSurgery},
//     {path:'pediatrics', component:Pediatrics},
//     {path:'physiotherapy', component:Physiotherapy},
//     {path:'plastic-surgery', component:PlasticSurgery},
//     {path:'psychiatry', component:Psychiatry},
//     {path:'radiology', component:Radiology},
//     {path:'surgical-gastroenterology', component:SurgicalGastroenterology},
//     {path:'vascular-science', component:VascularScience},
//     {path:'surgical-oncology', component:SurgicalOncology},
//     {path:'cardiology', component:Cardiology},
//     {path:'ent', component:Ent},
//     {path:'nephrology', component:Nephrology},
//     {path:'obstetrics-gynaecology', component:ObstetricsGynaecology},
//     {path:'oncology', component:Oncology},
//     {path:'orthopedic', component:Orthopedic},
//     {path:'pulmonology', component:Pulmonology},
//     {path:'urology', component:Urology},
//     {path:'awards', component:Awards},
//     {path:'gallery', component:Gallery},
//     {path:'contact', component:Contact},
//     {path:'about', component:About},
//     {path:'', component:Home},
//     {path:'package', component:Package},
//     {path:'thank-you', component:ThankyouPage},
//     {path:'doctors/:slug', component: Doctor},
//     {path:'chatbot', component: Chatbot},
//     {path: 'robotic-hernia-surgery', component: RoboticHerniaComponent},
//     {path: 'robotic-tkr', component: RoboticTkrComponent},
//     {path: 'robotic-thr', component: RoboticThrComponent},
//     {path: 'robotic-gallbladder-removal-surgery', component: RoboticCholecystectomyComponent},
//     {path: 'robotic-appendectomy-surgery', component: RoboticAppendectomy},
//     {path: 'robotic-hysterectomy-surgery', component: RoboticHysterectomy},
//      { path: '**', redirectTo: '' },

// ];


export const routes: Routes = [
  { path: 'anesthesiology-hospital-in-bangalore', component: Anesthesiology },
  { path: 'bariatric-surgery-in-bangalore', component: Bariatricsurgery },
  { path: 'dental-clinic-in-bangalore', component: Dentistry },
  { path: 'dermatology-skin-clinic-in-bangalore', component: Dermatology },
  { path: 'diabetes-and-endocrinology-center-in-bangalore', component: DiabetesEndocrinology },
  { path: 'emergency-and-critical-care-in-bangalore', component: EmergencyCriticalCare },
  { path: 'internal-medicine-hospital-in-bangalore', component: InternalMedicine },
  { path: 'liver-hpb-care-center-in-bangalore', component: LiverHpbCare },
  { path: 'gastroenterology-hospital-in-bangalore', component: MedicalGastroenterology },
  { path: 'medical-oncology-cancer-treatment-in-bangalore', component: MedicalOncology },
  { path: 'minimally-invasive-surgery-in-bangalore', component: MinimallyInvasiveSurgery },
  { path: 'neonatology-and-nicu-care-in-bangalore', component: Neonatology },
  { path: 'neurology-hospital-in-bangalore', component: Neurology },
  { path: 'neurosurgery-specialist-in-bangalore', component: Neurosurgery },
  { path: 'nutrition-and-dietetics-consultation-in-bangalore', component: NutritionDietetics },
  { path: 'eye-hospital-in-bangalore', component: Opthalmology },
  { path: 'oral-and-maxillofacial-surgery-in-bangalore', component: OralMaxillofacialSurgery },
  { path: 'pediatric-hospital-in-bangalore', component: Pediatrics },
  { path: 'physiotherapy-center-in-bangalore', component: Physiotherapy },
  { path: 'plastic-and-reconstructive-surgery-in-bangalore', component: PlasticSurgery },
  { path: 'psychiatry-and-mental-health-in-bangalore', component: Psychiatry },
  { path: 'radiology-and-imaging-services-in-bangalore', component: Radiology },
  { path: 'surgical-gastroenterology-in-bangalore', component: SurgicalGastroenterology },
  { path: 'vascular-surgery-in-bangalore', component: VascularScience },
  { path: 'surgical-oncology-cancer-hospital-in-bangalore', component: SurgicalOncology },
  { path: 'cardiology-hospital-in-bangalore', component: Cardiology },
  { path: 'ent-hospital-in-bangalore', component: Ent },
  { path: 'nephrology-hospital-in-bangalore', component: Nephrology },
  { path: 'obstetrics-and-gynaecology-hospital-in-bangalore', component: ObstetricsGynaecology },
  { path: 'oncology-hospital-in-bangalore', component: Oncology },
  { path: 'orthopedic-hospital-in-bangalore', component: Orthopedic },
  { path: 'lung-specialist-in-bangalore', component: Pulmonology },
  { path: 'urology-hospital-in-bangalore', component: Urology },
  { path: 'awards-and-recognition', component: Awards },
  { path: 'gallery', component: Gallery },
  { path: 'contact-vasavi-hospitals-in-bangalore', component: Contact },
  { path: 'about-vasavi-hospitals-in-bangalore', component: About },
  { path: '', component: Home },
  { path: 'health-packages-in-bangalore', component: Package },
  { path: 'thank-you', component: ThankyouPage },
  { path: 'doctors/:slug', component: Doctor },
  { path: 'ai-health-chatbot-in-bangalore', component: Chatbot },

  // surgery packages
  
  { path: 'hernia-surgery-in-bangalore', component: RoboticHerniaComponent },
  { path: 'total-knee-replacement-in-bangalore', component: RoboticTkrComponent },
  { path: 'total-hip-replacement-in-bangalore', component: RoboticThrComponent },
  { path: 'gallbladder-removal-surgery-in-bangalore', component: RoboticCholecystectomyComponent },
  { path: 'appendectomy-surgery-in-bangalore', component: RoboticAppendectomy },
  { path: 'hysterectomy-surgery-in-bangalore', component: RoboticHysterectomy },

  { path: 'sinus-surgery-in-bangalore', component: SinusSurgery },
  { path: 'adenoid-removal-in-bangalore', component: AdenoidRemoval },
  { path: 'acl-reconstruction-in-bangalore', component: ACLReconstructio },
  { path: 'fistula-surgery-in-bangalore', component: FistulaSurgery },
  { path: 'turp-surgery-in-bangalore-in-bangalore', component: ProstateRemoval },
  { path: 'piles-surgery-in-bangalore-in-bangalore', component: Haemorrhoidectomy },
  { path: 'tonsillectomy-surgery-in-bangalore-in-bangalore', component: Tonsillectomy },


  // ads

  { path: 'robotic-hernia-ads', component: RoboticHernia },  
  { path: '**', redirectTo: '' },
];
