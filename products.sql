-- Adminer 4.8.1 MySQL 8.0.30 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `image_url` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`, `users_id`, `name`, `price`, `stock`, `status`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1,	1,	'samsung S10',	5000000,	23,	1,	'http://localhost:3000/public/jadiin.jpg',	'2023-05-20 13:52:03',	'2023-05-20 13:52:03'),
(2,	1,	'Iphone 11',	7500000,	12,	1,	'http://localhost:3000/public/gallery-1.jpg',	'2023-05-21 01:46:39',	'2023-05-21 01:46:39'),
(3,	2,	'sasmung 51',	65000000,	87,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-21 01:47:21',	'2023-05-22 11:20:56'),
(4,	1,	'Iphone 10 Pro',	6850000,	16,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-21 01:48:12',	'2023-05-21 01:48:12'),
(5,	2,	'Samsung Note 11',	23900000,	87,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-21 01:52:02',	'2023-05-22 11:21:57'),
(6,	1,	'Samsung note 10',	5500000,	8,	1,	'http://localhost:3000/public/gallery-5.jpg',	'2023-05-21 01:52:22',	'2023-05-21 01:52:22'),
(7,	3,	'Samsung note 9',	4500000,	6,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-21 01:53:33',	'2023-05-21 01:53:33'),
(9,	2,	'nokia',	30000000,	6,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-22 05:06:00',	'2023-05-22 05:06:00'),
(10,	2,	'nokia er',	30000000,	6,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-22 09:55:54',	'2023-05-22 09:55:54'),
(11,	2,	'sasmung s2',	30000000,	6,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-22 10:08:35',	'2023-05-22 10:08:35'),
(12,	2,	'sasmung s6',	30000000,	6,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-22 10:49:10',	'2023-05-22 10:49:10'),
(13,	2,	'sasmung 87',	65000000,	87,	1,	'http://localhost:3000/public/gallery-4.jpg',	'2023-05-22 11:15:33',	'2023-05-22 11:15:33');

-- 2023-05-22 11:59:54
