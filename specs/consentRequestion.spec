# Consent request of patient details

## Should be able to send diagnostic reports to consent management system
* Receptionist Start an OPD for patient with first name "firstName" last name "LastName" gender "F" and year of birth "1999"
* Doctor prescribes medication for patient
|Drug Name|Dose|Units|
|Paracetamol 500mg (Tablet)|1|Capsule(s)|
* Doctor prescribes blood tests
|TestName|
|CBC|
* Doctor prescribes radiology tests
|TestName|
|MRI|
* Lab technician uploads the blood reports
|Report|
|relative file path|
* Lab technician uploads the radiology reports
|Report|
|relative file path|
* Fetch the reports from PR app
* Doctor creates a consent request to get last 5 years reports of the patient that expires five years later
* The patient approves the consent request raised
* The doctor is now able to see only the requested diagnostic reports of last 5 years

## Should be able to send radiology reports to consent management system
* Receptionist Start an OPD for patient with first name "firstName" last name "LastName" gender "F" and year of birth "1999"
* Doctor prescribes medication for patient
|Drug Name|Dose|Units|
|Paracetamol 500mg (Tablet)|1|Capsule(s)|
* Doctor prescribes blood tests
|TestName|
|CBC|
* Doctor prescribes radiology tests
|TestName|
|MRI|
* Lab technician uploads the blood reports
|Report|
|relative file path|
* Lab technician uploads the radiology reports
|Report|
|relative file path|
* Fetch the reports from PR app

## Should be able to send prescription to consent management system
* Receptionist Start an OPD for patient with first name "firstName" last name "LastName" gender "F" and year of birth "1999"
* Doctor prescribes medication for patient
|Drug Name|Dose|Units|
|Paracetamol 500mg (Tablet)|1|Capsule(s)|
* Doctor prescribes blood tests
|TestName|
|CBC|
* Doctor prescribes radiology tests
|TestName|
|MRI|
* Lab technician uploads the blood reports
|Report|
|relative file path|
* Lab technician uploads the radiology reports
|Report|
|relative file path|
* Fetch the prescription from PR app
