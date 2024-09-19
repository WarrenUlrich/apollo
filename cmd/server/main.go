package main

import (
	"log"
	"net/http"

	"github.com/warrenulrich/apollo/pkg/assets"
)

func main() {
	// Serve static files from the embedded file system
	http.Handle("/", assets.ServeStaticFiles())

	// Start the HTTP server
	log.Println("Serving on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
