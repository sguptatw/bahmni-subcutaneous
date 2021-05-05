# Linking HealthIDs

## Should be able to link HealthID2
* Receptionist Registers a patient with first name "Virat" last name "Kohli" gender "M" year of birth "1999" by assciating healthID "healthID"

## Should be able to fetch test reports from PR app
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

## Should be able to fetch prescription into PR app
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