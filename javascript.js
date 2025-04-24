function kumpulTugas(event) {
    event.preventDefault(); // Cegah reload halaman
  
    const namaTugas = document.getElementById("namaTugas").value;
    const fileInput = document.getElementById("fileTugas");
    const file = fileInput.files[0];
  
    if (namaTugas && file) {
      const list = document.getElementById("hasilPengumpulan");
      const li = document.createElement("li");
      li.textContent = `Tugas: ${namaTugas} | File: ${file.name}`;
      list.appendChild(li);
  
      // Reset form
      document.getElementById("formTugas").reset();
    } else {
      alert("Harap isi nama tugas dan upload file!");
    }
  }
  
  