import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Jika menggunakan paket slim

const Background = () => {
  const [init, setInit] = useState(false);

  // Inisialisasi engine Partikel hanya sekali
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Anda dapat menginisialisasi engine di sini dengan fitur tambahan jika diperlukan
      await loadSlim(engine); // Memuat versi slim dari tsparticles
    }).then(() => {
      setInit(true); // Setelah inisialisasi selesai, set state menjadi true
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Menampilkan container saat partikel dimuat
  };

  // Daftar warna yang ingin digunakan
  const colors = ["#FF0000", "#00FF00", "#FFFF00", "#FF00FF", "#0000FF"];

  // Fungsi untuk menghasilkan warna acak dari daftar warna yang sudah ditentukan
  const randomColorFromList = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // Menyesuaikan konfigurasi yang diberikan
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Latar belakang hitam (untuk tema luar angkasa)
        },
        image:
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)", // Menambahkan efek gradasi
      },
      fpsLimit: 120, // Mengatur batas FPS
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Menambahkan partikel saat diklik
          },
          onHover: {
            enable: true,
            mode: "repulse", // Menyebarkan partikel saat hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Jumlah partikel yang akan ditambahkan saat klik
          },
          repulse: {
            distance: 200, // Jarak repulse saat hover
            duration: 0.4, // Durasi repulse
          },
        },
      },
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 800 },
        },
        color: {
          // Mengatur warna acak setiap partikel
          value: randomColorFromList(),
          animation: {
            enable: false, // Menonaktifkan animasi untuk perubahan warna
          },
        },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      detectRetina: true, // Deteksi retina untuk kualitas layar tinggi
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles" // ID untuk container partikel
        particlesLoaded={particlesLoaded} // Fungsi callback saat partikel dimuat
        options={options} // Opsi konfigurasi partikel
      />
    );
  }

  return <></>; // Return kosong sampai partikel siap
};

export default Background;
