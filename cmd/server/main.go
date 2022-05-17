package main

import (
	"log"

	"deeper/server/handlers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	corsMiddleware := cors.New(cors.Config{
		AllowOrigins: "*",
	})

	v1 := app.Group("/api/v1/", corsMiddleware)

	h := handlers.NewHandlers()

	v1.Get("search", h.GetSearch)

	log.Fatal(app.Listen(":8080"))
}
