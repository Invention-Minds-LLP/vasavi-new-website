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

export const routes: Routes = [
    {path: 'anesthesiology' , component: Anesthesiology},
    {path:'bariatric-surgery', component:Bariatricsurgery},
    {path:'dentistry', component:Dentistry},
    {path:'dermatology', component:Dermatology},
    {path:'diabetes-endocrinology', component:DiabetesEndocrinology},
    {path:'emergency-critical-care', component:EmergencyCriticalCare},
    {path:'internal-medicine', component:InternalMedicine},
    {path:'liver-hpb-care', component:LiverHpbCare},
    {path:'medical-gastroenterology', component:MedicalGastroenterology},
    {path:'medical-oncology', component:MedicalOncology},
    {path:'minimally-invasive-surgery', component:MinimallyInvasiveSurgery},
    {path:'neonatology', component:Neonatology},
    {path:'neurology', component:Neurology},
    {path:'neurosurgery', component:Neurosurgery},
    {path:'nutrition-dietetics', component:NutritionDietetics},
    {path:'opthalmology', component:Opthalmology},
    {path:'oral-maxillofacial-surgery', component:OralMaxillofacialSurgery},
    {path:'pediatrics', component:Pediatrics},
    {path:'physiotherapy', component:Physiotherapy},
    {path:'plastic-surgery', component:PlasticSurgery},
    {path:'psychiatry', component:Psychiatry},
    {path:'radiology', component:Radiology},
    {path:'surgical-gastroenterology', component:SurgicalGastroenterology},
    {path:'vascular-science', component:VascularScience},
    {path:'surgical-oncology', component:SurgicalOncology},
    {path:'cardiology', component:Cardiology},
    {path:'ent', component:Ent},
    {path:'nephrology', component:Nephrology},
    {path:'obstetrics-gynaecology', component:ObstetricsGynaecology},
    {path:'oncology', component:Oncology},
    {path:'orthopedic', component:Orthopedic},
    {path:'pulmonology', component:Pulmonology},
    {path:'urology', component:Urology},
    {path:'awards', component:Awards},
    {path:'gallery', component:Gallery},
    {path:'contact', component:Contact},
    {path:'about', component:About},
    {path:'home', component:Home},
    {path:'package', component:Package},
    {path:'thankyou', component:ThankyouPage},

];
