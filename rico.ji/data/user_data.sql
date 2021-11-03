CREATE TABLE IF NOT EXISTS `track_aau_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_aau_users VALUES
(1,'Savage Luna','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/844/fff/?text=user1','2021-01-04 05:29:58'),
(2,'Bettye Sloan','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/763/fff/?text=user2','2021-04-13 12:39:37'),
(3,'Floyd Zimmerman','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/942/fff/?text=user3','2020-06-17 01:29:34'),
(4,'Mona Mcdowell','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/793/fff/?text=user4','2021-05-07 03:22:01'),
(5,'Leonor Wilkins','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/877/fff/?text=user5','2020-05-07 11:15:21'),
(6,'Lelia Potts','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/854/fff/?text=user6','2021-04-28 03:53:56'),
(7,'Cochran Weeks','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/727/fff/?text=user7','2020-01-03 01:48:41'),
(8,'Rena Kramer','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/748/fff/?text=user8','2021-03-15 11:41:08'),
(9,'Whitney Salazar','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/973/fff/?text=user9','2021-04-01 02:21:11'),
(10,'Rene Wilson','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/716/fff/?text=user10','2020-09-20 06:14:38');