INSERT INTO `branches` (`branchID`, `branchName`, `createdAt`, `updatedAt`) VALUES
(1, 'LTN-1', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(2, 'LTN-2', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(3, 'LTN-3', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(4, 'LTN-4', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(5, 'LTN-5', '2024-05-07 18:57:40', '2024-05-07 18:57:40'),
(6, 'LTN-6', '2024-05-07 18:57:40', '2024-05-07 18:57:40');

INSERT INTO `checklists` (`checklistID`, `checklistType`, `createdAt`, `updatedAt`) VALUES
(1, 'Daily', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(2, 'Weekly', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(3, 'Monthly', '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(4, 'Yearly', '2024-05-05 13:24:02', '2024-05-05 13:24:02');

INSERT INTO `rooms` (`roomID`, `branchID`, `status`, `roomName`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'MAIN-LTN-1', '2024-05-05 13:24:02', '2024-06-14 04:33:12'),
(2, 2, 2, 'MAIN-LTN-2', '2024-05-05 13:24:02', '2024-06-12 15:16:37'),
(3, 3, 2, 'MAIN-LTN-3', '2024-05-05 13:24:02', '2024-06-14 05:02:08'),
(4, 4, 0, 'MAIN-LTN-4', '2024-05-05 13:24:02', '2024-06-12 15:16:37'),
(5, 5, 2, 'MAIN-LTN-5', '2024-05-07 19:05:01', '2024-06-14 16:46:10'),
(6, 6, 1, 'MAIN-LTN-6', '2024-05-07 19:05:01', '2024-06-12 15:16:37'),
(7, 1, 2, 'BACKUP-LTN-1', '2024-05-07 18:58:54', '2024-06-12 15:16:37'),
(8, 2, 1, 'BACKUP-LTN-2', '2024-05-07 19:00:03', '2024-06-12 15:16:37'),
(9, 3, 2, 'BACKUP-LTN-3', '2024-05-07 19:00:03', '2024-06-17 22:49:20'),
(10, 4, 0, 'BACKUP-LTN-4', '2024-05-07 19:00:03', '2024-06-12 15:16:37'),
(11, 5, 0, 'BACKUP-LTN-5', '2024-05-07 19:00:03', '2024-06-12 15:16:37'),
(12, 6, 2, 'BACKUP-LTN-6', '2024-05-07 19:00:03', '2024-06-12 15:16:37');

INSERT INTO `equipment` (`equipmentID`, `roomID`, `equipmentName`, `checklistID`, `createdAt`, `updatedAt`) VALUES
(13, 3, 'Cisco', 3, '2024-06-18 20:10:18', '2024-06-18 20:10:38'),
(14, 3, 'Computer Hardware', 3, '2024-06-18 20:10:32', '2024-06-18 20:10:32'),
(15, 3, 'Notebook', 3, '2024-06-18 20:10:57', '2024-06-18 20:10:57'),
(16, 3, 'Workstation Dashboard', 3, '2024-06-18 20:11:10', '2024-06-18 20:11:10'),
(17, 3, 'Tape (Test Restore)', 3, '2024-06-18 20:11:34', '2024-06-18 20:11:34'),
(18, 3, 'Servers', 3, '2024-06-18 20:11:46', '2024-06-18 20:11:46'),
(19, 3, 'Smartphone', 4, '2024-06-18 20:13:16', '2024-06-18 20:13:16');

INSERT INTO `tasks` (`taskID`, `taskTitle`, `checklistID`, `createdAt`, `updatedAt`) VALUES
(1, 'Check Air Conditioning', 1, '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(4, 'Test LAN (Network room failure) : Total shutdown of network room and all connection and VMs will be moved to 2nd server room', 4, '2024-05-05 13:24:02', '2024-05-05 13:24:02'),
(7, 'VCC Accurate', 2, '2024-06-10 15:23:30', '2024-06-10 15:24:12'),
(8, 'Check Storage Hard disc', 1, '2024-06-10 15:25:13', '2024-06-10 15:25:13'),
(9, 'Check ESX alert and warning', 1, '2024-06-10 15:25:32', '2024-06-10 15:25:32'),
(10, 'Check Switch and Backbone', 1, '2024-06-10 15:25:40', '2024-06-10 15:25:40'),
(11, 'Check UPS Aler and Warning', 1, '2024-06-10 15:25:48', '2024-06-10 15:25:48'),
(17, 'Test Restore : Restore file from file server', 3, '2024-06-18 13:24:37', '2024-06-18 13:24:37'),
(18, 'Test Antivirus : Ensure the installation of antivirus in all devices', 3, '2024-06-18 13:25:14', '2024-06-18 13:25:14'),
(19, 'Exchange Backup Tapes', 3, '2024-06-18 13:25:21', '2024-06-18 13:25:21'),
(20, 'Test Line (Internet Backup Connexion): Disconnect the primary line (LS FO) Auto switch to FH 50MO', 3, '2024-06-18 13:25:29', '2024-06-18 13:25:29'),
(21, 'Test GSM Transmitter: Ensure the working of GSM transmitter', 3, '2024-06-18 13:25:36', '2024-06-18 13:25:36'),
(22, 'Check Router', 1, '2024-06-18 20:03:21', '2024-06-18 20:03:21'),
(23, 'Check Optical Fiber model of TT', 1, '2024-06-18 20:03:34', '2024-06-18 20:03:34'),
(24, 'Check Backup and change the tape', 1, '2024-06-18 20:03:42', '2024-06-18 20:03:42'),
(25, 'Check Proprety of all server room', 1, '2024-06-18 20:04:00', '2024-06-18 20:04:00'),
(26, 'Licence Application', 3, '2024-06-18 20:08:57', '2024-06-18 20:08:57'),
(27, 'Deny listed Applications Per Computer', 3, '2024-06-18 20:09:04', '2024-06-18 20:09:04'),
(28, 'Applications Per Computer', 3, '2024-06-18 20:09:12', '2024-06-18 20:09:12'),
(29, 'Test Restore: Database', 4, '2024-06-18 20:12:17', '2024-06-18 20:12:17'),
(30, 'Test Generator: Total shutdown of power and test the star of generator', 4, '2024-06-18 20:19:35', '2024-06-18 20:19:35'),
(31, 'Test air conditioner: Ensure the air conditioner is connected to generator', 4, '2024-06-18 20:19:41', '2024-06-18 20:19:41'),
(32, 'Test VPC: The VPC solution should be tested by shutdown one server room and ensure the continuity by the 2nd', 4, '2024-06-18 20:19:49', '2024-06-18 20:19:49'),
(33, 'Test Restore Database (MySQL, SQL Server): Making Backup for each database (RH3 and GLPI)', 4, '2024-06-18 20:19:57', '2024-06-18 20:19:57'),
(34, 'Test-Backbone Router Switches', 4, '2024-06-18 20:20:05', '2024-06-18 20:20:05'),
(35, 'Awarness of Employees About Cyber Attack', 4, '2024-06-18 20:20:11', '2024-06-18 20:20:11'),
(36, 'White Operation of Cyber Attack', 4, '2024-06-18 20:20:18', '2024-06-18 20:20:18');

INSERT INTO `user` (`userID`, `name`, `CIN`, `role`, `email`, `password`, `key`, `photo`, `branchID`, `username`, `createdAt`, `updatedAt`) VALUES
(1, 'Foulen Ben Foulen', '12345678', 'superadmin', 'test@leoni.com', '$2a$10$d23HsC7yTuMyPNuUhDZuPezuOaA3vgT88k5zRDqksCI.qwnFcCutS', NULL, 'test.png', 3, 'kiraieee', '2024-05-05 15:01:16', '2024-06-18 11:59:52');