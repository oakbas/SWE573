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

INSERT INTO PRODUCER (producer_name, producer_city, producer_address, producer_phone, producer_desc, producer_latitude, producer_longitude, photourl)
VALUES ('Ilhan Koculu', 'Kars', 'Kars Zavot Koyu', '05xxx', 'Ilhan Bey peynircilik ile ugrasiyor, 10 seneden beri Kars gravyer peyniri ureticiligi yapiyor.', 37.17, 38.79, 'koculu.png' );

INSERT INTO PRODUCER (producer_name, producer_city, producer_address, producer_phone, producer_desc, producer_latitude, producer_longitude, photourl)
VALUES ('Burhan Albayrak', 'Balikesir', 'Haciilbey Mahallesi Tavanlipinar Sokak No:1', '05xxx', 'Burhan Bey aricilik ile ugrasiyor, kucuk bir ari ciftligi var.', 37.17, 38.79, 'burhanalbayrak.png');

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

INSERT INTO PRODUCT (product_name, product_from, unit, unit_type_id, unit_amount, packaging_type_id, price, rate, producer_id, productcategory_id) VALUES ('ezine peyniri','konya',200, 1, 20, 3, 5, 3, 2, 1);

INSERT INTO PRODUCT (product_name, product_from, unit, unit_type_id, unit_amount, packaging_type_id, price, rate, producer_id, productcategory_id) VALUES ('kars gravyer peyniri','Kars',100, 1, 15, 4, 30, 4, 1, 1);

INSERT INTO MEMBER (firstname,surname, username, email, password, bio, phone, membership) VALUES ('ali','demir','ademir', 'deneme', '123456', 'boun ogrenci', '05xx', false);

INSERT INTO MEMBER (firstname,surname, username, email, password, bio, phone, membership) VALUES ('veli','demir','vdemir', 'mail', '123456', 'boun ogretmen', '05xx', false);

INSERT INTO COMMENT (body, username, product_id) VALUES ('deneme yorumu', 'denemeuser', 1);

INSERT INTO COMMENT (body, username, product_id) VALUES ('deneme yorumu', 'denemeuser', 1);

INSERT INTO COMMENT (body, username, product_id) VALUES ('deneme yorumu', 'denemeuser', 1);

INSERT INTO WORKTYPE (worktype_name) VALUES ('stoklama');

INSERT INTO WORKTYPE (worktype_name) VALUES ('satis');