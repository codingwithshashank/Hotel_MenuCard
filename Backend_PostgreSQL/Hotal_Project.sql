create table food_group(gid serial, group_name varchar(50)) 

select * from food_group

insert into food_group(group_name) values('VEG')
insert into food_group(group_name) values('Non-VEG')
insert into food_group(group_name) values('Drink')
insert into food_group(group_name) values('Starters')
insert into food_group(group_name) values('Chinese')

/*----------------------------------------------------*/

create table menu(mid serial, menu_name varchar(50),menu_price int, gid int, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())

select * from menu

insert into menu(menu_name,menu_price,gid) values('ShevBhaji',100,1)
insert into menu(menu_name,menu_price,gid) values('Mutton_Biryani',150,2)
insert into menu(menu_name,menu_price,gid) values('Juice',80,3)
insert into menu(menu_name,menu_price,gid) values('French_Fries',110,4)
insert into menu(menu_name,menu_price,gid) values('Soup',90,5)
insert into menu(menu_name,menu_price,gid) values('Rasmalai',100,6)

alter table menu add qid int

update menu set qid=2

update menu set qid=1 where mid=2 /*seperately bhi update kar sakte hai*/
/*------------------------------------------*/

select menu_name,menu_price,group_name from menu,food_group where food_group.gid=menu.gid

/*----------------------------------------------------------------------------*/

create table qtymast(qid serial,qty_type varchar(50),created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())

select * from qtymast

insert into qtymast(qty_type) values('Half')
insert into qtymast(qty_type) values('full')
insert into qtymast(qty_type) values('1/4')

/*------------------------------------------------*/

select menu_name,menu_price,group_name,qty_type from menu,food_group,qtymast where food_group.gid=menu.gid and qtymast.qid=menu.qid