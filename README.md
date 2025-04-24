<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio Cewek</title>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --pink: #f9c5d1;
      --rose: #f8a1b0;
      --lavender: #e2d5f8;
      --white: #fff;
      --gray: #555;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Quicksand', sans-serif;
    }

    body {
      background: linear-gradient(135deg, var(--pink), var(--lavender));
      padding: 2rem;
      color: var(--gray);
    }

    .container {
      max-width: 960px;
      background-color: var(--white);
      margin: auto;
      border-radius: 30px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    header {
      text-align: center;
      margin-bottom: 2rem;
    }

    header h1 {
      font-size: 2.8rem;
      color: var(--rose);
    }

    header p {
      font-size: 1.1rem;
    }

    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin: 1rem auto;
      display: block;
      border: 4px solid var(--rose);
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin: 2rem 0;
    }

    nav a {
      text-decoration: none;
      color: var(--gray);
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: var(--lavender);
      transition: all 0.3s;
    }

    nav a:hover {
      background-color: var(--rose);
      color: white;
    }

    section {
      margin-bottom: 2.5rem;
    }

    section h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: var(--rose);
      position: relative;
    }

    section h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--rose);
      margin-top: 5px;
      border-radius: 5px;
    }

    .about, .projects, .skills {
      background-color: var(--lavender);
      padding: 1.5rem;
      border-radius: 20px;
    }

    .project {
      background-color: var(--white);
      margin: 1rem 0;
      padding: 1rem;
      border-left: 5px solid var(--rose);
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 1rem;
    }

    .skill {
      background: var(--rose);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      font-weight: bold;
      font-size: 0.9rem;
    }

    footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <img src="https://i.pinimg.com/564x/2a/58/92/2a58929e505a88081ab24f7c72c2e128.jpg" alt="Foto Profil" class="profile-img">
      <h1>Dini Artika Rahmawati</h1>
      <p>Mahasiswa Universitas Lampung</p>
    </header>

    <nav>
      <a href="#about">Tentang</a>
      <a href="#projects">Proyek</a>
      <a href="#skills">Keahlian</a>
    </nav>

    <section id="about">
      <h2>Tentang Saya</h2>
      <div class="about">
        <p>Saya adalah mahasiswi Universitas Lampung, Fakultas Keguruan dan Ilmu Pendidikan, Program Studi Pendidikan Teknologi Informasi.Website ini adalah forum pengumpulan tugas proyek Matakuliah Grafika Komputer</p>
      </div>
    </section>

    <section id="projects">
      <h2>Proyek</h2>
      <div class="projects">
        
        <div class="project">
          <h3>Tugas 1</h3>
          <p>Tokoh Perintis Grafika Komputer</p>
          <p><strong>Link Video:</strong> 
            <a href="https://drive.google.com/file/d/1CxqiEqW4jv6DxjeyD8GCHS4kTuZPGXgq/view?usp=drivesdk" target="_blank" style="color:#ffdd00;">Lihat Video</a>
          </p>
          <p><strong>Dokumen PDF:</strong> 
            <a href="dokumen/konten-edukasi.pdf" target="_blank" style="color:#ffdd00;">Lihat PDF</a>
          </p>
        </div>
    
        <div class="project">
          <h3>Tugas 2</h3>
          <p>Algoritma pembuatan Garis DDA</p>
          <p><strong>Link Video:</strong> 
            <a href="https://drive.google.com/drive/folders/1AIXyhZvffX2AY_jPkPoJunAnrBPxqI8r?usp=sharing" target="_blank" style="color:#ffdd00;">Lihat Video</a>
          </p>
          <p><strong>Dokumen PDF:</strong> 
            <a href="dokumen/konten-edukasi.pdf" target="_blank" style="color:#ffdd00;">Lihat PDF</a>
          </p>
        </div>
    
        <div class="project">
          <h3>Tugas 3</h3>
          <p>Algoritma pembuatan lingkaran Brasenham & Midpoint</p>
          <p><strong>Link Video:</strong> 
            <a href="https://drive.google.com/file/d/1XkdiEDXPa_ZNw7U2xf7q6B3yTON7zXvH/view?usp=sharing" target="_blank" style="color:#ffdd00;">Lihat Video</a>
          </p>
          <p><strong>Dokumen PDF:</strong> 
            <a href="dokumen/konten-edukasi.pdf" target="_blank" style="color:#ffdd00;">Lihat PDF</a>
          </p>
        </div>
    
      </div>
    </section>
    

    <section id="kontak">
      <h2>Kontak</h2>
      <div class="skills">
        <div class="skills-list">
          <a href="https://instagram.com/nama_igkamu" target="_blank" class="skill" style="background: #E1306C;">
            Instagram
          </a>
          <a href="https://linkedin.com/in/nama_linkedinkamu" target="_blank" class="skill" style="background: #0077B5;">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
    

    <footer>
      &copy; Mahasiswi 2025. Dibuat dengan cinta 💖 dan inspirasi.
    </footer>
  </div>
</body>
</html>
