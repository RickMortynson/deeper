package handlers

import (
	"deeper/lib/errors"
	"deeper/server/client"
	"deeper/server/parser"
	"github.com/gofiber/fiber/v2"
)

func (h Handlers) GetSearch(c *fiber.Ctx) error {
	url := c.Query("search", "")
	c.Accepts("Application/JSON")
	if url == "" {
		return c.Status(fiber.StatusNotAcceptable).JSON(errors.ExtErrorJSON("Empty URL", &errors.OptionalArgs{
			Desc: "You should add any url",
		}))
	}

	html, err := client.MakeRequest(url)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(errors.ErrorJSON(err.Error()))
	}

	URLs, err := parser.GetUrls(html)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(errors.ErrorJSON(err.Error()))
	}

	return c.JSON(URLs)
}
