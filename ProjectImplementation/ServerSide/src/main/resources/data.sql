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

INSERT INTO PRODUCER (producer_name, producer_city, producer_address, producer_phone, producer_desc)
VALUES ('Ilhan Koculu', 'Kars', 'Kars Zavot Koyu', '05xxx', 'Ilhan Bey peynircilik ile ugrasiyor, 10 seneden beri Kars gravyer peyniri ureticiligi yapiyor.' );

INSERT INTO PRODUCER (producer_name, producer_city, producer_address, producer_phone, producer_desc)
VALUES ('Burhan Albayrak', 'Balikesir', 'Haciilbey Mahallesi Tavanlipinar Sokak No:1', '05xxx', 'Burhan Bey aricilik ile ugrasiyor, kucuk bir ari ciftligi var.' );

INSERT INTO COMMENT (body, username) VALUES ('deneme yorumu', 'denemeuser');

INSERT INTO PRODUCT (product_name, product_from, unit, unit_type_id, unit_amount, packaging_type_id, price, rate, producer_id) VALUES ('ezine peyniri','konya',200, 1, 20, 3, 5, 3, 2);

INSERT INTO PRODUCT (product_name, product_from, unit, unit_type_id, unit_amount, packaging_type_id, price, rate, producer_id) VALUES ('kars gravyer peyniri','Kars',100, 1, 15, 4, 30, 4, 1);

INSERT INTO MEMBER (firstname,surname, username, email, password, bio, phone) VALUES ('ali','demir','ademir', 'deneme', '123456', 'boun ogrenci', '05xx');

INSERT INTO MEMBER_PRODUCT_LIST (member_id, product_id) VALUES (1, 1)