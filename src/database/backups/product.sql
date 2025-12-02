-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2025 a las 04:58:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `schemasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `urlImg` varchar(255) NOT NULL,
  `reviews` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL,
  `previousPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`productId`, `name`, `description`, `urlImg`, `reviews`, `price`, `previousPrice`) VALUES
(1, 'ASUS TUF Gaming F16 ', 'GeForce RTX 3050 | Intel Core 5 | 16GB de RAM | 512GB SSD de almacenamiento | Windows 11 | 16 Pulgadas |FX607VJ-RL165W | Computador portátil Gamer', 'https://blogger.googleusercontent.com/img/a/AVvXsEhyTlhyZMdKuwnu2nsc7XXCUo4VdbAqMKkyrproa-xb-ANSQt01I99achtj2s89T8HtvvV3gLgHRFFlXqrU2u7xa_R85yfvf2GYFZTEOWshiFA8QAY1gff27ycCoYr4HI2Au_HLjAhl9RWdQjsjPUxqwhUMEfwpvOv4gCO66A5p7nkedMBQkeRaNtZ8jJA', 0, 1500000, 3500000),
(2, 'PS5 Slim Digital', ' 825GB de Almacenamiento | Edición Digital | Videojuegos Incluidos Astro Bot y Gran turismo 7', 'https://blogger.googleusercontent.com/img/a/AVvXsEiXOLXJV7hztQZxvrQNn5Eiyhimcox7aH6aFYEJtWdSCMacopg-5A0WU9lm_gsHlibpjTxXTDxTgXo9-aRH3quYKjBWYXcb-Don02jL-YVb7akJouX9A8dwRUeIn0cUr6OFAiTfgcRKpTXe5uWVhYnk6aaKOPvqIyuxlSNFwLK2-yVeEzNc0uh7XmADkoI', 0, 1099000, 2333000),
(3, 'iPhone 13 5G', '128 GB | 4GB RAM | Compatible con eSIM', 'https://blogger.googleusercontent.com/img/a/AVvXsEhiTZfUAdjcrz-d7KOgciQUP5jRlmm37TJ5Ixy1_dFRl3lU3dEG_UrgvY4NOLlUMF3eZunrMed1OpZtJeeeWPK1mpq9AeyYGlngVexK0JY5ZHjeGZNH2xecHpqA26GIgSFXX7C6cP_9ZA7b5y7r8S0cnkCs2zNsDvr0i_vyKd8iWDGdcOak-eUQvz7fw6o', 0, 1111000, 2199000),
(4, 'TV LG |60 pulgadas', '4K UHD |LED |60UA8050PSA| Incluye control', 'https://blogger.googleusercontent.com/img/a/AVvXsEhQ5cNIQcz31ceyZxGMA9h-9Y21lEMwdUSbyLANPFlVbzrJ0fxwrPRmgLUtpOB14DHR8JWEoVu1d3IR3gHDO011Tu1rgmL9ERsQ2Vod3Jw3fpEpH4g6WYQPKijPS9bQChLB0JGq9jn7pfSxFduKITlWctB7eL5NAdS-o0Wqg5Apc4v_63PTuwtc-IjgzWE', 0, 1699000, 3600000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
