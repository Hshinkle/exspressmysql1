use studentdb;
drop table students;
create table students (id varchar(40) not null primary key, fname varchar(30), lname varchar(30), grade varchar(1));
insert into students values ('001', 'Holly', 'Shinkle', 'A');
insert into students values ('002', 'Rodas', 'Patherson', 'A');
insert into students values ('003', 'Mark', 'Maxwell', 'A');
select * from students;
commit;
...or create a new repository on the command line
echo "# bob" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Hshinkle/exspressmysql1.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Hshinkle/exspressmysql1.git
git branch -M main
git push -u origin main
