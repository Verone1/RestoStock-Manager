DROP TABLE Orders CASCADE;
DROP TABLE Inventories CASCADE;
DROP TABLE Products CASCADE;
DROP TABLE Employees CASCADE;
DROP TABLE Restaurants_And_HO CASCADE;


CREATE TABLE Restaurants_And_HO (
    org_id serial PRIMARY KEY,

    NAME text NOT NULL,
    ADDRESS text NOT NULL,
    POSTCODE text NOT NULL,
    PRIMARYCONTACTNAME text NOT NULL,
    PRIMARYCONTACTPHONE text NOT NULL,
    PRIMARYCONTACTEMAIL text NOT NULL,
    CONTRACTSTARTDATE date NOT NULL,
    CONTRACTENDDATE date NOT NULL,
    VATGROUP text,
    DESCRIPTION text,
    SHORTDESCRIPTION text
);

-- org_id 1 is reserved for HeadOffice, So the insertation of HO below is part of the DB design

INSERT INTO Restaurants_And_HO (NAME, ADDRESS, POSTCODE, PRIMARYCONTACTNAME, PRIMARYCONTACTPHONE, PRIMARYCONTACTEMAIL, CONTRACTSTARTDATE, CONTRACTENDDATE, VATGROUP, DESCRIPTION, SHORTDESCRIPTION) 
VALUES ('Head Office', '123 Food Lane', 'AAA AB1', 'Alice Johnson', '01234567890', 'alice@good-eats.com', '2022-01-01', '2023-01-01', 'myVatGroup', 'this is Head Office', 'HO');



CREATE TABLE Employees (
    emp_id serial PRIMARY KEY,
    PASSWORD text,
    org_id integer REFERENCES Restaurants_And_HO(org_id),

    FIRSTNAME text NOT NULL,
    MIDDLENAME text,
    LASTNAME text NOT NULL,
    DEPARTMENT text NOT NULL,
    PHONENO text,
    STARTDATE date NOT NULL,
    ENDDATE date,
    JOB text NOT NULL,
    LEVEL text,
    SEX text,
    BIRTHDATE date,
    PRONOUNS text
);


CREATE TABLE Products (
    pid serial PRIMARY KEY,

    NAME text NOT NULL,
    PRICE numeric(10, 2),
    MANAFACTURER text,
    WEIGHT numeric(10, 2),
    VOLUME numeric(10, 2),
    CREATEDDATE date,
    VATGROUP text,
    DESCRIPTION text,
    SHORTDESCRIPTION text
);


CREATE TABLE Inventories(
    org_id INT REFERENCES Restaurants_And_HO(org_id),
    pid    INT REFERENCES Products(pid),
    quantity INT NOT NULL,
    PRIMARY KEY (org_id, pid)
);


DROP TYPE ORDER_STATES;
CREATE TYPE ORDER_STATES AS ENUM ('Pending', 'Approved', 'Disapproved');
CREATE TABLE Orders (
    oid         serial PRIMARY KEY,
    made_by     INT REFERENCES Employees(emp_id) NOT NULL,
    approved_by INT REFERENCES Employees(emp_id),
    order_state ORDER_STATES,
    
    pid    INT REFERENCES Products(pid),
    quantity INT NOT NULL,
    total   numeric(10, 2),
    orderdate date NOT NULL
);


--    Dummy Data


INSERT INTO Restaurants_And_HO (NAME, ADDRESS, POSTCODE, PRIMARYCONTACTNAME, PRIMARYCONTACTPHONE, PRIMARYCONTACTEMAIL, CONTRACTSTARTDATE, CONTRACTENDDATE) 
VALUES 
('The Gourmet Spot', '456 Chef Road', 'BC2 3DE', 'Bob Smith', '01239876543', 'bob@thegourmetspot.com', '2022-02-01', '2023-02-01'),
('Fast Foodies', '789 Burger Blvd', 'CD3 4EF', 'Carol White', '01987654321', 'carol@fastfoodies.com', '2022-03-01', '2023-03-01'),
('Good Eats', '123 Food Lane', 'AB1 2CD', 'Alice Johnson', '01234567890', 'alice@good-eats.com', '2022-01-01', '2023-01-01'),
('Bad Eats', '456 Food Lane', 'AB1 2CD', 'Alice son', '01234512340', 'alice@good.com', '2022-01-01', '2023-01-01');


INSERT INTO Employees (PASSWORD, org_id, FIRSTNAME, MIDDLENAME, LASTNAME, DEPARTMENT, PHONENO, STARTDATE, JOB, SEX, BIRTHDATE) 
VALUES 

('pass111', 1, 'Em', 'R', 'Jo', 'Service', '02345678901', '2022-02-15', 'HO employee', 'Female', '1992-08-15'),
('pass111', 1, 'Em2', 'R', 'Jo2', 'Service', '02345678901', '2022-02-15', 'HO employee', 'Female', '1992-08-15'),    -- two HeadOffice employees

('pass123', 2, 'Emily', 'R', 'Jones', 'Service', '02345678901', '2022-02-15', 'Waitress', 'Female', '1992-08-15'),   -- each of the 4 restaurants has one employee
('12345pass', 3, 'Mike', 'B', 'Davis', 'Management', '03123456789', '2022-03-10', 'Manager', 'Male', '1985-11-20'),
('ppppp', 4, 'JJJKK', 'R', 'WW', 'Service', '02345678901', '2022-02-15', 'Waitress', 'Female', '1994-08-15'),
('kkkk55', 5, 'NNNNMMM', 'B', 'AAAA', 'Management', '03123456789', '2022-03-10', 'Manager', 'Male', '1987-11-20');


INSERT INTO Products (NAME, PRICE, CREATEDDATE) 
VALUES 
('Veggie Burger', 10.00, '2022-01-15'),
('Chocolate Cake', 5.00, '2022-01-20'),
('Noodles', 20.00, '2014-01-15'),
('Dishes', 30.00, '2019-01-20');



INSERT INTO Inventories (org_id, pid, quantity) 
VALUES 
(1, 1, 100),
(1, 4, 100),
(2, 2, 100),
(2, 3, 100),
(2, 4, 100);


INSERT INTO Orders (made_by, approved_by, order_state, pid, quantity, total, orderdate) 
VALUES 
(3, null, 'Pending',   1, 50, 900.00, '2022-04-01'),
(4, 1, 'Approved',     2, 20, 750.00, '2022-05-01'),
(5, null, 'Pending',   3, 30, 300.00, '2022-04-01'),
(6, 2, 'Approved',     4, 40, 500.00, '2022-05-01');






