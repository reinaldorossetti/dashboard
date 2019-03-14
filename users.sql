CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `mob_no` varchar(15) NOT NULL,
 `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
 `perfil` varchar(15) COLLATE utf8_unicode_ci NULL,
 `created` timestamp default now(), 
 `modified` timestamp default now() on update now(),
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `monitor_chamados` (
 `codigo` int(12) NOT NULL AUTO_INCREMENT,
 `num_chamado` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `data_transferencia` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `status` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
 `data_fechamento` varchar(15) NOT NULL,
 `created` timestamp default now()
 PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


