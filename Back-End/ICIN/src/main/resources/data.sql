insert into users (user_admin, birthdate, last_name, name, username, password, active_user, deposit_access, phone, transfer_access, withdraw_access) values (1,'1983-09-01' , 'Luque', 'Javier', 'jluqueco', '123',1,1,'3059050113',1,1)
insert into users (user_admin, birthdate, last_name, name, username, password, active_user, deposit_access, phone, transfer_access, withdraw_access) values (0,'1978-12-17' , 'Vega', 'Adriana', 'avega', '456',1,1,'7862706723',1,0)
insert into accounts(balance, block_status, type, username) values(100000, 0, 0,'jluqueco')
insert into accounts(balance, block_status, type, username) values(1000000, 0, 1,'jluqueco')
insert into accounts(balance, block_status, type, username) values(5000000, 0, 1,'avega')


