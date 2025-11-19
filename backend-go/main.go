package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/menu", func(c *gin.Context) {
		c.JSON(200, gin.H{"menu": []string{"Tacos al Pastor", "Tacos de Carne Asada", "Tacos de Pescado", "Quesadilla de Queso"}})
	})

	r.GET("/gallery", func(c *gin.Context) {
		c.JSON(200, gin.H{"gallery": []string{
			"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300",
			"https://images.unsplash.com/photo-1542444459-db8f8b0a4c6d?w=300",
			"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
			"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=300",
		}})
	})

	r.POST("/reservation", func(c *gin.Context) {
		var data map[string]interface{}
		if err := c.BindJSON(&data); err != nil {
			c.JSON(400, gin.H{"status": "error"})
			return
		}
		// Aquí podrías guardar la reservación en una base de datos
		c.JSON(200, gin.H{"status": "ok"})
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
