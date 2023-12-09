document.addEventListener("DOMContentLoaded", function () {
  // Mengambil referensi elemen-elemen HTML
  const generateUserButton = document.getElementById("generate-user");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userLocation = document.getElementById("user-location");
  const userImage = document.getElementById("user-image");

  // Menambahkan event listener untuk tombol "Generate Random User"
  generateUserButton.addEventListener("click", function () {
    // Menggunakan AJAX untuk mengambil data pengguna acak dari API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        // Mendapatkan data pengguna pertama dari hasil respons
        const user = data.results[0];

        // Memperbarui elemen-elemen HTML dengan data pengguna
        userName.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        userEmail.innerText = user.email;
        userLocation.innerText = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
        userImage.src = user.picture.large;
      })
      .catch((error) => console.error("Error fetching data: " + error));
  });
});
