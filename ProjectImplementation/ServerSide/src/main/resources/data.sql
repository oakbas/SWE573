INSERT INTO UNIT_TYPE (unit_name) VALUES ('gram');

INSERT INTO UNIT_TYPE (unit_name) VALUES ('kilogram');

INSERT INTO UNIT_TYPE (unit_name) VALUES ('litre');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('cam kavanoz');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('plastik kutu');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('plastik poset');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('plastik vakum');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('yagli kagit');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('cam sise');

INSERT INTO PACKAGING_TYPE (packaging_name) VALUES ('teneke kutu');

INSERT INTO Productcategory (category_name) VALUES ('Peynir Cesitleri ve Tereyag');

INSERT INTO Productcategory (category_name) VALUES ('Kurutulmus Meyveler');

INSERT INTO Productcategory (category_name) VALUES ('Baharat ve Yararli Otlar');

INSERT INTO Productcategory (category_name) VALUES ('Kuruyemis Turleri');

INSERT INTO Productcategory (category_name) VALUES ('Salca Turleri');

INSERT INTO Productcategory (category_name) VALUES ('Sut');

INSERT INTO Productcategory (category_name) VALUES ('Meyve Suruplari');

INSERT INTO Productcategory (category_name) VALUES ('Receller');

INSERT INTO Productcategory (category_name) VALUES ('Pekmez Cesitleri ve Tahin');

INSERT INTO Productcategory (category_name) VALUES ('Cay');

INSERT INTO Productcategory (category_name) VALUES ('Zeytin ve Zeytinyaglari');

INSERT INTO Productcategory (category_name) VALUES ('Ballar ve Balli Urunler');

INSERT INTO ROLE (role_name) VALUES ('admin');

INSERT INTO ROLE (role_name) VALUES ('member');

INSERT INTO ROLE (role_name) VALUES ('nonmember');

INSERT INTO MEMBER (firstname,surname, email, bio, phone, membership, username, password, role_id) VALUES ('ali','demir', 'deneme', 'boun ogrenci', '05xx', false, 'ademir', '123456', 1);

INSERT INTO MEMBER (firstname,surname, email, bio, phone, membership, username, password, role_id) VALUES ('veli','demir', 'mail', 'boun ogretmen', '05xx', false, 'vdemir', '123456', 2);

INSERT INTO WORKTYPE (worktype_name) VALUES ('stoklama');

INSERT INTO WORKTYPE (worktype_name) VALUES ('satis');