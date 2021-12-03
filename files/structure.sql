##DELETE DATABASE
DROP DATABASE inline;

##CREATA DATABASE
CREATE DATABASE inline;

##CREATE TABLE USERS
CREATE TABLE users 
(
id_user_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
professional_id INT NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
mobilephone VARCHAR(10),
address VARCHAR(255),
rol ENUM('admin','professional'),
PASSWORD VARCHAR(255)
);

##CREATE TABLE PAtIENTS
CREATE TABLE patients 
(
id_patient_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
id_type ENUM('DNI','LC','LE','CI','PAIS'),
id INT,
birthday DATE NOT NULL,
genre ENUM('male','female','otro'),
email VARCHAR(255) NOT NULL UNIQUE,
mobilephone VARCHAR(10),
province VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
occupation VARCHAR(50) NOT NULL
);

##CREATE TABLE USERS_PACIENTS
CREATE TABLE users_pacients
(
id_user_pacient_pk INT PRIMARY KEY AUTO_INCREMENT,
id_user_fk INT,
id_patient_fk INT,
FOREIGN KEY (id_user_fk) REFERENCES users(id_user_pk),
FOREIGN KEY (id_patient_fk) REFERENCES patients(id_patient_pk) 
);


##CREATE TABLE TREATMENT_STATUS
CREATE TABLE treatments_status
(
id_treatment_status_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(10) NOT NULL UNIQUE
);

##CREATE TABLE TYPE_OF_TREATMENT
CREATE TABLE type_of_treatment
(
id_type_of_treatment_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(10) NOT NULL UNIQUE
);

##CREATE TABLE TREATMENTS
CREATE TABLE treatments 
(
id_treatment_pk INT PRIMARY KEY AUTO_INCREMENT,
id_treatment_status_fk INT,
id_type_of_treatment_fk INT,
id_patient_fk INT,
FOREIGN KEY (id_treatment_status_fk) REFERENCES treatments_status(id_treatment_status_pk),
FOREIGN KEY (id_type_of_treatment_fk) REFERENCES type_of_treatment(id_type_of_treatment_pk),
FOREIGN KEY (id_patient_fk) REFERENCES patients(id_patient_pk)
);


##CREATA TABLE TYPE_OF_IMAGES
CREATE TABLE type_of_images
(
id_type_of_image_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(30)
);

##CREATE TABLE IMAGES
CREATE TABLE images
(
id_image_pk INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(255),
id_type_of_image_fk INT,
id_treatment_fk INT,
FOREIGN KEY (id_type_of_image_fk) REFERENCES type_of_images(id_type_of_image_pk),
FOREIGN KEY (id_treatment_fk) REFERENCES treatments(id_treatment_pk)
);

##CREATE TABLE DETAILS
CREATE TABLE details
(
id_detail_pk INT PRIMARY KEY AUTO_INCREMENT,
TYPE VARCHAR(5) NOT NULL,
tab VARCHAR(50),
section VARCHAR(50),
checkbox VARCHAR(50),
input VARCHAR(50)
);

CREATE TABLE treatments_details
(
id_treatment_detail_pk INT PRIMARY KEY AUTO_INCREMENT,
id_treatment_fk INT,
id_detail_fk INT,
FOREIGN KEY (id_treatment_fk) REFERENCES treatments(id_treatment_pk),
FOREIGN KEY (id_detail_fk) REFERENCES details(id_detail_pk) 
);