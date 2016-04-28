INSERT INTO UNIT_TYPE (unit_name) VALUES ('gram');

INSERT INTO PRODUCER (id) VALUES (3);

INSERT INTO PRODUCER (id) VALUES (5);

INSERT INTO COMMENT (body, username) VALUES ('deneme yorumu', 'denemeuser');

INSERT INTO PRODUCT (product_name,product_from,unit, unit_type_id, price, rate, producer_id) VALUES ('ezine peyniri','konya',200, 1, 5, 3, 5);

INSERT INTO PRODUCT (product_name,product_from,unit, unit_type_id, price, rate, producer_id) VALUES ('kars gravyer peyniri','Kars',100, 1, 30, 4, 3);

INSERT INTO MEMBER (firstname,surname, username, password, bio, birthdate,phone) VALUES ('ali','demir','ademir', '123456', 'boun ogrenci', '1990-06-06', '05xx');

INSERT INTO MEMBER_PRODUCT_LIST (member_id, product_id) VALUES (1, 1)