CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(128),
	"description" VARCHAR(256),
	"likes" INTEGER DEFAULT 0
	);

    