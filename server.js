const PORT = process.env.PORT || 8080;

// Listen for client requests
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})