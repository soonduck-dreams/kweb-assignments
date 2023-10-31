CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(15) NOT NULL,
    `user_pw` VARCHAR(15) NOT NULL,
    `user_nickname` VARCHAR(20) NOT NULL,
    `profile_picture_link` TEXT NOT NULL,
    `profile_message` VARCHAR(30) NOT NULL,
    `unregistered` TINYINT(1) DEFAULT 0 NOT NULL,
    `date_enrolled` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,
    `create_user` INT NOT NULL,
    `link` TEXT NOT NULL,
    `max_users_count` INT NOT NULL,
    `unregistered` TINYINT(1) DEFAULT 0 NOT NULL,
    `date_created` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`create_user`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(300) NOT NULL,
    `user` INT NOT NULL,
    `channel` INT NOT NULL,
    `date_created` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`channel`)
    REFERENCES `channels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `followee` INT NOT NULL,
    `date_followed` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`follower`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`followee`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocker` INT NOT NULL,
    `blockee` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`blocker`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`blockee`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;