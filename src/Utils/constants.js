export const BASE_URL = "https://appointment-booking-system-dgpm.onrender.com"
// Authentication
export const SIGN_UP_URL = "https://appointment-booking-system-dgpm.onrender.com/api/auth/register";
export const LOGIN_URL = "https://appointment-booking-system-dgpm.onrender.com/api/auth/login";

// Crud Operation
export const FETCH_USER_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/user";
export const FETCH_ALL_USERS_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/users";
export const UPDATE_USER_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/update";
export const PROMOTE_USER_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/promote";
export const DELETE_USER_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/delete";
export const DELETE_ALL_USERS_URL = "https://appointment-booking-system-dgpm.onrender.com/api/user-bp/delete_all";

// Booking of Appointment
export const ACADEMIC_ADVISING_URL = "https://appointment-booking-system-dgpm.onrender.com/api/education-bp/academic";
export const CAREER_COUNSELING_URL = "https://appointment-booking-system-dgpm.onrender.com/api/education-bp/career";
export const ONE_ON_ONE_TUTORING_URL = "https://appointment-booking-system-dgpm.onrender.com/api/education-bp/tutoring";
export const HEALTHCARE_CONSULTATION_URL = "https://appointment-booking-system-dgpm.onrender.com/api/healthcare/consult";
export const HEALTHCARE_COUNSELING_URL = "https://appointment-booking-system-dgpm.onrender.com/api/healthcare/counseling";
export const HEALTHCARE_DENTAL_URL = "https://appointment-booking-system-dgpm.onrender.com/api/healthcare/dental";
export const HEALTHCARE_PHYSIOTHERAPY_URL = "https://appointment-booking-system-dgpm.onrender.com/api/healthcare/physiotherapy";
export const HEALTHCARE_VACCINATION_URL = "https://appointment-booking-system-dgpm.onrender.com/api/healthcare/vaccination";
export const BUSINESS_CONSULTATION_URL = "https://appointment-booking-system-dgpm.onrender.com/api/professional/business";
export const FINANCIAL_ADVISORY_URL = "https://appointment-booking-system-dgpm.onrender.com/api/professional/financial";
export const REAL_ESTATE_AGENTS_URL = "https://appointment-booking-system-dgpm.onrender.com/api/professional/real-estate";
export const ELECTRICAL_ELECTRONICS_REPAIR_URL = "https://appointment-booking-system-dgpm.onrender.com/api/technical/electrical";
export const HOME_SERVICE_URL = "https://appointment-booking-system-dgpm.onrender.com/api/technical/home";

// Appointment operations
export const FETCH_ALL_USERS_APPOINTMENT_URL = "https://appointment-booking-system-dgpm.onrender.com/api/appointment-act/users-appointment";
export const FETCH_USER_APPOINTMENT_URL = "https://appointment-booking-system-dgpm.onrender.com/api/appointment-act/user-appointment";
export const UPDATE_USER_APPOINTMENT_URL = "https://appointment-booking-system-dgpm.onrender.com/api/appointment-act/update-user-appointment";
export const DELETE_USER_APPOINTMENT_URL = "https://appointment-booking-system-dgpm.onrender.com/api/appointment-act/delete-appointment";

// google api
export const START_OAUTH = "https://appointment-booking-system-dgpm.onrender.com/api/bookApp/start-Oauth"
export const CLEAR_TOKEN = "https://appointment-booking-system-dgpm.onrender.com/api/token/clear-token"
// language keys and values.
export const SUPPORTED_LANGUAGES = [
    {identifier:"eng", name:"English"},
    {identifier:"yoruba", name:"Yoruba"},
    {identifier:"hausa", name:"Hausa"},
    {identifier:"igbo", name:"Igbo"},
    {identifier:"hindi", name:"Hindi"},
    {identifier:"spanish", name:"Spanish"},
    {identifier:"chinese", name:"Chinese"},
    {identifier:"french", name:"French"}
];
export const EDUCATIONAL_APPOINTMENT_PERSONNEL = [
    {identifier:"dr chukwuka", name:"Dr. Chukwuka"},
    {identifier:"dr stephen", name:"Dr. Stephen"},
];
export const HEALTHCARE_APPOINTMENT_PERSONNEL = [
    {identifier:"dr chukwuka", name:"Dr. Chukwuka"},
    {identifier:"dr stephen", name:"Dr. Stephen"},
];
export const PROFESSIONAL_SERVICE_APPOINTMENT_PERSONNEL = [
    {identifier:"dr chukwuka", name:"Dr. Chukwuka"},
    {identifier:"dr stephen", name:"Dr. Stephen"},
];
export const TECHNICAL_AND_REPAIR_SERVICE_APPOINTMENT_PERSONNEL = [
    {identifier:"dr chukwuka", name:"Dr. Chukwuka"},
    {identifier:"dr stephen", name:"Dr. Stephen"},
];